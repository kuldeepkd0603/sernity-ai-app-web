import Link from "next/link";
import Image from "next/image";
import { Mail, Shield, FileText, UserX } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Using 2026 as per user request to display "Serenity AI © 2026 | Developed by Kuldeep Verma"
  const displayYear = 2026;

  return (
    <footer className="border-t border-white/5 bg-brand-black pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Serenity AI Logo" width={32} height={32} className="object-contain" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Serenity<span className="text-gradient">.AI</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Your personal AI wellness coach. Break digital addictions, generate on-demand meditations, and find your calm with intelligent, voice-first AI coaching.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Developed by Kuldeep Verma</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Shield size={16} /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FileText size={16} /> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@serenityai.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={16} /> Contact Support
                </a>
              </li>
              <li>
                <Link href="/delete-account" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2">
                  <UserX size={16} /> Delete Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Serenity AI © {displayYear} | Developed by Kuldeep Verma</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
