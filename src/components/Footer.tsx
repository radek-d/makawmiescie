import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const MapComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="w-full h-full">
      {isVisible ? (
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.674382572105!2d19.55814857700446!3d50.27933819966889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716e38dc8a6b98b%3A0xafaff50fa45eb33c!2zTcSFa2EgdyBNaWXFm2NpZQ!5e0!3m2!1spl!2spl!4v1767709942916!5m2!1spl!2spl"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true}
          loading="lazy" 
          title="Lokalizacja Maka w Mieście"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white/20">
          Ładowanie mapy...
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-bold">Maka w Mieście</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Prawdziwa włoska gościnność i smaki, których nie zapomnisz. Czekamy na Ciebie w Olkuszu.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/maka.w.miescie/"
                target="_blank"
                className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/maka.w.miescie/"
                target="_blank"
                className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-serif">Kontakt</h4>
            <div className="space-y-4 text-white/60 font-light">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 text-white" />
                <span>ul. Rynek 23,<br />32-300 Olkusz</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-white" />
                <span>+48 509 609 319</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-serif">Godziny</h4>
            <div className="space-y-2 text-white/60 font-light">
              <div className="flex justify-between">
                <span>Pon - Czw:</span>
                <span>12:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span>Pt - Sob:</span>
                <span>12:00 - 22:00</span>
              </div>
              <div className="flex justify-between font-medium text-white">
                <span>Niedziela:</span>
                <span>12:00 - 21:00</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-serif">Zarezerwuj</h4>
            <p className="text-white/60 font-light text-sm">
              Zalecamy rezerwację stolika na weekendy, aby mieć pewność wolnego miejsca.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+48509609319"
              className="inline-block px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-brand-black transition-all font-medium"
            >
              Zadzwoń teraz
            </motion.a>
          </motion.div>
        </div>

        {/* Map Integration */}
        <div className="w-full h-80 rounded-2xl overflow-hidden mb-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-inner bg-brand-gray-dark/20 flex items-center justify-center">
          <MapComponent />
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm gap-4">
          <p>&copy; 2026 Maka w Mieście. Wszystkie prawa zastrzeżone.</p>
          <div className="flex space-x-6">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
