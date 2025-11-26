// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import {
  floatingShapes,
  heroButtonAnimation,
  heroMockupAnimation,
  heroSubtitleAnimation,
  heroTitleAnimation,
  mobileMockupAnimation,
} from "./Hero.Animations";
import "./HeroStyles.css";
import mobileMockup from "./mobile.png";
import tabletMockup from "./tablet.png";

const Hero = () => {
  const { scrollY } = useScroll();
  const yMockup = useTransform(scrollY, [0, 300], [0, 70]);
  const rotateMockup = useTransform(scrollY, [0, 300], [0, 8]);
  const scaleMockup = useTransform(scrollY, [0, 300], [1, 0.95]);

  const mobileTranslateY = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <motion.div className="hero-container">
      <div className="hero-content">
        <motion.h1 className="hero-title" {...heroTitleAnimation}>
          Boost Your Productivity with NovaAI
        </motion.h1>
        <motion.p className="hero-subtitle" {...heroSubtitleAnimation}>
          Automate workflows, save hours, and enhance your team’s efficiency
          using AI.
        </motion.p>
        <motion.button
          className="hero-button"
          {...heroButtonAnimation}
          whileHover={{ scale: 1.05, backgroundColor: "#4f46e5" }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>

      <motion.div
        style={{ y: yMockup, rotate: rotateMockup, scale: scaleMockup }}
        className="mockup-container"
        {...heroMockupAnimation}
        transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src={tabletMockup}
          alt="Tablet Mockup"
          className="tablet-mockup"
          whileHover={{ scale: 1.02, y: -5 }}
        />

        <motion.img
          src={mobileMockup}
          style={{ y: mobileTranslateY }} // Scroll ile yukarı kayma (Parallax)
          {...mobileMockupAnimation}
          alt="Mobile Mockup"
          className="mobile-mockup"
          whileHover={{ scale: 1.05, y: -10 }}
        />
      </motion.div>

      <div className="shapes-container">
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className="shape"
            initial={shape.initial}
            whileInView={shape.whileInView}
            transition={shape.transition}
            style={shape.style}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;
