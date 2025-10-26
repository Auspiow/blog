"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <motion.div
      className="intro-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-2">👋 Hi, I’m LRY</h1>
      <p className="text-gray-400">Frontend Developer & Designer</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-xl shadow-md"
        onClick={() => alert("谢谢你的关注 😊")}
      >
        Say Hello
      </motion.button>
    </motion.div>
  );
}
