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
    }
];

const stats = [
    { label: "Projects Done", value: "45+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Countries Served", value: "12+" },
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
                    initial={{ opacity: 0, y: 20 }}
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary/30 border border-white/5 p-8 rounded-2xl text-center backdrop-blur-sm hover:border-primary/20 transition-colors"
                        >
                            <h3 className="text-5xl font-bold text-primary mb-2 font-heading">{stat.value}</h3>
                            <p className="text-foreground/60 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials Carousel */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-secondary border border-white/5 p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12 group-hover:text-primary/20 transition-colors" />

                            <p className="text-foreground/80 mb-8 leading-relaxed italic relative z-10">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-primary mb-1">{testimonial.role}</p>
                                    <div className="flex items-center gap-1 text-xs text-foreground/50">
                                        <MapPin size={12} />
                                        <span>{testimonial.location}</span>
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
