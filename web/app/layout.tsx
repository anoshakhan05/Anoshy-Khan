import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anosha Waseem | Digital Marketer & Web Developer",
  description: "Premium digital marketing and web development portfolio of Anosha Waseem. Elevate your brand with high-converting strategies and immersive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-secondary text-secondary-foreground selection:bg-primary selection:text-primary-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
