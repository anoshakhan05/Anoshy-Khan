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
                title: "High-Converting Business Website",
                description: "Developed a modern business website focused on conversions and performance.",
                technologies: ["Node.js", "Modern UI", "SEO"],
                category: "Web Development",
                owner: user._id,
            },
            {
                title: "Lead Generation Funnel",
                description: "Designed and optimized a multi-step funnel to improve lead quality.",
                technologies: ["Landing Pages", "Analytics", "Optimization"],
                category: "Digital Marketing",
                owner: user._id,
            },
            {
                title: "Portfolio Website with 3D UI",
                description: "Created a premium portfolio with immersive 3D animations and smooth UX.",
                technologies: ["3D UI", "Node.js", "Netlify"],
                category: "Branding",
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
