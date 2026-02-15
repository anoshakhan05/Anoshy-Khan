'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingElements } from '@/components/3d/FloatingElements';

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 bg-secondary">
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

            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent pointer-events-none" />
        </div>
    );
}
