import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=2000"
          srcSet="
            https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=640 640w,
            https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=1280 1280w,
            https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=1920 1920w,
            https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=2560 2560w
          "
          sizes="100vw"
          alt="Italian Pasta Background"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70"></div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-widest text-white border border-white/30 rounded-full bg-white/10 backdrop-blur-sm uppercase"
          >
            Autentyczna Kuchnia Włoska w Olkuszu
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]"
          >
            <span className="italic font-normal bg-linear-to-r from-white via-brand-gray-light to-white bg-clip-text text-transparent">Mąka</span>
            <br className="hidden md:block" />
            <span className="italic font-normal bg-linear-to-r from-white via-brand-gray-light to-white bg-clip-text text-transparent">w Mieście</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light"
          >
            Odkryj smak prawdziwych Włoch w sercu Olkusza. Ręcznie robiony makaron, pizza napoletana i atmosfera, która pozwoli Ci poczuć się jak na rzymskim placu.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-black rounded-full font-medium flex items-center justify-center space-x-2 shadow-2xl hover:bg-brand-gray-light transition-colors"
            >
              <span>Zobacz Menu</span>
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="tel:+48509609319"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-full font-medium backdrop-blur-sm transition-all"
            >
              Zarezerwuj stolik
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
