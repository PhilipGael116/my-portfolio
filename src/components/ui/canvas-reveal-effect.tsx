"use client";
import React, { useRef, useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

export const CanvasRevealEffect = ({
    animationSpeed = 0.4,
    opacities = [0.3, 0.5, 0.8, 1],
    colors = [[0, 217, 255]], // Cyan color
    containerClassName,
    dotSize = 2,
    showGradient = true,
}: {
    animationSpeed?: number;
    opacities?: number[];
    colors?: number[][];
    containerClassName?: string;
    dotSize?: number;
    showGradient?: boolean;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let grid: GridSquare[][] = [];
        let startTime = 0;
        let isRevealed = false;

        const resizeCanvas = () => {
            if (canvas) {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
                initGrid();
            }
        };

        const initGrid = () => {
            grid = [];
            const squareSize = dotSize;
            const cols = Math.ceil(canvas.width / squareSize);
            const rows = Math.ceil(canvas.height / squareSize);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            for (let i = 0; i < cols; i++) {
                grid[i] = [];
                for (let j = 0; j < rows; j++) {
                    grid[i][j] = new GridSquare(
                        i * squareSize,
                        j * squareSize,
                        squareSize,
                        colors[Math.floor(Math.random() * colors.length)],
                        opacities[Math.floor(Math.random() * opacities.length)],
                        centerX,
                        centerY
                    );
                }
            }
        };

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;

            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                grid.forEach((col) => {
                    col.forEach((square) => {
                        square.update(animationSpeed, elapsedTime);
                        square.draw(ctx);
                    });
                });
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                    if (entry.isIntersecting && !isRevealed) {
                        // Trigger reveal animation
                        isRevealed = true;
                        grid.forEach((col) => {
                            col.forEach((square) => {
                                square.reveal();
                            });
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (canvas) {
            observer.observe(canvas);
        }

        if (isInView) {
            animate(0);
        }

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
            if (canvas) {
                observer.unobserve(canvas);
            }
        };
    }, [animationSpeed, colors, opacities, dotSize, isInView]);

    return (
        <div className={`h-full w-full absolute inset-0 ${containerClassName}`}>
            <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />
            {showGradient && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            )}
        </div>
    );
};

class GridSquare {
    x: number;
    y: number;
    size: number;
    color: number[];
    opacity: number;
    targetOpacity: number;
    maxOpacity: number;
    opacitySpeed: number;
    delay: number;
    revealed: boolean;

    constructor(
        x: number,
        y: number,
        size: number,
        color: number[],
        opacity: number,
        centerX: number,
        centerY: number
    ) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.maxOpacity = opacity;
        this.opacity = 0; // Start invisible
        this.targetOpacity = 0;
        this.opacitySpeed = 0.02;
        this.revealed = false;

        // Calculate delay based on distance from center for wave effect
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        this.delay = distance * 0.5; // Adjust multiplier for speed of wave
    }

    reveal() {
        this.revealed = true;
        this.targetOpacity = this.maxOpacity;
    }

    update(speed: number, time: number) {
        // Check if it's time to reveal based on delay
        if (this.revealed && time > this.delay) {
            // Animate to target opacity
            if (this.opacity < this.targetOpacity) {
                this.opacity += this.opacitySpeed * speed;
                if (this.opacity > this.targetOpacity) {
                    this.opacity = this.targetOpacity;
                }
            }

            // Subtle flickering after reveal
            if (this.opacity >= this.maxOpacity * 0.9 && Math.random() < 0.005) {
                this.targetOpacity = this.maxOpacity * (Math.random() * 0.3 + 0.7);
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.opacity > 0.01) {
            ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }
}

export function CanvasRevealEffectDemo() {
    return (
        <>
            <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
                <Card title="Sheetal is Nisha">
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="Nisha is Munni">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={8}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card title="Munni is Aditi">
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </>
    );
}

export const Card = ({
    title,
    children,
    description,
}: {
    title: string;
    children?: React.ReactNode;
    description?: string;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border group/canvas-card flex flex-col border-white/20 max-w-sm w-full mx-auto p-6 relative h-full overflow-hidden rounded-3xl"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* "Hover Me" text - visible when NOT hovered */}
            <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-white/60 text-2xl font-semibold">Hover Me</p>
            </div>

            {/* Content at bottom - only visible on hover */}
            <div className={`relative z-20 mt-auto transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-x-0 bottom-0 h-40 -z-10 pointer-events-none" />

                <div className="text-left">
                    <h2 className="text-white text-3xl font-bold mb-2">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
