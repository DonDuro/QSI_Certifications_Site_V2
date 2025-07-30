import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form endpoint for Key Contacts
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, organization, message, contactId } = req.body;

      // Validation
      if (!name || !email || !message || !contactId) {
        return res.status(400).json({ 
          error: "Missing required fields: name, email, message, and contactId are required" 
        });
      }

      // Email routing based on contactId
      const emailRouting: { [key: string]: string } = {
        'calvarado': 'calvarado@qsiglobalventures.com',
        'jwilkins': 'jwilkins@qsiglobalventures.com',
        'arichter': 'arichter@qsiglobalventures.com',
        'dmaestre': 'dmaestre@qsiglobalventures.com',
        'adallal': 'adallal@qsiglobalventures.com',
        'ymontoya': 'ymontoya@qsiglobalventures.com',
        'vpoleto': 'vpoleto@qsiglobalventures.com'
      };

      const recipientEmail = emailRouting[contactId];
      if (!recipientEmail) {
        return res.status(400).json({ error: "Invalid contact ID" });
      }

      // Basic spam protection - check for honeypot field
      if (req.body.website) {
        // This is likely spam, silently reject
        return res.status(200).json({ success: true });
      }

      // In a real implementation, you would send the email here
      // For now, we'll simulate successful sending
      console.log(`Contact form submission:
        From: ${name} <${email}>
        Organization: ${organization || 'N/A'}
        To: ${recipientEmail}
        Contact ID: ${contactId}
        Message: ${message}
      `);

      // TODO: Implement actual email sending with nodemailer or similar service
      // const emailSent = await sendEmail({
      //   to: recipientEmail,
      //   from: process.env.SMTP_FROM_EMAIL,
      //   subject: `New Contact Form Submission from ${name}`,
      //   html: generateEmailTemplate(name, email, organization, message)
      // });

      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });

    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        error: "Failed to process contact form submission" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
