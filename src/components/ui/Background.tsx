import React from "react";
import { cn } from "../../lib/utils";

export function GridBackground({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full bg-[#0F172A] flex flex-col overflow-x-hidden">
            {/* The Grid Pattern */}
            <div
                className={cn(
                    "fixed inset-0 pointer-events-none",
                    "bg-size-[40px_40px]",
                    "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    "mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"
                )}
            />

            {/* Content goes here */}
            <div className="relative z-20 w-full">
                {children}
            </div>
        </div>
    );
}
