import { ReactNode } from "react";
import { motion } from "motion/react";
import { Camera, Keyboard, Zap, Star, Info, Download, Smartphone, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* HERO SECTION */}
      <section id="hero" className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
              Airtime <span className="text-teal-400">Scanner</span>
            </h2>

            <p className="text-teal-400/80 text-xl md:text-2xl font-medium mb-8 italic">
              "Simplicity for busy people"
            </p>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
              Scan airtime vouchers instantly using your phone camera or manually enter voucher numbers. 
              Fast, simple, and designed for everyday convenience.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn3d flex items-center gap-2 h-[64px] px-8"
              >
                <Download size={20} />
                Download APK
              </motion.button>

              <a href="#" className="hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play"
                  className="h-[64px]"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="phone">
              <div className="screen">
                <div className="flex flex-col items-center gap-4">
                  <Camera size={48} className="animate-pulse" />
                  <span className="text-sm uppercase tracking-widest opacity-50">Scanning...</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-400/20 blur-2xl rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-500/10 blur-3xl rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-32 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Simplicity</h3>
            <div className="h-1.5 w-20 bg-teal-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Camera className="text-teal-400" size={32} />}
              title="Camera Scan"
              description="Scan airtime vouchers using your phone camera with high precision OCR technology."
            />
            <FeatureCard 
              icon={<Keyboard className="text-teal-400" size={32} />}
              title="Manual Entry"
              description="Enter voucher numbers manually when needed with an optimized numeric keypad."
            />
            <FeatureCard 
              icon={<Zap className="text-teal-400" size={32} />}
              title="Fast & Lightweight"
              description="Optimized for speed with a minimal interface that works on all Android devices."
            />
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-teal-400/5 -skew-y-3" />
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-400/10 text-teal-400 text-sm font-bold mb-6 border border-teal-400/20"
            >
              <Download size={16} />
              GET THE APP
            </motion.div>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Ready to <span className="text-teal-400">save time?</span>
            </h3>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Download Airtime Scanner today and never type a voucher code again. Available on all major Android platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <a href="#" className="hover:scale-105 transition-transform duration-300 flex justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play"
                className="h-[80px]"
                referrerPolicy="no-referrer"
              />
            </a>
            <DownloadButton 
              name="Galaxy Store"
              subtitle="Available on"
              icon={<Smartphone className="text-pink-500" size={24} />}
              href="#"
            />
            <DownloadButton 
              name="AppGallery"
              subtitle="Explore it on"
              icon={<Zap className="text-red-500" size={24} />}
              href="#"
            />
            <DownloadButton 
              name="APK Mirror"
              subtitle="Download from"
              icon={<Download className="text-orange-500" size={24} />}
              href="#"
            />
          </div>

          <div className="mt-16 flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-4">Direct Installation</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn3d px-12 py-4 text-lg font-bold flex items-center gap-3"
            >
              <Download size={24} />
              Download Direct APK
            </motion.button>
          </div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="neo p-10 flex flex-col items-center text-center"
    >
      <div className="mb-6 p-4 bg-teal-400/10 rounded-2xl">
        {icon}
      </div>
      <h4 className="text-xl text-white font-bold mb-4">{title}</h4>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function DownloadButton({ name, subtitle, icon, href, primary = false }: { name: string, subtitle: string, icon: ReactNode, href: string, primary?: boolean }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
        primary 
          ? "bg-white text-slate-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
          : "bg-slate-900/50 text-white border-white/10 hover:border-teal-400/50 hover:bg-slate-900"
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${primary ? "bg-slate-100" : "bg-white/5"}`}>
        {icon}
      </div>
      <div className="flex-1 text-left">
        <p className={`text-[10px] uppercase tracking-widest font-bold ${primary ? "text-slate-500" : "text-gray-500"}`}>
          {subtitle}
        </p>
        <p className="text-lg font-black leading-tight">{name}</p>
      </div>
      <ExternalLink size={16} className={primary ? "text-slate-400" : "text-gray-600"} />
    </motion.a>
  );
}
