'use client';

import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { JourneyModal } from './JourneyModal';

const experiencePoints = [
    "5+ Years of Hands-on Experience",
    "Proven Track Record in Digital Growth",
    "Full-Stack Web Development Expertise",
    "Data-Driven Marketing Strategies"
];

export function About() {
    const [isJourneyOpen, setIsJourneyOpen] = useState(false);

    return (
        <Section id="about" className="bg-secondary/50">
            <JourneyModal isOpen={isJourneyOpen} onClose={() => setIsJourneyOpen(false)} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Me</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                        Bridging the gap between <span className="text-primary">Design</span> and <span className="text-primary">Performance</span>.
                    </h2>
                    <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                        I am Anosha Waseem, a seasoned Digital Marketer and Web Development Specialist. With over five years of experience, I help businesses build authoritative online presences that not only look stunning but drive measurable results.
                    </p>
                    <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                        My unique approach combines technical coding expertise with strategic marketing insights, ensuring your website is a powerful engine for growth.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {experiencePoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                                <span className="text-foreground/80 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>

                    <Button variant="outline" onClick={() => setIsJourneyOpen(true)}>Learn More About My Journey</Button>
                </motion.div>

                {/* Visual / Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-accent/20 group">
                        <video
                            src="/assets/profile-video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        {/* Overlay gradient for better text readability if needed, or aesthetic tint */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border border-primary/30 rounded-2xl -z-10" />
                </motion.div>
            </div>
        </Section>
    );
}
