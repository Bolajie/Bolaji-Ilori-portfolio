import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Where inquiries land. Overridable via env so the recipient isn't hardcoded to
// one address forever, but defaults to the address already public on the site.
const CONTACT_TO = process.env.CONTACT_TO_EMAIL || 'ibolajie@gmail.com';

// Sender. `onboarding@resend.dev` is Resend's shared test sender: it delivers
// without any domain setup, but only to the email that owns the Resend account.
// Once a domain is verified in Resend, swap this for e.g. hello@yourdomain.com.
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL || 'Portfolio Inquiry <onboarding@resend.dev>';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Misconfiguration, not a user error. Log it loudly server-side; tell the
    // client the service is down rather than leaking that a key is missing.
    console.error('RESEND_API_KEY is not set — cannot send contact email.');
    return res.status(500).json({ error: 'The email service is not configured yet.' });
  }

  const { name, email, message } = (req.body ?? {}) as {
    name?: string;
    email?: string;
    message?: string;
  };

  // Server-side validation. The client validates too, but the client can be
  // bypassed, so this is the real gate.
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are all required.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'That email address looks invalid.' });
  }
  if (message.trim().length < 10) {
    return res.status(400).json({ error: 'Please include a message of at least 10 characters.' });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      replyTo: email, // so hitting reply in Gmail goes straight to the sender
      subject: `New portfolio inquiry from ${name.trim()}`,
      text: `Name:  ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}\n`,
    });

    if (error) {
      console.error('Resend returned an error:', error);
      return res.status(502).json({ error: 'Could not send your message. Please email me directly.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Unexpected failure sending contact email:', err);
    return res.status(500).json({ error: 'Something went wrong on our end. Please try again.' });
  }
}
