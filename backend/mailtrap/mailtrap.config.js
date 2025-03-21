import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com", // Replace with your verified sender email
  name: "Fitness-VR",         // Replace with your app or service name
};
