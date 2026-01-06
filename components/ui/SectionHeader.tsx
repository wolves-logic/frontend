import { clsx } from "clsx";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    description,
    align = "center",
    className
}: SectionHeaderProps) {
    return (
        <div className={clsx(
            "mb-12 md:mb-16",
            align === "center" && "text-center mx-auto",
            align === "left" && "text-left",
            align === "right" && "text-right",
            align === "center" && description && "max-w-3xl",
            className
        )}>
            {subtitle && (
                <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight">
                {title}
            </h2>
            {description && (
                <p className="text-text-light text-lg leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
