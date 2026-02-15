import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/components/ui/Button';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    containerClassName?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, containerClassName, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn('py-20 md:py-32 relative overflow-hidden', className)}
                {...props}
            >
                <div className={cn('container mx-auto px-4 md:px-6 relative z-10', containerClassName)}>
                    {children}
                </div>
            </section>
        );
    }
);
Section.displayName = 'Section';

export { Section };
