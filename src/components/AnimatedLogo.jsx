import React from 'react';
import { motion } from 'framer-motion';

const MosCodeLogo = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const gradientTextStyle = {
    background: 'linear-gradient(45deg, #61dafb, #68a063, #f7df1e, #8cc84b)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'gradient 3s ease infinite',
  };

  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 sm:px-6 md:px-10 font-mono">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="relative w-full max-w-full sm:max-w-xl text-center bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-16 shadow-2xl overflow-hidden"
      >
      
        <div className="absolute inset-0 pointer-events-none">
          <motion.div className="absolute top-[15%] left-[10%] w-1 h-1 bg-cyan-400 rounded-full" />
          <motion.div className="absolute top-[80%] left-[15%] w-1 h-1 bg-cyan-400 rounded-full" />
          <motion.div className="absolute top-[30%] right-[10%] w-1 h-1 bg-cyan-400 rounded-full" />
          <motion.div className="absolute bottom-[25%] right-[20%] w-1 h-1 bg-cyan-400 rounded-full" />
        </div>
    
        <motion.div className="relative inline-block mb-4 sm:mb-6">
          <motion.div className="absolute -top-3 -left-3 text-[10px] sm:text-xs text-green-400 opacity-60">
            // MongoDB + Express
          </motion.div>
          <motion.div className="absolute -bottom-3 -right-3 text-[10px] sm:text-xs text-green-600 opacity-60">
            {'{ React + Node.js }'}
          </motion.div>

          <div className="flex items-center justify-center flex-wrap gap-1">
            <motion.span className="text-3xl sm:text-4xl lg:text-6xl font-bold text-cyan-400 drop-shadow">
              &lt;
            </motion.span>
            <motion.span
              className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mx-1"
              style={{
                ...gradientTextStyle,
                textShadow: '0 0 10px rgba(97,218,251,0.3)',
              }}
            >
              moscode
            </motion.span>
            <motion.span className="text-3xl sm:text-4xl lg:text-6xl font-bold text-cyan-400 drop-shadow">
              /&gt;
            </motion.span>
          </div>
        </motion.div>

        <motion.div className="text-sm sm:text-base text-gray-400 tracking-wide opacity-80 mb-2 sm:mb-4">
          MERN STACK DEVELOPER
        </motion.div>

        <motion.div className="absolute bottom-2 right-3 text-[10px] sm:text-xs text-gray-500 opacity-50">
          v2.0.1
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-green-400/10 rounded-2xl blur-xl -z-10" />
      </motion.div>
    </div>
  );
};

export default MosCodeLogo;
