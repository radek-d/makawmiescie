import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-60 md:bottom-12 md:right-12">
          <motion.a
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="tel:+48509609319"
            className="relative bg-brand-black text-white rounded-full modern-shadow flex items-center justify-center group hover:bg-brand-charcoal transition-colors overflow-hidden w-14 h-14 hover:w-auto hover:px-6"
            aria-label="Zadzwoń do restauracji"
          >
            {/* Pulse Ring Animation */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-brand-black"
            />
            
            <Phone size={24} className="relative z-10 shrink-0" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out font-medium relative z-10">
              Zadzwoń teraz
            </span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButton;
