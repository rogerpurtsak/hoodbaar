const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();

const allowedOrigins = [
    "http://localhost:3000",  // local
    "https://hoodbaar.ee"   // hoodi leht fr
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "POST",
    allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));


// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    const msg = {
        to: "rogerpurtsak10@gmail.com",  // The email that will receive the message
        from: process.env.EMAIL_FROM,  // Must be a verified email in SendGrid
        subject: `New Contact Form Submission from ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
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
