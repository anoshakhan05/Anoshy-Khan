import mongoose from "mongoose";
import User from "../models/User.js";
import Project from "../models/Project.js";
import Service from "../models/Service.js";

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio";

async function seedDatabase() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected");

        await User.deleteMany();
        await Project.deleteMany();
        await Service.deleteMany();

        const user = await User.create({
            name: "Anosha Waseem",
            title: "Digital Marketer & Web Development Specialist",
            experience: "5+ Years",
            bio: "I am a results-driven digital marketer with over five years of professional experience, specializing in web development-focused digital marketing solutions. I help brands grow through high-converting websites, performance optimization, and strategic digital execution.",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/anosha-waseem-digitalmarketer/",
            },
        });

        await Service.insertMany([
            {
                title: "Web Development for Marketing",
                description: "High-performance websites designed to convert traffic into measurable results.",
                icon: "Code2"
            },
            {
                title: "Conversion-Focused Websites",
                description: "Strategically designed layouts optimized for user experience and sales.",
                icon: "LineChart"
            },
            {
                title: "Digital Marketing Strategy",
                description: "Data-driven strategies aligned with business goals and growth.",
                icon: "Megaphone"
            },
            {
                title: "SEO & Performance Optimization",
                description: "Technical SEO, speed optimization, and performance improvements.",
                icon: "Rocket"
            },
            {
                title: "Landing Pages & Funnels",
                description: "Optimized funnels built to capture, nurture, and convert leads.",
                icon: "Globe"
            },
        ]);

        await Project.insertMany([
            {
                title: "Noir Threads",
                description: "Redefining the silhouette of modern luxury. Premium apparel and avant-garde streetwear platform.",
                technologies: ["Next.js", "E-commerce", "Fashion"],
                category: "E-Commerce",
                image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80",
                link: "https://b-xdw1.vercel.app/",
                owner: user._id,
            },
            {
                title: "Aura Dashboard",
                description: "Comprehensive analytics dashboard featuring real-time data visualization and management tools.",
                technologies: ["React", "Analytics", "Admin"],
                category: "Dashboard",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
                link: "https://dashboard-design-whp7.vercel.app",
                owner: user._id,
            },
            {
                title: "Life Upgrade",
                description: "A comprehensive lifestyle improvement platform focused on personal growth and wellness tracking.",
                technologies: ["React", "Vite", "Wellness"],
                category: "Lifestyle",
                image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&auto=format&fit=crop&q=80",
                link: "https://life-upgrade-two.vercel.app",
                owner: user._id,
            },
            {
                title: "Luxury Timepieces",
                description: "Premium watch showcase and e-commerce platform featuring immersive product presentations.",
                technologies: ["React", "Luxury", "Retail"],
                category: "E-Commerce",
                image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=80",
                link: "https://watches-lime-ten.vercel.app/",
                owner: user._id,
            },
        ]);

        console.log("Portfolio data seeded successfully");
        process.exit();
    } catch (error) {
        console.error("Seeding error:", error);
        process.exit(1);
    }
}

seedDatabase();
