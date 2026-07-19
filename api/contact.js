const RESEND_URL = "https://api.resend.com/emails";
const NOTIFY_TO = "info@doranaxalbionholdings.com";
const FROM = "Doranax Albion Holdings <onboarding@resend.dev>";

async function sendEmail(apiKey, payload) {
  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || `Resend request failed (${res.status})`);
  }
  return data;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ ok: false, error: "Email is not configured" });
    return;
  }

  const { name, email, sector, message } = req.body || {};
  if (!name || !email || !message) {
    res.status(400).json({ ok: false, error: "Name, email, and message are required" });
    return;
  }

  const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  try {
    await sendEmail(apiKey, {
      from: FROM,
      to: [NOTIFY_TO],
      reply_to: email,
      subject: `New enquiry from ${name}${sector ? ` — ${sector}` : ""}`,
      html: `
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>Email:</strong> ${escape(email)}</p>
        ${sector ? `<p><strong>Sector of interest:</strong> ${escape(sector)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escape(message).replace(/\n/g, "<br />")}</p>
      `,
    });
  } catch (err) {
    res.status(502).json({ ok: false, error: `Failed to send notification: ${err.message}` });
    return;
  }

  // Best-effort autoresponder to the submitter. Until the sending domain is
  // verified in Resend, this only actually delivers to the Resend account's
  // own email (sandbox restriction) -- so failures here are swallowed rather
  // than surfaced, since the internal notification above is the part that
  // must succeed for the enquiry not to be lost.
  try {
    await sendEmail(apiKey, {
      from: FROM,
      to: [email],
      subject: "Thanks for reaching out to Doranax Albion Holdings",
      html: `
        <p>Hi ${escape(name)},</p>
        <p>Thanks for getting in touch. We've received your message and someone from our team will be in touch shortly.</p>
        <p>— Doranax Albion Holdings</p>
      `,
    });
  } catch (err) {
    console.warn("Autoresponder not sent:", err.message);
  }

  res.status(200).json({ ok: true });
};
