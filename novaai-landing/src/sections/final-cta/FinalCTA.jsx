import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import "./FinalCTA.css";

const ctaAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function FinalCTA() {
  return (
    <div className="final-cta-container">
      <motion.div 
        className="cta-content"
        {...ctaAnimation}
      >
        <h2 className="cta-title">
          Double Your Productivity Right Now!
        </h2>
        <p className="cta-subtitle">
          Meet NovaAI. Discover the power of automation, analytics, and artificial intelligence. No risk, just pure efficiency.
        </p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124, 58, 237, 1)" }} // Strong neon hover glow
          whileTap={{ scale: 0.95 }}
        >
          <span className="button-text">Start for Free</span>
          <ArrowRight size={24} className="button-icon" />
        </motion.button>
      </motion.div>
    </div>
  );
}