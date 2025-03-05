const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();

const allowedOrigins = [
    "http://localhost:3000",  // local
    "https://hoodbaar.ee" ,
    "https://hoodbaar.vercel.app"
];

app.use(cors({
    origin: allowedOrigins,
    methods: "POST",
    allowedHeaders: ["Content-Type"],
    credentials: true,
    optionsSuccessStatus: 200,
}));

app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    const msg = {
        to: "rogerpurtsak10@gmail.com",
        from: senderEmail,
        replyTo: email,
        subject: `📩 New Contact Form Submission from ${name}`,
        text: `
    📢 New Message from Hoodbaar Contact Form
    
    👤 Name: ${name}
    ✉️ Email: ${email}
    📝 Message: 
    
    ${message}
    
    🔄 You can reply directly to this email to contact the sender.
    `,
        html: `
        <h2>📢 New Message from Hoodbaar Contact Form</h2>
        <p><strong>👤 Name:</strong> ${name}</p>
        <p><strong>✉️ Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>📝 Message:</strong></p>
        <blockquote>${message}</blockquote>
        <hr>
        <p>🔄 <em>You can reply directly to this email to contact the sender.</em></p>
        `
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ success: "Email sent successfully!" });
    } catch (error) {
        console.error("Email Error:", error.response?.body || error);
    
        res.status(500).json({
            error: "Failed to send email.",
            details: error.response?.body || error.message
        });
    }
    
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
