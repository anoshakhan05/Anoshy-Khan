'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="mb-16">
                    <Link href="/">
                        <Button variant="ghost" className="mb-8 hover:bg-white/5 text-foreground/60 hover:text-foreground">
                            <ArrowLeft className="mr-2" size={20} /> Back to Home
                        </Button>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Archive</span>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">All Projects</h1>
                        <p className="text-foreground/60 text-lg max-w-2xl">
                            A curated collection of web applications, e-commerce platforms, and digital experiences I've crafted.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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
                                    <div className="flex justify-between items-start mb-2">
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            <h3 className="text-xl font-bold font-heading">{project.title}</h3>
                                        </a>
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-primary/80 bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                            {project.category}
                                        </span>
                                    </div>

                                    <p className="text-foreground/60 text-sm mb-6 flex-grow">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-foreground/70 border border-white/10 group-hover:border-white/20 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
