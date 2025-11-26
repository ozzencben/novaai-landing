import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter, Zap } from "lucide-react";
import "./Footer.css";

// Animation settings
const footerAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Dummy Navigation and Resource Data
  const resources = [
    { name: "Documentation", link: "/docs" },
    { name: "API Reference", link: "/api" },
    { name: "System Status", link: "/status" },
    { name: "Blog", link: "/blog" },
  ];

  const company = [
    { name: "About Us", link: "/about" },
    { name: "Careers (12 Open)", link: "/careers" },
    { name: "Press Kit", link: "/press" },
    { name: "Legal Terms", link: "/legal" },
  ];

  return (
    <motion.footer className="footer-container" {...footerAnimation}>
      <div className="footer-main-content">
        {/* Left Column: Logo and Slogan */}
        <div className="footer-brand-section">
          <div className="footer-logo">
            <Zap size={30} className="logo-icon" />
            <span className="logo-text">NovaAI</span>
          </div>
          <p className="footer-slogan">
            Future workflows, powered by today's AI.
          </p>
          <p className="footer-creator">
            Design and Development: <span className="ozzen-name">Ozzenc</span>
          </p>
        </div>

        {/* Middle Columns: Navigation Links */}
        <div className="footer-links-group">
          <h4 className="links-title">Resources</h4>
          <ul className="links-list">
            {resources.map((item) => (
              <li key={item.name}>
                <a href={item.link} className="footer-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="links-title">Company</h4>
          <ul className="links-list">
            {company.map((item) => (
              <li key={item.name}>
                <a href={item.link} className="footer-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Contact */}
        <div className="footer-contact-section">
          <h4 className="links-title">Contact Us</h4>
          <a href="mailto:ozzencben@gmail.com" className="contact-mail">
            <Mail size={18} /> ozzencben@gmail.com
          </a>
          <div className="social-links">
            <a href="#" aria-label="NovaAI Twitter" className="social-link">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="NovaAI LinkedIn" className="social-link">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Legal Info */}
      <div className="footer-bottom-bar">
        <p className="copyright">
          © {currentYear} NovaAI. All Rights Reserved. | Fictional Artificial
          Intelligence Solution.
        </p>
      </div>
    </motion.footer>
  );
}
