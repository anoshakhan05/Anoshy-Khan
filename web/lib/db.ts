import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio";

if (!MONGODB_URI) {
    throw new Error('Please define the MONGO_URI environment variable inside .env');
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    // If we are on Vercel and the URI is localhost, it's going to fail anyway. Note it.
    if (process.env.VERCEL && MONGODB_URI.includes('127.0.0.1')) {
        console.warn("Skipping DB connection: MONGODB_URI is localhost in a Vercel environment.");
        throw new Error("Cannot connect to local MongoDB from Vercel. Please set a cloud MONGO_URI.");
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 3000, // Fail fast if DB doesn't connect
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
