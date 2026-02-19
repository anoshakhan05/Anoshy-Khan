import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate input
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify connection configuration
        try {
            await transporter.verify();
            console.log("Transporter ready");
        } catch (error) {
            console.error("Transporter verification failed:", error);
            return NextResponse.json(
                { message: 'Server configuration error', error: (error as Error).toString() },
                { status: 500 }
            );
        }

        const mailOptions = {
            from: email, // Sender address (this might be overridden by Gmail to be the authenticated user)
            to: process.env.EMAIL_USER, // List of receivers
            subject: `Portfolio: ${subject} from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { message: 'Failed to send email', error: (error as Error).toString() },
            { status: 500 }
        );
    }
}
