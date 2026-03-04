import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis.' },
                { status: 400 }
            );
        }

        // Configure Nodemailer transporter
        // We use Gmail SMTP here. It requires an "App Password" if 2FA is enabled.
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content setup
        const mailOptions = {
            from: process.env.SMTP_USER, // Sender address (your authenticated email)
            to: process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER, // Receiver
            replyTo: email, // If you hit reply, it goes to the user who filled the form
            subject: `Nouveau message de ${name} (Vision Plug Contact)`,
            text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Nouveau message depuis le formulaire de contact</h2>
                    <p><strong>Nom:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr />
                    <h3>Message:</h3>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email envoyé avec succès.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json(
            { error: 'Erreur serveur lors de l\'envoi de l\'email.' },
            { status: 500 }
        );
    }
}
