"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsAndConditions() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sections = [
    {
      title: "1. App Usage Terms",
      content: "Serenity AI is an AI-powered wellness tool. It is not a replacement for professional medical advice, diagnosis, or therapy. If you are experiencing a mental health crisis, please contact emergency services or a licensed therapist."
    },
    {
      title: "2. User Responsibilities",
      content: "You agree to use the app responsibly and maintain the confidentiality of your account credentials. You are responsible for all activities that occur under your account. You must not use the app for any illegal or unauthorized purpose."
    },
    {
      title: "3. Account Rules",
      content: "We reserve the right to suspend or terminate your account if you violate these Terms and Conditions. You may request account deletion at any time through our /delete-account page or by contacting support."
    },
    {
      title: "4. Intellectual Property",
      content: "All content, features, and functionality of Serenity AI, including but not limited to the AI personas, design, text, and graphics, are owned by Kuldeep Verma and are protected by international copyright, trademark, and other intellectual property laws."
    },
    {
      title: "5. Limitation of Liability",
      content: "In no event shall Kuldeep Verma or Serenity AI be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the app. We do not guarantee that the service will be uninterrupted or error-free."
    },
    {
      title: "6. Modifications to Service",
      content: "We reserve the right to modify, suspend, or discontinue any aspect of the service at any time, including the availability of specific AI Personas or voices."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-6 text-brand-purple">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-400 text-lg">Last Updated: May 2026</p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8 border border-white/5"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              By downloading or using Serenity AI, you agree to the following terms and conditions. Please read them carefully before using our application.
            </p>
          </motion.div>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 border border-white/5"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">{section.title}</h2>
              <p className="text-gray-400 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border border-white/5 bg-white/5"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <a href="mailto:support@serenityai.com" className="text-brand-purple hover:text-white transition-colors font-medium">
              support@serenityai.com
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
