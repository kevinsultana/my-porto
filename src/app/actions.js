"use server";

const fallbackWebhookUrl = "https://n8n.example.com/webhook/portfolio-contact";

export async function submitContactForm(previousState, formData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please complete your name, email, and message before sending.",
    };
  }

  const payload = {
    name,
    email,
    message,
    source: "portfolio-contact-form",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  try {
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(
          `Webhook request failed with status ${response.status}`,
        );
      }
    } else {
      console.info("Portfolio contact submission (simulated)", {
        ...payload,
        webhookUrl: fallbackWebhookUrl,
      });
    }

    return {
      status: "success",
      message: "Message queued successfully. I’ll get back to you soon.",
    };
  } catch (error) {
    console.error("Portfolio contact submission failed", error);

    return {
      status: "error",
      message:
        "The message could not be sent right now. Please try again shortly.",
    };
  }
}
