import { motion } from "framer-motion";
import "./Features.css";
import {
  featureCardAnimation,
  featureCardHover,
  featureHeadingAnimation,
} from "./FeaturesAnimations";
import { featuresData } from "./featuresData";

const Features = () => {
  return (
    <div className="features-container">
      <motion.div
        {...featureHeadingAnimation}
        transition={{ duration: 0.5 }}
        className="features-heading"
      >
        <h2>Why Choose NovaAI?</h2>
        <p>
          Boost your productivity with features designed to save time and
          improve efficiency.
        </p>
      </motion.div>

      <div className="features-card-container">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            initial={featureCardAnimation.initial}
            whileInView={featureCardAnimation.whileInView}
            viewport={featureCardAnimation.viewport}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={featureCardHover.whileHover}
            whileTap={featureCardHover.whileTap}
            className="feature-card"
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
