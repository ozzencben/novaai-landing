export const heroTitleAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.1 },
};

export const heroSubtitleAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 },
};

export const heroButtonAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, delay: 0.4 },
};

export const heroMockupAnimation = {
  initial: { y: -70, rotate: -7, opacity: 0 },
  whileInView: { y: 0, rotate: 0, opacity: 1 },
  viewport: { once: false },
  transition: { duration: 1.2 },
};

// ✨ YENİ: Mobil Mockup'a özel animasyon (Tablet'ten sonra)
export const mobileMockupAnimation = {
  initial: { opacity: 0, x: 50, rotate: 20 },
  animate: { opacity: 1, x: 0, rotate: 15 }, // CSS'teki 15deg rotasyonuna uyması için
  transition: { duration: 1.2, delay: 0.3 }, // Sıçrama efekti
};

const gradients = [
  /* Koyu temaya uygun parlak, neon gradientler */
  "radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.6), rgba(236, 72, 153, 0.1))", // Mor-Pembe
  "radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.6), rgba(6, 182, 212, 0.1))", // Nane Yeşili-Mavi
  "radial-gradient(circle at 40% 40%, rgba(251, 191, 36, 0.6), rgba(239, 68, 68, 0.1))", // Sarı-Kırmızı
];

const generateCreativeShape = () => {
  const top = Math.floor(Math.random() * 80) + "%";
  const left = Math.floor(Math.random() * 80) + "%";
  const size = Math.floor(Math.random() * 80) + 100; // Boyutlar Büyütüldü (100-180px)
  const duration = Math.random() * 3 + 4; // Animasyon daha yavaş yapıldı

  const gradient = gradients[Math.floor(Math.random() * gradients.length)];

  return {
    initial: {
      y: Math.random() * 60 - 30, // Hareket mesafesi artırıldı
      x: Math.random() * 60 - 30,
      opacity: 0.3,
    },
    whileInView: {
      y: Math.random() * 60 - 30,
      x: Math.random() * 60 - 30,
      opacity: 0.7, // Opaklık artırıldı
    },
    transition: { duration, repeat: Infinity, repeatType: "mirror" },
    style: { top, left, width: size, height: size, background: gradient },
  };
};

export const floatingShapes = Array.from({ length: 8 }, generateCreativeShape);
