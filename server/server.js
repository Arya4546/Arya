const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'https://arya-gules.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `📩 New Contact Form Submission from ${name}`,
    html: `
      <div style="background-color:#f4f7fb; padding:40px 20px; font-family:'Segoe UI', Roboto, Arial, sans-serif; color:#333;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background:linear-gradient(135deg, #6C63FF, #4A47A3); color:#fff; padding:25px 20px; text-align:center;">
            <h1 style="margin:0; font-size:22px; font-weight:600;">📨 New Portfolio Message</h1>
          </div>

          <!-- Body -->
          <div style="padding:30px 25px;">
            <p style="font-size:16px; line-height:1.6; margin:0 0 15px;">
              You have received a new message from your portfolio website contact form.
            </p>

            <div style="margin-bottom:20px;">
              <p style="margin:8px 0; font-size:15px;"><strong style="color:#6C63FF;">👤 Name:</strong> ${name}</p>
              <p style="margin:8px 0; font-size:15px;"><strong style="color:#6C63FF;">📧 Email:</strong> 
                <a href="mailto:${email}" style="color:#4A47A3; text-decoration:none;">${email}</a>
              </p>
            </div>

            <div style="background:#f9f9ff; border-left:4px solid #6C63FF; padding:15px; border-radius:6px; font-size:15px; line-height:1.6; color:#444;">
              ${message}
            </div>
          </div>

          <!-- Footer -->
          <div style="background:#fafafa; padding:15px 20px; text-align:center; font-size:13px; color:#666; border-top:1px solid #eee;">
            <p style="margin:5px 0;">💼 Sent from <strong>your Portfolio Contact Form</strong></p>
            <p style="margin:5px 0; font-size:12px;">&copy; ${new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
          </div>

        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
