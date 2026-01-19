import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Leaf, ChevronDown } from 'lucide-react';
import { MENU_DATA } from '../data/MENU_DATA';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(MENU_DATA.categories[0].id);

  const toggleCategory = (id: string | null) => {
    setActiveCategory(activeCategory === id ? null : id);
  };
  return (
    <section id="menu" className="py-24 bg-linear-to-b from-white to-brand-gray-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gray font-semibold tracking-widest uppercase text-sm">Przeglądaj Smaki</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black mt-4 mb-6">Menu</h2>
            <div className="w-24 h-px bg-brand-black mx-auto"></div>
          </motion.div>
        </div>

        <div className="space-y-6">
          {MENU_DATA.categories.map((category, catIndex) => {
            const isOpen = activeCategory === category.id;
            return (
              <div key={category.id} className="relative overflow-hidden rounded-2xl border border-brand-gray-light bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between group"
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    className="text-2xl md:text-3xl font-serif font-semibold text-brand-black flex items-center"
                  >
                    <span className="mr-4">{category.name}</span>
                  </motion.h3>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-brand-gray group-hover:text-brand-black transition-colors"
                  >
                    <ChevronDown size={28} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="px-8 pb-10">
                        <div className="w-full h-px bg-brand-gray-light mb-10"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                          {category.items.map((item, itemIndex) => (
                            <motion.div
                              key={item.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                              whileHover={{ x: 5 }}
                              className="group cursor-pointer"
                            >
                              <div className="flex justify-between items-baseline mb-2">
                                <h4 className="text-xl font-serif text-brand-black group-hover:text-brand-gray transition-colors duration-300 flex items-center gap-2">
                                  {item.name}
                                  <span className="flex items-center gap-1">
                                    {item.isSpicy && (
                                      <Flame size={18} className="text-red-500 fill-red-500/10" aria-hidden />
                                    )}
                                    {item.isVegetarian && (
                                      <Leaf size={18} className="text-green-500 fill-green-500/10" aria-hidden />
                                    )}
                                  </span>
                                </h4>
                                <span className="text-brand-black font-medium ml-4 whitespace-nowrap">{item.price}</span>
                              </div>
                              <p className="text-brand-gray font-light leading-relaxed text-sm md:text-base">
                                {item.description}
                              </p>
                              <div className="mt-4 h-px bg-brand-black/5"></div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="italic text-brand-gray font-serif">
            Wszystkie nasze dania przygotowujemy na bieżąco ze świeżych produktów bezpośrednio po zamówieniu. 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
