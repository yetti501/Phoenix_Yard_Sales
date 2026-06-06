const nodemailer = require('nodemailer');

module.exports = async ({ req, res, log, error }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // The event payload contains the deleted user's data
  const user = req.body;
  const name = user.name || 'there';
  const email = user.email;

  if (!email) {
    error('No email found on user object');
    return res.json({ success: false, message: 'No email' }, 400);
  }

  try {
    await transporter.sendMail({
      from: `"Phoenix Yard Sales" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Phoenix Yard Sales account has been deleted',
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #1E3A5F; font-size: 24px; margin: 0;">Account Deleted</h1>
          </div>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Hey ${name},
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Your Phoenix Yard Sales account and all associated data have been permanently deleted. This includes:
          </p>
          <ul style="color: #374151; font-size: 16px; line-height: 1.8;">
            <li>Your profile information</li>
            <li>All event listings and uploaded images</li>
            <li>Saved events and preferences</li>
          </ul>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            We&rsquo;re sorry to see you go. If you ever want to come back, you&rsquo;re always welcome to create a new account.
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            If you didn&rsquo;t request this deletion or believe this was a mistake, please contact us immediately at
            <a href="mailto:support@smashingwallets.com" style="color: #FF5747;">support@smashingwallets.com</a>.
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Take care,<br/>
            <strong>The Phoenix Yard Sales Team</strong>
          </p>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 32px 0;" />
          <p style="color: #9CA3AF; font-size: 12px; text-align: center;">
            &copy; 2025&ndash;2026 Smashing Wallets LLC. All rights reserved.
          </p>
        </div>
      `,
    });

    log(`Deletion confirmation email sent to ${email}`);
    return res.json({ success: true });
  } catch (err) {
    error(`Failed to send deletion email: ${err.message}`);
    return res.json({ success: false, message: err.message }, 500);
  }
};
