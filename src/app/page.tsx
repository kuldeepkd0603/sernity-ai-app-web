"use client";

import { motion } from "framer-motion";
import { Mic, ShieldAlert, Sparkles, Brain, Download, Play } from "lucide-react";
import Image from "next/image";
import PhoneMockup from "@/components/PhoneMockup";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              className="lg:w-1/2 flex flex-col items-start"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-purple/30 mb-8">
                <Sparkles size={16} className="text-brand-purple" />
                <span className="text-sm font-medium text-brand-light">Now available for Android</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Your personal AI <br />
                <span className="text-gradient">wellness coach.</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
                Break digital addictions, generate on-demand meditations, and find your calm with intelligent, voice-first AI coaching.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto" id="download">
                <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors">
                  <Play size={20} className="fill-black" />
                  Download on Google Play
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10 mx-auto w-full max-w-[320px]">
                <PhoneMockup src="/screenshots/home.jpeg" alt="Serenity AI Home Screen" />
              </div>
              {/* Decorative blurred element behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/20 blur-[100px] z-0 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative z-10" id="features">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Transform Your Mindset</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Intelligent tools designed to reclaim your time and peace.</p>
          </motion.div>

          <div className="space-y-32">
            {/* Feature 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row items-center gap-12 lg:gap-24"
            >
              <motion.div variants={fadeIn} className="md:w-1/2">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 text-brand-purple shadow-[0_0_30px_rgba(74,109,92,0.3)]">
                  <Mic size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">AI Voice Coach</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Have deep, encrypted, and empathetic conversations with our advanced AI voice personas. Choose a coach that fits your personality and let them guide you through stress, anxiety, or simply help you wind down after a long day.
                </p>
                <ul className="space-y-4">
                  {['High-fidelity realistic AI voices', 'Completely local end-to-end encryption', 'Empathetic real-time listening'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-brand-purple" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeIn} className="md:w-1/2 relative flex justify-center">
                <div className="w-full max-w-[280px]">
                  <PhoneMockup src="/screenshots/ai_coach.jpeg" alt="AI Coach UI" />
                </div>
              </motion.div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24"
            >
              <motion.div variants={fadeIn} className="md:w-1/2">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 text-brand-accent shadow-[0_0_30px_rgba(142,172,155,0.2)]">
                  <ShieldAlert size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Smart Detox Engine</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We proactively monitor your continuous screen time on social media and intelligently nudge you when it's time to break the scroll loop. No more endless scrolling without realizing how much time has passed.
                </p>
                <ul className="space-y-4">
                  {['Continuous usage detection', 'Randomized gentle nudges', 'Daily limits & Evening wind-downs'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-brand-accent" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeIn} className="md:w-1/2 relative flex justify-center">
                <div className="w-full max-w-[280px]">
                  <PhoneMockup src="/screenshots/digtal_wellness.jpeg" alt="Smart Detox UI" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Gallery Section */}
      <section className="py-24 px-6 relative z-10" id="gallery">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Beautiful & Intuitive</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Designed for focus, simplicity, and peace of mind.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {[
              "1.jpeg",
              "2.jpeg",
              "3.jpeg",
              "4.jpeg",
              "5.jpeg",
              "6.jpeg",
              "7.jpeg"
            ].map((img, i) => (
              <motion.div key={i} variants={fadeIn} className="w-[calc(50%-0.5rem)] md:w-[calc(25%-1.125rem)] max-w-[280px]">
                <PhoneMockup src={`/screenshots/onboarding/${img}`} alt={`Serenity AI Onboarding Screen ${i + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center glass rounded-3xl p-12 md:p-20 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-transparent opacity-50" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6">Ready to find your focus?</motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-gray-400 mb-10">Join thousands of users who have transformed their digital well-being.</motion.p>
            <motion.div variants={fadeIn}>
              <a href="#download" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <Download size={20} />
                Get Serenity AI Free
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
