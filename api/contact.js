// Vercel Serverless Function - Contact Form Email Handler
// This runs automatically on Vercel when deployed

const nodemailer = require('nodemailer');

// Email configuration - Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahmedrazagithub@gmail.com',
    pass: 'gltr oefj xtel rdjh' // Gmail App Password
  }
});

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    const { name, email, company, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: name, email, subject, and message are required' 
      });
    }

    // Email content
    const mailOptions = {
      from: 'ahmedrazagithub@gmail.com',
      to: 'ahmedrazagithub@gmail.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="margin: 10px 0;"><strong style="color: #4f46e5;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #4f46e5;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p style="margin: 10px 0;"><strong style="color: #4f46e5;">Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p style="margin: 10px 0;"><strong style="color: #4f46e5;">Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p style="margin: 10px 0;"><strong style="color: #4f46e5;">Subject:</strong> ${subject}</p>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 10px 0;"><strong style="color: #4f46e5;">Message:</strong></p>
              <p style="margin: 10px 0; color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #eef2ff; border-radius: 8px; border-left: 4px solid #4f46e5;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>📧 Reply to:</strong> <a href="mailto:${email}" style="color: #4f46e5;">${email}</a>
              ${phone ? ` | <strong>📞 Call:</strong> <a href="tel:${phone}" style="color: #4f46e5;">${phone}</a>` : ''}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
Subject: ${subject}

Message:
${message}

---
Reply to: ${email}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const confirmationMail = {
      from: 'ahmedrazagithub@gmail.com',
      to: email,
      subject: 'Thank you for contacting DevDazzle',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            Thank You for Contacting DevDazzle!
          </h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #666; line-height: 1.6;">
              Hi ${name},
            </p>
            
            <p style="color: #666; line-height: 1.6;">
              Thank you for reaching out to DevDazzle! We've received your message and will get back to you within 24 hours.
            </p>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #eef2ff; border-radius: 8px; border-left: 4px solid #4f46e5;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Your Message:</strong><br/>
                <span style="color: #666;">${subject}</span>
              </p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              In the meantime, feel free to explore our portfolio and services. We're excited to help transform your digital dreams into reality!
            </p>
            
            <p style="color: #666; line-height: 1.6;">
              Best regards,<br/>
              <strong>DevDazzle Team</strong><br/>
              <a href="mailto:ahmedrazagithub@gmail.com" style="color: #4f46e5;">ahmedrazagithub@gmail.com</a><br/>
              <a href="tel:03278227842" style="color: #4f46e5;">03278227842</a>
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMail);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    });
  }
};



