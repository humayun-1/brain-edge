import nodemailer from "nodemailer";
const dotenv = require('dotenv');
dotenv.config();

export async function POST(req) {
  const { fullName, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "muhammadhumayunjawad@gmail.com",
      pass: process.env.NODEMAILER_AUTH_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "hr@brainedge.dev",
    // to: "muhammadhumayunjawad@gmail.com",
    subject: `New Contact Form Submission from ${fullName}`,
    text: `Full Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ message: "Failed to send email" }, { status: 500 });
  }
}
