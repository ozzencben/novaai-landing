import { motion } from "framer-motion";
import { Activity, BarChart2, Zap } from "lucide-react"; // İkonlar için
import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    icon: <Zap size={36} />,
    title: "1. Integrate Data",
    description:
      "Connect your existing platforms (Slack, Notion, etc.) to NovaAI in seconds, with full privacy and security guaranteed.",
  },
  {
    id: 2,
    icon: <Activity size={36} />,
    title: "2. Launch the AI Workflow",
    description:
      "Define the task you need. Our AI engine automatically optimizes and executes complex workflows.",
  },
  {
    id: 3,
    icon: <BarChart2 size={36} />,
    title: "3. View the Results",
    description:
      "Instantly monitor comprehensive reports, analyses, and completed task outputs in your modern interface.",
  },
];

const stepAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 }, // Görüntülenince bir kez animasyon
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <motion.h2 className="hiw-heading" {...stepAnimation}>
        How Does NovaAI Work?
      </motion.h2>
      <motion.p
        className="hiw-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Maximize your productivity in three simple steps.
      </motion.p>

      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="hiw-step-card"
            {...stepAnimation}
            transition={{ ...stepAnimation.transition, delay: index * 0.3 }} // Kartlar gecikmeli girer (Staggering)
          >
            <div className="hiw-icon-wrapper">{step.icon}</div>
            <h3 className="hiw-step-title">{step.title}</h3>
            <p className="hiw-step-description">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
