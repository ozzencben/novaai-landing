export const featureCardAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

export const featureHeadingAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8 },
};

export const featureCardHover = {
  whileHover: {
    y: -10,
    scale: 1.02,
    boxShadow:
      "0 15px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(236, 72, 153, 0.4)",
  },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};
