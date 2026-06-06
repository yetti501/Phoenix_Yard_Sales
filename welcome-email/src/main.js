const nodemailer = require('nodemailer');

module.exports = async ({ req, res, log, error }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // The event payload contains the new user's data
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
      subject: 'Welcome to Phoenix Yard Sales!',
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #1E3A5F; font-size: 24px; margin: 0;">Welcome to Phoenix Yard Sales!</h1>
          </div>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Hey ${name},
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Thanks for joining Phoenix Yard Sales! You can now discover budget-friendly events
            in your area &mdash; yard sales, farmers markets, estate sales, and more.
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Here&rsquo;s what you can do:
          </p>
          <ul style="color: #374151; font-size: 16px; line-height: 1.8;">
            <li>Browse events on the map near you</li>
            <li>Create your own event listings</li>
            <li>Save events you don&rsquo;t want to miss</li>
          </ul>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            If you have any questions, reach out at
            <a href="mailto:support@smashingwallets.com" style="color: #FF5747;">support@smashingwallets.com</a>.
          </p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Happy hunting!<br/>
            <strong>The Phoenix Yard Sales Team</strong>
          </p>
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 32px 0;" />
          <p style="color: #9CA3AF; font-size: 12px; text-align: center;">
            &copy; 2025&ndash;2026 Smashing Wallets LLC. All rights reserved.
          </p>
        </div>
      `,
    });

    log(`Welcome email sent to ${email}`);
    return res.json({ success: true });
  } catch (err) {
    error(`Failed to send welcome email: ${err.message}`);
    return res.json({ success: false, message: err.message }, 500);
  }
};
