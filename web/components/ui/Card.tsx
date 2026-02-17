import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button'; // Re-use cn utility
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'interactive';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        const variants = {
            default: 'bg-accent/50 border border-white/5',
            glass: 'bg-white/5 md:backdrop-blur-md border border-white/10 shadow-xl',
            interactive: 'bg-accent/30 hover:bg-accent/50 border border-white/5 hover:border-primary/30 transition-all duration-300 group',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-xl overflow-hidden',
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Card.displayName = 'Card';

export const MotionCard = motion(Card);

export { Card };
