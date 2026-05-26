"use client";

import { motion } from "framer-motion";
import { Mail, Copy, AlertTriangle, ShieldCheck, CheckCircle2, CopyCheck } from "lucide-react";
import { useState } from "react";

export default function DeleteAccount() {
  const [copied, setCopied] = useState(false);
  const supportEmail = "kuldeep.xalt@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative z-10">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-6 text-red-400">
            <AlertTriangle size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Account Deletion Request</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Request permanent deletion of your Serenity AI account and associated data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-10 border border-white/10 mb-10 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-6">
            <ShieldCheck className="text-brand-purple" size={24} />
            <h2 className="text-2xl font-semibold">Data Deletion Information</h2>
          </div>
          <ul className="space-y-4">
            {[
              "Users can request account deletion by contacting support.",
              "Google Sign-In authentication data will be permanently removed.",
              "Associated app data and personal settings will be permanently deleted.",
              "Some limited data may be retained temporarily for security or legal compliance purposes for up to 30 days."
            ].map((text, i) => (
              <li key={i} className="flex gap-4 text-gray-300 items-start">
                <CheckCircle2 size={20} className="text-brand-purple flex-shrink-0 mt-0.5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 px-2">Deletion Process</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { step: 1, title: "Send Request", desc: "Email our support team to request deletion" },
              { step: 2, title: "Verify Email", desc: "Mention your registered Google account email" },
              { step: 3, title: "Processing", desc: "Our team will securely process the deletion" }
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 border border-white/5 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 text-6xl font-black text-white/5">{item.step}</div>
                <div className="text-sm font-bold text-brand-purple mb-2">STEP {item.step}</div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="glass rounded-3xl p-8 border border-brand-purple/20 bg-brand-purple/5 text-center"
        >
          <h3 className="text-lg font-semibold mb-6">Contact Support to Delete Account</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${supportEmail}?subject=Account Deletion Request`}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              <Mail size={18} />
              Email Support
            </a>
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition-colors border border-white/10 w-full sm:w-auto"
            >
              {copied ? <CopyCheck size={18} className="text-green-400" /> : <Copy size={18} />}
              {copied ? "Email Copied!" : "Copy Email"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
