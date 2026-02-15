'use client';

import { useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { FloatingElements } from '@/components/3d/FloatingElements';

export default function HeroScene() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
            videoRef.current.play().catch(error => {
                console.error("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full z-0 bg-secondary overflow-hidden">
            {/* Layer 1: Video Background */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover scale-105 z-0"
                style={{
                    filter: 'grayscale(0%) brightness(0.8) contrast(1.1)', // Slightly darker to let 3D pop
                }}
                src="/assets/hero-video.mp4"
            >
                Your browser does not support the video tag.
            </video>

            {/* Layer 2: Gold/Dark Tint Overlays */}
            <div
                className="absolute inset-0 pointer-events-none mix-blend-soft-light z-0"
                style={{ backgroundColor: '#D4AF37', opacity: 0.4 }}
            />
            <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply z-0"
                style={{ backgroundColor: '#0a0a0a', opacity: 0.3 }}
            />

            {/* Layer 3: 3D Floating Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Canvas>
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                        <Environment preset="city" />

                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1.5} color="#D4AF37" />
                        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4338ca" />

                        <Float
                            speed={2}
                            rotationIntensity={0.5}
                            floatIntensity={0.5}
                            floatingRange={[-0.5, 0.5]}
                        >
                            <FloatingElements />
                        </Float>
                    </Suspense>
                </Canvas>
            </div>

            {/* Layer 4: Gradient Overlay for Text Readability & Smooth Transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent pointer-events-none z-0" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-secondary/80 pointer-events-none z-0" />
        </div>
    );
}
