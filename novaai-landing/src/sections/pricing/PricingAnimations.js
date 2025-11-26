export const pricingContainerAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8 },
};

export const pricingCardAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
  viewport: { once: true, amount: 0.2 },
};

export const pricingCardHover = {
  whileHover: {
    scale: 1.03,
    y: -8,
    boxShadow: "0 0 35px rgba(124,58,237,0.35), 0 0 55px rgba(236,72,153,0.25)",
  },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 220, damping: 18 },
};
