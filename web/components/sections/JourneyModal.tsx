'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CaseStudy {
    title: string;
    category: string;
    metric: string;
    image: string;
    description: string;
    challenge: string;
    solution: string;
    learning: string;
    tags: string[];
}

const caseStudies: CaseStudy[] = [
    {
        title: "The First Hello World",
        category: "Web Development Origin",
        metric: "First Live Site",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
        description: "Where it all started. The journey of building my very first website from scratch, battling syntax errors and learning the fundamentals.",
        challenge: "I faced constant layout breaks, confusion over CSS positioning (centering a div was a nightmare!), and the frustration of code not working as expected.",
        solution: "I spent late nights debugging, reading documentation, and relentlessly practicing until I understood the 'why' behind the code. I didn't just copy-paste; I learned to build.",
        learning: "Failure is just part of the debugging process. Every error message is a lesson that brings you one step closer to the solution.",
        tags: ["HTML/CSS", "Basics", "Resilience"]
    },
    {
        title: "Social Media Dominance",
        category: "Digital Marketing",
        metric: "+300% Engagement",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
        description: "Transforming a quiet brand into a social media powerhouse using strategic Facebook and Instagram campaigns.",
        challenge: "The brand had zero visibility and unsure messaging. We needed to cut through the noise without a massive ad budget.",
        solution: "I crafted a visually consistent Instagram grid and high-converting Facebook ad creatives. We focused on storytelling and community interaction rather than just selling.",
        learning: "Aesthetics attract, but story sells. Consistent visual identity combined with authentic engagement assumes authority in any niche.",
        tags: ["Facebook Ads", "Instagram Growth", "Branding"]
    },
    {
        title: "Lumina Immersive Experience",
        category: "Modern Tech / SaaS",
        metric: "High Performance",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
        description: "Merging marketing psychology with high-end technology. A 3D-enabled SaaS platform built for the future.",
        challenge: "Creating a 'wow' factor while maintaining fast load times and SEO rankings. Complex 3D elements usually slow down websites.",
        solution: "Leveraged Next.js for speed and React Three Fiber for optimized 3D rendering. The result is a seamless blend of performance and visual immersion.",
        learning: "True full-stack power is understanding how design decisions impact technical performance—and vice versa.",
        tags: ["Next.js", "3D Web", "Full Stack"]
    }
];

interface JourneyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

// ... (keep interfaces)

export function JourneyModal({ isOpen, onClose }: JourneyModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-background overflow-y-auto custom-scrollbar"
                >
                    {/* Fixed Close Button */}
                    <button
                        onClick={onClose}
                        className="fixed top-6 right-6 z-[110] p-4 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-black transition-all duration-300 group border border-white/10"
                    >
                        <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    <div className="max-w-4xl mx-auto px-6 py-24 relative">
                        {/* Cinematic Intro */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-32 relative"
                        >
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6 block">The Journey</span>
                            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight">
                                Crafting Digital <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-300% animate-gradient">Excellence</span>
                            </h2>
                            <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                                A timeline of challenges turned into milestones. Here is the story behind the code and the strategy.
                            </p>

                            {/* Scroll Indicator */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-primary/50"
                            >
                                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
                            </motion.div>
                        </motion.div>

                        {/* Timeline */}
                        <div className="space-y-32 relative">
                            {/* Central Line */}
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 -translate-x-1/2 hidden md:block" />

                            {caseStudies.map((study, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8 }}
                                    className={`relative flex flex-col md:flex-row gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full -translate-x-1/2 mt-2 hidden md:block z-10 shadow-[0_0_20px_rgba(212,175,55,0.5)]" />

                                    {/* Content Side */}
                                    <div className="flex-1">
                                        <div className="relative group">
                                            <div className="absolute -inset-4 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-xl" />
                                            <div className="relative bg-secondary/80 border border-white/5 p-8 rounded-2xl backdrop-blur-sm hover:border-primary/20 transition-colors duration-300 overflow-hidden">
                                                {/* Background Image Overlay */}
                                                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                                    <img src={study.image} alt={study.title} className="w-full h-full object-cover grayscale" />
                                                </div>

                                                <div className="relative z-10">
                                                    <div className="flex flex-wrap gap-3 items-center mb-6">
                                                        <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                                            {study.category}
                                                        </span>
                                                        <span className="flex items-center gap-1 text-xs text-foreground/50">
                                                            <TrendingUp size={12} /> {study.metric}
                                                        </span>
                                                    </div>

                                                    <h3 className="text-3xl font-bold mb-4 font-heading">{study.title}</h3>
                                                    <p className="text-foreground/70 mb-8 leading-relaxed text-lg">{study.description}</p>

                                                    <div className="space-y-6">
                                                        <div>
                                                            <h4 className="flex items-center gap-2 text-sm font-bold mb-2 text-red-300/90 uppercase tracking-wide">
                                                                <Target size={14} /> The Challenge
                                                            </h4>
                                                            <p className="text-sm text-foreground/60 leading-relaxed pl-6 border-l border-white/5">
                                                                {study.challenge}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h4 className="flex items-center gap-2 text-sm font-bold mb-2 text-green-300/90 uppercase tracking-wide">
                                                                <Lightbulb size={14} /> The Solution
                                                            </h4>
                                                            <p className="text-sm text-foreground/60 leading-relaxed pl-6 border-l border-white/5">
                                                                {study.solution}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* "Key Learning" Side (Visual/Contrast) */}
                                    <div className="flex-1 md:py-8 flex items-center">
                                        <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/5 w-full relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-8 text-primary/5">
                                                <Lightbulb size={120} />
                                            </div>
                                            <h4 className="text-primary font-bold tracking-widest uppercase text-xs mb-4 relative z-10">
                                                Key Learning
                                            </h4>
                                            <p className="text-xl md:text-2xl font-headings italic text-foreground/90 leading-relaxed relative z-10">
                                                "{study.learning}"
                                            </p>
                                            <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                                                {study.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase tracking-wider text-foreground/40 border border-white/5 px-2 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Outro */}
                        <div className="text-center mt-32 pb-12">
                            <p className="text-foreground/50 mb-8">Ready to write the next chapter?</p>
                            <Button size="lg" onClick={onClose}>
                                Start a Project
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

