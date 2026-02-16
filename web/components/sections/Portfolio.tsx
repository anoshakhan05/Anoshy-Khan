'use client';

import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "Noir Threads",
        category: "E-Commerce / Fashion",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80",
        description: "Redefining the silhouette of modern luxury. Premium apparel and avant-garde streetwear platform.",
        tags: ["Next.js", "E-commerce", "Fashion"],
        links: { demo: "https://b-xdw1.vercel.app/", list: "#" }
    },
    {
        title: "Aura Dashboard",
        category: "UI/UX Design & Dev",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        description: "Comprehensive analytics dashboard featuring real-time data visualization and management tools.",
        tags: ["React", "Analytics", "Admin"],
        links: { demo: "https://dashboard-design-whp7.vercel.app", list: "#" }
    },
    {
        title: "Life Upgrade",
        category: "Lifestyle Platform",
        image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&auto=format&fit=crop&q=80",
        description: "A comprehensive lifestyle improvement platform focused on personal growth and wellness tracking.",
        tags: ["React", "Vite", "Wellness"],
        links: { demo: "https://life-upgrade-two.vercel.app", list: "#" }
    },
    {
        title: "Luxury Timepieces",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=80",
        description: "Premium watch showcase and e-commerce platform featuring immersive product presentations.",
        tags: ["React", "Luxury", "Retail"],
        links: { demo: "https://watches-lime-ten.vercel.app/", list: "#" }
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
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                        <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                            <ExternalLink size={16} className="mr-2" /> Live Demo
                                        </Button>
                                    </a>
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
