'use client';

import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "E-Commerce Luxury Brand",
        category: "Web Development & Strategy",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
        description: "A high-conversion e-commerce platform for a luxury fashion brand, result in a 40% increase in sales.",
        tags: ["Next.js", "Shopify", "SEO"],
        links: { demo: "#", list: "#" }
    },
    {
        title: "FinTech Dashboard",
        category: "UI/UX Design & Dev",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        description: "Comprehensive analytics dashboard for a financial tech startup, featuring real-time data visualization.",
        tags: ["React", "D3.js", "Tailwind"],
        links: { demo: "#", list: "#" }
    },
    {
        title: "Healthcare Portal",
        category: "Full Stack App",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
        description: "Secure patient management system compliant with healthcare regulations, streamlining appointment booking.",
        tags: ["Node.js", "PostgreSQL", "React"],
        links: { demo: "#", list: "#" }
    }
];

export function Portfolio() {
    return (
        <Section id="portfolio" className="bg-secondary/50">
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Selected Works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card variant="glass" className="h-full flex flex-col group overflow-hidden border-white/5 hover:border-primary/50 transition-colors">
                            <div className="relative aspect-video bg-accent/30 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                        <ExternalLink size={16} className="mr-2" /> Live Demo
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-foreground/60 text-sm mb-6 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-foreground/70 border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button variant="outline" size="lg">View All Projects</Button>
            </div>
        </Section>
    );
}
