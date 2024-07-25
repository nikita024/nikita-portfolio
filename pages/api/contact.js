import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message, subject } = req.body;
        const to = process.env.MAIL_TO_ADDRESS;
        const body = `From: ${name}<br>E-Mail: ${email}<br>Message:<br>${message}`;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
          });

        // const transporter = nodemailer.createTransport({
        //     host: process.env.MAIL_HOST,
        //     port: process.env.MAIL_PORT,
        //     secure: process.env.MAIL_USE_TLS,
        //     auth: {
        //         user: process.env.MAIL_USERNAME,
        //         pass: process.env.MAIL_PASSWORD,
        //     }
        // });

        try {
            // const info = {
            //     from: email,
            //     to,
            //     subject: `New Message from Website: ${subject}`,
            //     html: body,
            // }
            // await transporter.sendMail(info);

            const mailOptions = {
                from: email,
                to: process.env.RECEIVER_EMAIL,
                subject: 'New Contact Form Submission',
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSubject: ${subject}`,
            };
        
            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'Email sent successfully', mailOptions });
        } catch (error) {
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).end();
    }
}
