'use client';

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 bg-secondary overflow-hidden">
            {/* Video Background - Base Layer */}
            {/* Grayscale base to allow tinting without color clashes */}
            {/* Video Background - Base Layer */}
            {/* Grayscale base to allow tinting without color clashes */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-105"
                style={{
                    filter: 'grayscale(100%) brightness(1.2) contrast(1.1)',
                }}
            >
                <source src="/assets/Whisk_qdm4kdn0idnkbty00szivmytigm3qtlkldmm1cz.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Tint Overlay 1: Gold Tint */}
            {/* Soft Light blend mode applies the gold color (#D4AF37) to the greyscale video 
                creating a metallic premium look */}
            <div
                className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                style={{ backgroundColor: '#D4AF37', opacity: 0.5 }}
            />

            {/* Tint Overlay 2: Secondary Darkener */}
            {/* Multiply blend mode with secondary color (#0a0a0a) to deepen blacks 
                and ensure text contrast */}
            <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply"
                style={{ backgroundColor: '#0a0a0a', opacity: 0.2 }}
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent pointer-events-none" />

            {/* Optional: Radial Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-secondary/80 pointer-events-none" />
        </div>
    );
}
