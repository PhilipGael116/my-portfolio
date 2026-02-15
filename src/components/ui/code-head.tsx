import { useRef, useEffect } from "react";

interface CodeHeadProps {
    className?: string;
    color?: string;
    speed?: number;
    fontSize?: number;
    opacity?: number;
}

export const CodeHead = ({
    className,
    color = "#3B82F6",
    speed = 1,
    fontSize = 14,
    opacity = 0.1
}: CodeHeadProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;

        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}()=+-*/!?;:".split("");
        const drops: number[] = [];
        const columns = width / fontSize;

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        const draw = () => {
            ctx.fillStyle = `rgba(15, 23, 42, ${opacity})`;
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = color;
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += speed;
            }
        };

        let animationFrameId: number;
        const animate = () => {
            draw();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            if (canvas) {
                width = canvas.width = canvas.offsetWidth;
                height = canvas.height = canvas.offsetHeight;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, speed, fontSize, opacity]);

    // A more stylized side profile head path
    const headPath = "M40,10 C20,10 5,30 5,55 C5,70 10,80 5,90 C0,100 5,110 20,115 C30,120 35,135 35,150 H75 C75,135 80,120 95,115 C105,110 110,95 110,65 C110,35 90,10 60,10 Z";

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{
                    maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 160'%3E%3Cpath d='${headPath}' fill='black'/%3E%3C/svg%3E")`,
                    WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 160'%3E%3Cpath d='${headPath}' fill='black'/%3E%3C/svg%3E")`,
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain'
                }}
            />
        </div>
    );
};
