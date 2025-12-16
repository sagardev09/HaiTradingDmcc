"use client";

import { motion } from "framer-motion";
import { Construction, Wrench, HardHat, Mail } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 relative z-10">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
              <Construction className="w-16 h-16 text-primary" />
            </div>
            {/* Orbiting tools */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <Wrench className="w-8 h-8 text-accent absolute -top-2 left-1/2 -translate-x-1/2" />
              <HardHat className="w-8 h-8 text-accent absolute -bottom-2 left-1/2 -translate-x-1/2" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
        >
          Website Under Construction
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          We&apos;re working hard to bring you something amazing.
          <br />
          Stay tuned!
        </motion.p>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="h-2 w-full max-w-md mx-auto bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "60%" }}
              transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Progress: Building something great...
          </p>
        </motion.div>

        {/* Company name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-primary mb-2">
            HAI Trading DMCC
          </h2>
          <p className="text-muted-foreground">
            Your trusted partner in global trading solutions
          </p>
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-muted-foreground">
            In the meantime, feel free to reach out:
          </p>
          <a
            href="mailto:info@haitradingdmcc.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </a>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <Construction className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <HardHat className="w-24 h-24 text-accent" />
        </div>
      </div>
    </div>
  );
}
