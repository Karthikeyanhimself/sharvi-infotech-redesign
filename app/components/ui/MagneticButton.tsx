'use client';

import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// FIX: Change 'React.ButtonHTMLAttributes' to 'HTMLMotionProps<"button">'
// This resolves the conflict between HTML drag events and Framer gestures.
interface Props extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
}

export const MagneticButton = ({ children, className, ...props }: Props) => {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        // Safety check to ensure ref exists
        if (!ref.current) return;

        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX * 0.2); // Magnetic strength
        y.set(middleY * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mX, y: mY }}
            className={cn(
                "relative rounded-full px-8 py-4 text-lg font-bold tracking-wider bg-sap-500 text-white overflow-hidden group",
                "border border-sap-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300",
                "hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:bg-sap-400",
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            {/* Glowing background effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent-purple to-sap-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        </motion.button>
    );
};