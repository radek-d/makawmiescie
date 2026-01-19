import { useState } from 'react';
import { motion, AnimatePresence, interpolate } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../assets/gallery/gallery01.webp';
import img2 from '../assets/gallery/gallery02.webp';
import img3 from '../assets/gallery/gallery03.webp';
import img4 from '../assets/gallery/gallery04.webp';
import img5 from '../assets/gallery/gallery05.webp';
import img6 from '../assets/gallery/gallery06.webp';
import img7 from '../assets/gallery/gallery07.webp';
import img8 from '../assets/gallery/gallery08.webp';
import img9 from '../assets/gallery/gallery09.webp';


interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: img1,
      title: 'Pizza oraz pasta',
      description: 'Przytulna atmosfera w sercu Olkusza',
    },
    {
      id: 2,
      src: img2,
      title: 'Pizza Napoletana',
      description: 'Tradycyjna pizza z pieca opalanego drewnem',
    },
    {
      id: 3,
      src: img3,
      title: 'Bruschetta',
      description: 'Tradycyjna włoska przystawka',
    },
    {
      id: 4,
      src: img4,
      title: 'Pizza',
      description: 'Tradycyjna włoska pizza',
    },
    {
      id: 5,
      src: img5,
      title: 'Nowości',
      description: 'Nowe dania w naszej kuchni',
    },
    {
      id: 6,
      src: img6,
      title: 'Kanapka',
      description: 'Tradycyjna włoska kanapka',
    },
    {
      id: 7,
      src: img7,
      title: 'Pizza Italia',
      description: 'Przepyszna pizza dla prawdziwych miłośników',
    },
    {
      id: 8,
      src: img8,
      title: 'Pizza Zucca',
      description: 'Pizza z serem mozzarella i paprykowym sosem',
    },
    {
      id: 9,
      src: img9,
      title: 'Pizza Zucca',
      description: 'Pizza z serem mozzarella i paprykowym sosem',
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gray font-semibold tracking-widest uppercase text-sm">Galeria</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black mt-4 mb-6">
              Nasze Wnętrze i Dania
            </h2>
            <div className="w-24 h-px bg-brand-black mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white font-serif text-xl mb-2">{image.title}</h3>
                <p className="text-white/80 text-sm font-light">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-brand-gray-light transition-colors z-110"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-6 text-white hover:text-brand-gray-light transition-colors z-110"
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 text-white hover:text-brand-gray-light transition-colors z-110"
              aria-label="Następne zdjęcie"
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-6">
                <h3 className="text-white font-serif text-2xl mb-2">{selectedImage.title}</h3>
                <p className="text-white/70 font-light">{selectedImage.description}</p>
                <p className="text-white/50 text-sm mt-4">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
