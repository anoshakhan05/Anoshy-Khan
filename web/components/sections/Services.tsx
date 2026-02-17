'use client';

import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Code2, LineChart, Megaphone, Smartphone, Globe, Rocket } from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description: "Custom, responsive, and high-performance websites built with modern technologies like Next.js and React."
    },
    {
        icon: Megaphone,
        title: "Digital Marketing",
        description: "Strategic campaigns across social media, email, and PPC to drive traffic and converting leads."
    },
    {
        icon: LineChart,
        title: "SEO Optimization",
        description: "Data-driven SEO strategies to improve visibility, ranking, and organic traffic growth."
    },
    {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Ensuring your brand looks exceptional and functions perfectly on every device and screen size."
    },
    {
        icon: Globe,
        title: "Landing Pages",
        description: "High-converting landing pages designed specifically for marketing campaigns and lead generation."
    },
    {
        icon: Rocket,
        title: "Performance Tuning",
        description: "Optimizing site speed, accessibility, and core web vitals for better user experience and SEO."
    }
];

export function Services() {
    return (
        <Section id="services" className="bg-secondary">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                >
                    My Services
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-heading mb-6"
                >
                    Comprehensive Digital Solutions
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-foreground/60 text-lg"
                >
                    Specialized services designed to elevate your brand and drive sustainable business growth.
                </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card variant="interactive" className="p-3 md:p-8 h-full">
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 md:mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                <service.icon className="text-primary group-hover:text-black transition-colors duration-300 w-4 h-4 md:w-6 md:h-6" />
                            </div>
                            <h3 className="text-xs md:text-xl font-bold font-heading mb-1 md:mb-3 leading-tight">{service.title}</h3>
                            <p className="text-[10px] md:text-base text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors line-clamp-3 md:line-clamp-none">
                                {service.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
