import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary relative selection:bg-primary selection:text-black">
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Portfolio />

      <Testimonials />

      <Contact />

      <Footer />
    </main>
  );
}
