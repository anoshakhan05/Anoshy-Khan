'use client';

import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { Button, getButtonClasses } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

export function Portfolio() {
    // Show only the first 3 projects on the homepage
    const displayedProjects = projects.slice(0, 3);

    return (
        <Section id="portfolio" className="bg-secondary/50">
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Selected Works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <Card variant="glass" className="h-full flex flex-col group overflow-hidden border-white/5 hover:border-primary/50 transition-colors">
                            <div className="relative aspect-video bg-accent/30 overflow-hidden group/image">
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        quality={75}
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 pointer-events-none text-white font-medium flex items-center">
                                            <ExternalLink size={16} className="mr-2" /> Live Demo
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-block w-fit">
                                    <h3 className="text-xl font-bold font-heading mb-2">{project.title}</h3>
                                </a>
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
                <Link
                    href="/projects"
                    className={getButtonClasses({ variant: 'outline', size: 'lg' })}
                >
                    View All Projects
                </Link>
            </div>
        </Section>
    );
}
