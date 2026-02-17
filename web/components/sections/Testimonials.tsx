'use client';

import { Section } from '@/components/layout/Section';
import { motion } from 'framer-motion';
import { Quote, Globe, MapPin } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CEO, TechFlow",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60",
        quote: "Anosha transformed our digital presence completely. The 3D elements add a layer of sophistication that our competitors just don't have."
    },
    {
        name: "David Chen",
        role: "Founder, StartScale",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60",
        quote: "Incredible attention to detail. The improved SEO tracking and performance optimization increased our conversions by 40%."
    },
    {
        name: "Emma Wilson",
        role: "Marketing Director, LuxLife",
        location: "London, UK",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=60",
        quote: "Working with Anosha was a breeze. She understands both the technical and creative sides of web development perfectly."
    },
    {
        name: "Ahmed Khan",
        role: "CTO, NextGen Sol",
        location: "Lahore, Pakistan",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=60",
        quote: "Absolutely brilliant work! The responsiveness and modern design language exceeded our expectations."
    },
    {
        name: "Fatima Ali",
        role: "Founder, Artistry",
        location: "Islamabad, Pakistan",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=60",
        quote: "Professionalism at its peak. The project was delivered on time with exceptional quality."
    },
    {
        name: "Omar Farooq",
        role: "Director, FutureEstates",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=60",
        quote: "A world-class experience. The attention to UI/UX detail has significantly boosted our client engagement."
    }
];

const stats = [
    { label: "Projects Done", value: "45+" },
    { label: "Happy Clients", value: "40+" },
    { label: "Countries Served", value: "3+" },
];

export function Testimonials() {
    return (
        <Section id="testimonials" className="bg-background relative overflow-hidden">
            {/* Background Map Element (Abstract) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <Globe className="w-full h-full text-primary" strokeWidth={0.5} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Global Impact</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Trusted by Clients Worldwide</h2>
                    <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                        Delivering exceptional digital experiences across borders. From local startups to international enterprises.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-8 mb-20 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 1, scale: 1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-transparent p-2 md:p-8 text-center transition-colors"
                        >
                            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-1 md:mb-2 font-heading">{stat.value}</h3>
                            <p className="text-foreground/60 font-medium uppercase tracking-wider text-[10px] md:text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials Carousel */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-secondary border border-white/5 p-3 md:p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-2 right-2 md:top-8 md:right-8 text-primary/10 w-4 h-4 md:w-12 md:h-12 group-hover:text-primary/20 transition-colors" />

                            <p className="text-foreground/80 mb-3 md:mb-8 leading-normal md:leading-relaxed italic relative z-10 text-[10px] md:text-base line-clamp-4 md:line-clamp-none">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-[10px] md:text-base leading-tight">{testimonial.name}</h4>
                                    <p className="text-[9px] md:text-sm text-primary mb-0.5 md:mb-1 leading-tight">{testimonial.role}</p>
                                    <div className="flex items-center gap-1 text-[9px] md:text-xs text-foreground/50">
                                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                                        <span className="truncate max-w-[60px] md:max-w-none">{testimonial.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
