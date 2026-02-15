import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    experience: { type: String, required: true },
    bio: { type: String, required: true },
    socialLinks: {
        linkedin: String,
        upwork: String,
        github: String,
        email: String
    }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
