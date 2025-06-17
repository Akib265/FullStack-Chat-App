import React from "react";
import { motion } from "framer-motion";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="w-[0]">
       {/* className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] p-12 min-h-screen relative overflow-hidden" */}
      {/* Floating Circles */}
      {/* <motion.div 
        className="absolute w-16 h-16 bg-[#e63946]/20 rounded-full"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "15%" }}
      />
      <motion.div 
        className="absolute w-20 h-20 bg-[#f4a261]/20 rounded-full"
        animate={{ x: [-30, 30, -30] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", right: "20%" }}
      /> */}

      {/* Animated Particles */}
      {/* {[...Array(15)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute w-4 h-4 bg-white/20 rounded-full shadow-lg"
          animate={{
            x: [Math.random() * 300 - 150, Math.random() * 300 - 150],
            y: [Math.random() * 300 - 150, Math.random() * 300 - 150],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        />
      ))} */}

      {/* <div className="relative max-w-md text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20"> */}
        
        {/* Animated Grid Pattern */}
        {/* <motion.div 
          className="grid grid-cols-3 gap-3 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className={`aspect-square rounded-2xl ${
                i % 2 === 0 ? "bg-white/30 backdrop-blur-md shadow-lg" : "bg-[#e63946]/30"
              }`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
        </motion.div> */}

        {/* Bouncing Title */}
        {/* <motion.h2 
          className="text-3xl font-bold text-white mb-4 drop-shadow-md"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {title}
        </motion.h2> */}

        {/* Subtitle with Bounce */}
        {/* <motion.p 
          className="text-white/80 text-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          {subtitle}
        </motion.p> */}
      {/* </div> */}
    </div>
  );
};

export default AuthImagePattern;
