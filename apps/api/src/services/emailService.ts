import { Resend } from "resend";
import { config } from "../config";

type ContactEmailPayload = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export async function sendContactNotification(payload: ContactEmailPayload) {
  if (!config.resendApiKey) {
    return { sent: false };
  }

  const resend = new Resend(config.resendApiKey);
  await resend.emails.send({
    from: config.contactFromEmail,
    to: [config.contactNotificationEmail],
    subject: `New portfolio inquiry (${payload.projectType})`,
    text: `Name: ${payload.name}
Email: ${payload.email}
Project Type: ${payload.projectType}

Message:
${payload.message}`
  });

  return { sent: true };
}
