import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-secondary border-t border-white/5 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold font-heading tracking-tighter hover:text-primary transition-colors mb-4 block">
                            Anosha Waseem<span className="text-primary">.</span>
                        </Link>
                        <p className="text-foreground/60 max-w-sm">
                            Helping brands grow through strategic digital marketing and high-performance web development.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-foreground/60">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="mailto:anosha@example.com" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-sm text-foreground/40">
                    <p>&copy; {new Date().getFullYear()} Anosha Waseem. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
