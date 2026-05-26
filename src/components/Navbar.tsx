"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms-and-conditions" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4 shadow-lg shadow-brand-purple/5" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50">
            <Image src="/logo.png" alt="Serenity AI Logo" width={32} height={32} className="object-contain" />
            <span className="text-2xl font-bold tracking-tight text-white hidden sm:block">
              Serenity<span className="text-gradient">.AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  pathname === link.href ? "text-white" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/delete-account"
              className="text-sm font-medium text-gray-400 hover:text-red-400 transition-colors"
            >
              Delete Account
            </Link>
            <Link
              href="#download"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              Get App
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 -mr-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium ${
                  pathname === link.href ? "text-white" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/delete-account"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-red-400"
            >
              Delete Account
            </Link>
            <div className="mt-8">
              <Link
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 rounded-xl bg-brand-purple text-white font-semibold text-lg"
              >
                Download Serenity AI
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
