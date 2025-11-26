import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Lock, CheckCircle, Clock } from 'lucide-react'; 
import "./FAQ.css";

const faqData = [
  {
    id: 1,
    icon: <Lock size={20} />,
    question: "What measures do you take regarding data security?",
    answer: "Your data is protected with industry-standard AES-256 encryption. All traffic is secured via SSL/TLS and is never shared with third parties. Your security is our top priority.",
  },
  {
    id: 2,
    icon: <CheckCircle size={20} />,
    question: "Can I integrate NovaAI with my existing business tools?",
    answer: "Yes, NovaAI is designed to integrate seamlessly with Slack, Notion, Asana, Google Workspace, and other popular business applications.",
  },
  {
    id: 3,
    icon: <Clock size={20} />,
    question: "How long does setup and getting started take?",
    answer: "For most users, setting up and configuring basic automation workflows takes less than 15 minutes. Our quick start guide and support team are always ready to assist.",
  },
  {
    id: 4,
    icon: <Minus size={20} />,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, all our plans are commitment-free. You can easily cancel your subscription anytime from your control panel, effective at the end of the current billing cycle.",
  },
];

const accordionAnimation = {
  initial: "closed",
  animate: "open",
  exit: "closed",
  variants: {
    open: { opacity: 1, height: "auto" }, // Automatically adjust height
    closed: { opacity: 0, height: 0 },
  },
  transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] } // Smooth spring
};

const FAQItem = ({ faq, isOpen, toggleItem }) => {
    return (
      <motion.div 
        className="faq-item"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: faq.id * 0.1 }}
      >
        <button className="faq-question-button" onClick={toggleItem}>
          <div className="faq-icon-text">
            <span className="faq-icon">{faq.icon}</span>
            <span className="faq-question">{faq.question}</span>
          </div>
          <span className="faq-toggle-icon">
            {isOpen ? <Minus size={24} /> : <Plus size={24} />}
          </span>
        </button>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div 
              className="faq-answer-wrapper"
              {...accordionAnimation}
            >
              <p className="faq-answer-text">{faq.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
};

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <motion.h2 
        className="faq-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="faq-list">
        {faqData.map((faq) => (
          <FAQItem 
            key={faq.id} 
            faq={faq} 
            isOpen={openId === faq.id} 
            toggleItem={() => toggleItem(faq.id)} 
          />
        ))}
      </div>
    </div>
  );
}