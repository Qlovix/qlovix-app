"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="fixed inset-0 z-[999] bg-bg flex items-center justify-center"
        >
          <motion.svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-16 h-16"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <circle
              cx="50"
              cy="50"
              r="34"
              stroke="#5c86ff"
              strokeWidth="1.4"
              strokeDasharray="8 6"
            />
            <path
              d="M62 62 L76 76"
              stroke="#5c86ff"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
