import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import splashscreen_icon from "../assets/splash-icon.png";

export function WelcomeAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3800); // Increased duration for the full animation sequence

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src={splashscreen_icon}
              alt="HOSTA Logo"
              width={150}
              height={150}
              className="rounded-full border-4 border-emerald-500"
            />
            <motion.div
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute inset-0 border-4 border-emerald-500 rounded-full"
            />
            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute inset-0 border-4 border-emerald-300 rounded-full"
            />
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-20 text-4xl font-bold text-emerald-700"
          >
            HOSTA
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="absolute bottom-10 text-xl text-emerald-600"
          >
            Excellence in Healthcare
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
