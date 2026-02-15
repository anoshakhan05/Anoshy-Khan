import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String }],
    category: { type: String, required: true },
    image: { type: String }, // URL or path to image
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
