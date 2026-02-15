'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import HeroScene from '@/components/3d/HeroScene';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="hero">
            {/* 3D Background */}
            <HeroScene />

            {/* Content Overlay */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
                        Available for Freelance & Projects
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight leading-none text-white drop-shadow-xl">
                        Anosha Waseem<span className="text-primary">.</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-light mb-8 max-w-3xl mx-auto">
                        Digital Marketer & Web Development Specialist
                    </h2>

                    <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                        I craft high-performance websites and data-driven marketing strategies that turn visitors into customers.
                        Elevate your brand with a blend of technical expertise and creative vision.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#portfolio">
                            <Button asMotion variant="primary" size="lg" className="w-full sm:w-auto">
                                View Projects
                            </Button>
                        </Link>
                        <Link href="#contact">
                            <Button asMotion variant="outline" size="lg" className="w-full sm:w-auto hover:bg-white/10 hover:text-white border-white/20">
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/50 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
}
