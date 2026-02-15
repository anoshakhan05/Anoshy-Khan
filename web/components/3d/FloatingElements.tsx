'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingElements() {
    const groupRef = useRef<THREE.Group>(null);
    const sphereRef = useRef<THREE.Mesh>(null);
    const torusRef = useRef<THREE.Mesh>(null);
    const gemRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.05;
        }
        // Subtle individual animations
        if (sphereRef.current) sphereRef.current.rotation.x = t * 0.1;
        if (torusRef.current) torusRef.current.rotation.z = t * 0.15;
    });

    return (
        <group ref={groupRef}>
            {/* Central Abstract Sphere */}
            <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[3, 1, 0]}>
                <MeshDistortMaterial
                    color="#D4AF37" // Gold
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>

            {/* Background Torus Ring */}
            <Torus ref={torusRef} args={[4, 0.1, 16, 100]} position={[0, 0, -5]} rotation={[Math.PI / 3, 0, 0]}>
                <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} transparent opacity={0.3} />
            </Torus>

            {/* Floating Gem Shape */}
            <Icosahedron ref={gemRef} args={[0.8, 0]} position={[-4, -2, 2]}>
                <meshStandardMaterial color="#1a1a1a" roughness={0.0} metalness={1.0} emissive="#D4AF37" emissiveIntensity={0.2} />
            </Icosahedron>

            {/* Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        (Math.random() - 0.5) * 15,
                        (Math.random() - 0.5) * 15,
                        (Math.random() - 0.5) * 10 - 5
                    ]}
                >
                    <sphereGeometry args={[0.03, 16, 16]} />
                    <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={2} />
                </mesh>
            ))}
        </group>
    );
}
