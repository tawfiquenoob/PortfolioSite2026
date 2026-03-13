import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact | Full-Stack Portfolio",
  description:
    "Get in touch for full-stack web development, API architecture, and deployment projects."
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="section-container">
        <h1 className="text-4xl font-bold md:text-5xl">Contact</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Let&apos;s discuss your project requirements. Share your idea and I will
          follow up with the best execution plan.
        </p>
        <ContactForm />
      </main>
    </>
  );
}
