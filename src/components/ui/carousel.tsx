"use client";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useId } from "react";
import { cn } from "@/lib/utils";

interface SlideData {
    title: string;
    button: string;
    src: string;
}

interface SlideProps {
    slide: SlideData;
    index: number;
    current: number;
    handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    const slideRef = useRef<HTMLLIElement>(null);

    const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.style.opacity = "1";
    };

    const { src, title, button } = slide;

    return (
        <li
            ref={slideRef}
            className="flex flex-1 flex-col items-center justify-center relative z-10 w-(--slide-width) h-[350px] sm:h-[50vmin] opacity-100 transition-all duration-600 ease-in-out"
            onClick={() => handleSlideClick(index)}
            style={{
                transform:
                    current !== index
                        ? "scale(0.85) rotateX(4deg)"
                        : "scale(1) rotateX(0deg)",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            <div
                className="absolute top-0 left-0 w-full h-full bg-white rounded-[1%/3%] overflow-hidden transition-all duration-600 ease-in-out"
            >
                <img
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-600 ease-in-out pointer-events-none"
                    alt={title}
                    src={src}
                    onLoad={imageLoaded}
                    loading="lazy"
                />
                {current === index && (
                    <div className="absolute inset-0 bg-black/30 transition-all" />
                )}
            </div>

            <article
                className={cn(
                    "relative p-[4vmin] transition-opacity duration-1000 ease-in-out",
                    current === index ? "opacity-100 visible" : "opacity-0 invisible"
                )}
            >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold  relative text-black sm:mb-40 mb-25">
                    {title}
                </h2>
                <div className="flex justify-center mt-4">
                    <button className="px-4 py-2 mt-4 text-sm text-black bg-white border border-transparent rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] font-bold cursor-pointer">
                        {button}
                    </button>
                </div>
            </article>
        </li>
    );
};

interface CarouselControlProps {
    type: string;
    title: string;
    handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
    return (
        <button
            className={`h-10 w-10 rounded-full flex items-center justify-center bg-gray-800 border-2 border-gray-700 hover:border-primary transition duration-200 ${type === "previous" ? "rotate-180" : ""
                }`}
            title={title}
            onClick={handleClick}
        >
            <ArrowRight className="text-gray-200" />
        </button>
    );
};

interface CarouselProps {
    slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
    const [current, setCurrent] = useState(0);

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? slides.length - 1 : previous);
    };

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === slides.length ? 0 : next);
    };

    const handleSlideClick = (index: number) => {
        if (current !== index) {
            setCurrent(index);
        }
    };

    const id = useId();

    return (
        <div className="relative w-full sm:h-[calc(50vmin)] h-[calc(50vmin+7.3rem)]" aria-labelledby={`carousel-heading-${id}`}>
            <ul
                className="absolute flex gap-(--slide-gap) transition-transform duration-600 ease-in-out [--slide-width:70vmin] sm:[--slide-width:45vmin] [--slide-gap:4vmin]"
                style={{
                    left: "50%",
                    transform: `translateX(calc(-1 * (var(--slide-width) / 2) - (${current} * (var(--slide-width) + var(--slide-gap)))))`,
                }}
            >
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        slide={slide}
                        index={index}
                        current={current}
                        handleSlideClick={handleSlideClick}
                    />
                ))}
            </ul>

            <div className="flex absolute justify-center w-full gap-4 top-[calc(100%+2rem)]">
                <CarouselControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick}
                />

                <CarouselControl
                    type="next"
                    title="Go to next slide"
                    handleClick={handleNextClick}
                />
            </div>
        </div>
    );
}

export function CarouselDemo() {
    const slideData = [
        {
            title: "Todo List",
            button: "View Live Site",
            src: "/my-works-1.png",
        },
        {
            title: "Urban Dreams",
            button: "View Live Site",
            src: "/my-works-2.png",
        },
        {
            title: "Neon Nights",
            button: "View Live Site",
            src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Desert Whispers",
            button: "View Live Site",
            src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
        </div>
    );
}
