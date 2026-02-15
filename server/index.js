import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './models/User.js';
import Project from './models/Project.js';
import Service from './models/Service.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio";

process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('UNHANDLED REJECTION:', reason);
});

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
    res.send('Anosha Waseem Portfolio API is running...');
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find().populate('owner', 'name');
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

import nodemailer from 'nodemailer';

// ... existing code ...

// Email Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('DOMW EMAIL CONNECTION ERROR:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    console.log('Received contact request:', { name, email, subject });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio: ${subject} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.toString() });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
