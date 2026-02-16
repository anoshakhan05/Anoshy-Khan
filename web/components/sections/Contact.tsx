'use client';

import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
    return (
        <Section id="contact" className="bg-secondary">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Let's Build Something Extraordinary.</h2>
                    <p className="text-foreground/70 text-lg mb-12 leading-relaxed">
                        Whether you have a project in mind or just want to say hi, I'm always open to discussing new opportunities and ideas.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/50 uppercase tracking-wider">Email</p>
                                <a href="mailto:codewithanosha@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">codewithanosha@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/50 uppercase tracking-wider">Phone</p>
                                <a href="tel:+923261975094" className="text-lg font-medium hover:text-primary transition-colors">+92 326 197 5094</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/50 uppercase tracking-wider">Location</p>
                                <p className="text-lg font-medium">Remote / Available Worldwide</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-accent/10 p-8 md:p-10 rounded-2xl border border-white/5 backdrop-blur-sm"
                >
                    <form
                        className="space-y-6"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const data = Object.fromEntries(formData.entries());

                            try {
                                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact`, {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(data),
                                });

                                if (response.ok) {
                                    window.location.href = '/success';
                                } else {
                                    alert('Failed to send message. Please try again.');
                                }
                            } catch (error) {
                                console.error('Error:', error);
                                alert('An error occurred. Please try again.');
                            }
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                            <select
                                id="subject"
                                name="subject"
                                className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                            >
                                <option value="Web Development Project">Web Development Project</option>
                                <option value="Digital Marketing Strategy">Digital Marketing Strategy</option>
                                <option value="SEO Consultation">SEO Consultation</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <Button type="submit" className="w-full" size="lg">Send Message</Button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}
