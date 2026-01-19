import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-4/5 bg-brand-gray-light rounded-2xl overflow-hidden modern-shadow relative">
              {/* Photo Placeholder 1 */}
              <div className="absolute inset-0 bg-linear-to-tr from-brand-black/30 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1200" 
                alt="Wnętrze restauracji" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Soft decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gray-light rounded-2xl -z-10 hidden md:block opacity-50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-brand-gray font-semibold tracking-widest uppercase text-sm">Nasza Historia</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-black leading-tight">
                Mąka, woda i pasja. <br />
                <span className="italic gradient-text">Kawałek Italii w Olkuszu.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-brand-gray text-lg leading-relaxed font-light">
              <p>
                Mąka w Mieście powstała z miłości do prostoty i autentycznego smaku włoskiej kuchni. Wierzymy, że najlepsze dania wymagają tylko kilku, najwyższej jakości składników oraz cierpliwości.
              </p>
              <p>
                Nasza mąka (Tipo 00) przyjeżdża prosto z małego młyna w Neapolu, a sos pomidorowy przygotowujemy wyłącznie z pomidorów San Marzano dojrzewających w wulkanicznej glebie u stóp Wezuwiusza.
              </p>
              <p>
                To tutaj, w sercu Olkusza, stworzyliśmy miejsce, gdzie czas zwalnia przy kieliszku dobrego wina i zapachu świeżo pieczonej pizzy. Zapraszamy do wspólnego biesiadowania.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-serif text-2xl text-brand-black mb-2">100%</h4>
                <p className="text-sm text-brand-gray uppercase tracking-tighter">Oryginalne Składniki</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-brand-black mb-2">72h</h4>
                <p className="text-sm text-brand-gray uppercase tracking-tighter">Dojrzewanie Ciasta</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
