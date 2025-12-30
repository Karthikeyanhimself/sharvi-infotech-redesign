import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = false, ...props }: GlassCardProps) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-sap-900/40 backdrop-blur-md shadow-glass p-6 transition-all duration-300 group",
                hoverEffect && "hover:border-white/20 hover:bg-sap-900/60 hover:shadow-neon/20",
                className
            )}
            {...props}
        >
            {/* Subtle reflective sheen on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            {children}
        </div>
    );
};