import { Zap, Smartphone, Globe, Mail, Code2, Apple } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center gap-6 mb-16"
        >
          <div className="w-16 h-16 bg-teal-400/20 rounded-2xl flex items-center justify-center text-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
            <Zap size={32} />
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              About <span className="text-teal-400">Airtime Scanner</span>
            </h3>
            <p className="text-gray-500 mt-2 font-medium">Version 1.0.0 • Built for efficiency</p>
          </div>
        </motion.div>
        
        <div className="grid gap-12">
          {/* Main Story */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="neo p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code2 size={120} />
            </div>
            
            <div className="relative z-10 space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Airtime Scanner is a <span className="text-teal-400 font-bold">free utility tool</span> designed to streamline the process of recharging mobile credit. 
                By using advanced OCR technology, the app allows you to instantly scan physical vouchers and convert them into digital codes.
              </p>
              <p>
                Whether you're scanning a physical voucher or entering a code manually, the app ensures the process is as fast and error-free as possible, saving you time and reducing the frustration of manual entry.
              </p>
              
              <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-teal-400">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Developed By</p>
                    <a 
                      href="https://www.taysoft.dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-bold hover:text-teal-400 transition-colors flex items-center gap-1"
                    >
                      TaySoft <Globe size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-teal-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Support</p>
                    <a href="mailto:help@airtimescanner.space" className="text-white font-bold hover:text-teal-400 transition-colors">
                      help@airtimescanner.space
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features List */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <Smartphone className="text-teal-400" size={20} />
                Key Capabilities
              </h4>
              <ul className="space-y-4">
                {[
                  "Instant Camera Scanning (OCR)",
                  "Optimized Manual Entry Keypad",
                  "Direct USSD Integration",
                  "Lightweight and Fast Performance",
                  "Works Offline & Online"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Platform Status */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 flex flex-col justify-center items-center text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-gray-500 mb-4">
                <Apple size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">iOS Version</h4>
              <p className="text-teal-400 font-bold animate-pulse">Coming Soon</p>
              <p className="text-gray-500 text-sm mt-4 max-w-[200px]">
                We're working hard to bring Airtime Scanner to the Apple App Store.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
