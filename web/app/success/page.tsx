import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Success() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-secondary">
            <h1 className="text-4xl font-bold text-primary mb-4">Message Sent!</h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-md">
                Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <Link href="/">
                <Button variant="primary">Back to Home</Button>
            </Link>
        </div>
    );
}
