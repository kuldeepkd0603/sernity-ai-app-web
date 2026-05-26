"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sections = [
    {
      title: "Information Collection",
      content: "We only collect the minimum amount of data required to provide our AI coaching services. This includes basic account information (Email, Google Sign-In data) and strictly local app usage statistics for the Detox engine. Voice recordings are processed ephemerally and are never stored on our servers."
    },
    {
      title: "Google Sign-In Authentication",
      content: "When you use Google Sign-In, we collect your name, email address, and profile picture provided by Google. This data is used solely for authenticating your account and personalizing your Serenity AI experience."
    },
    {
      title: "Data Usage & Protection",
      content: "To provide the Smart Detox features, Serenity AI requires local access to your App Usage stats. This data never leaves your device. It is only used locally to trigger helpful wellness notifications. All conversations with the AI Coach are end-to-end encrypted in transit. We do not use your personal chat history to train public AI models."
    },
    {
      title: "Third-Party Services",
      content: "We do not sell your personal information to third parties. We may use third-party analytics services to help us understand how our app is used, but this data is anonymized and aggregated."
    },
    {
      title: "User Rights",
      content: "You have the right to access, update, or delete your personal information at any time. You can request account deletion through our app or by contacting our support team."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-6 text-brand-purple">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">Last Updated: May 2026</p>
        </motion.div>

        <div className="space-y-8">
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
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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
