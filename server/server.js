const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();


app.use(cors({
  origin: "https://arya-gules.vercel.app",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

// Handle preflight requests
app.options("*", cors());
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
    <div style="background:linear-gradient(135deg, #f0f4ff, #e9ecf7); padding:40px 20px; font-family:'Segoe UI', Roboto, Arial, sans-serif; color:#222;">
      <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 10px 28px rgba(0,0,0,0.12);">
        
        <!-- Header -->
        <div style="background:linear-gradient(135deg, #5a4bff, #7c3aed); color:#fff; padding:28px 20px; text-align:center;">
          <h1 style="margin:0; font-size:24px; font-weight:700; letter-spacing:0.5px;">✨ New Portfolio Message</h1>
        </div>

        <!-- Body -->
        <div style="padding:32px 28px;">
          <p style="font-size:16px; line-height:1.7; margin:0 0 18px;">
            You have received a new message from your <strong style="color:#5a4bff;">portfolio contact form</strong>.
          </p>

          <div style="margin-bottom:24px;">
            <p style="margin:10px 0; font-size:15px;">
              <strong style="color:#5a4bff;">👤 Name:</strong> ${name}
            </p>
            <p style="margin:10px 0; font-size:15px;">
              <strong style="color:#5a4bff;">📧 Email:</strong> 
              <a href="mailto:${email}" style="color:#7c3aed; font-weight:500; text-decoration:none;">${email}</a>
            </p>
          </div>

          <div style="background:#faf9ff; border:1px solid #e2d9ff; border-radius:8px; padding:18px; font-size:15px; line-height:1.6; color:#333;">
            <strong style="color:#7c3aed;">💬 Message:</strong>
            <p style="margin:10px 0 0;">${message}</p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background:#fafafa; padding:18px 20px; text-align:center; font-size:13px; color:#666; border-top:1px solid #eee;">
          <p style="margin:6px 0;">💼 Sent from <strong style="color:#5a4bff;">Your Portfolio</strong></p>
          <p style="margin:6px 0; font-size:12px;">&copy; ${new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
