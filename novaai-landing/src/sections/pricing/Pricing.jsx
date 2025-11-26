import { motion } from "framer-motion";
import "./Pricing.css";
import {
  pricingCardAnimation,
  pricingCardHover,
  pricingContainerAnimation,
} from "./PricingAnimations";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    features: ["1 Workspace", "Basic AI Tools", "Community Support"],
  },
  {
    name: "Pro",
    price: "$19/mo",
    highlight: true,
    features: [
      "Unlimited Workspaces",
      "Advanced AI Tools",
      "Priority Support",
      "Cloud Sync",
    ],
  },
  {
    name: "Business",
    price: "$49/mo",
    features: [
      "Team Access",
      "Custom Models",
      "Dedicated Support",
      "SSO / Enterprise",
    ],
  },
];

const Pricing = () => {
  return (
    <motion.section className="pricing-section" {...pricingContainerAnimation}>
      <div className="pricing-header">
        <h2>Flexible Plans for Every Team</h2>
        <p>Choose a plan that grows with your workflow.</p>
      </div>

      <div className="pricing-cards">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={i}
            custom={i}
            {...pricingCardAnimation}
            {...pricingCardHover}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
          >
            {plan.highlight && <span className="badge">Most Popular</span>}

            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>

            <ul className="pricing-features">
              {plan.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            <button className="pricing-button">Get {plan.name}</button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Pricing;
