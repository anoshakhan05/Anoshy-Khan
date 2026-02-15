import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, HTMLMotionProps } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asMotion?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', asMotion = false, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-white/10',
            outline: 'border-2 border-primary text-primary hover:bg-primary/10',
            ghost: 'hover:bg-white/5 text-foreground',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
        };

        const classes = cn(
            'inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase',
            variants[variant],
            sizes[size],
            className
        );

        if (asMotion) {
            // @ts-ignore - Framer motion types are tricky with forwardRef sometimes
            return (
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={classes}
                    ref={ref as any}
                    {...(props as HTMLMotionProps<"button">)}
                />
            );
        }

        return (
            <button className={classes} ref={ref} {...props} />
        );
    }
);
Button.displayName = 'Button';

export { Button };
