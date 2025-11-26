import MainLayout from "../layouts/MainLayout.jsx";
import FAQ from "../sections/faq/FAQ.jsx";
import Features from "../sections/features/Features.jsx";
import FinalCTA from "../sections/final-cta/FinalCTA.jsx";
import Footer from "../sections/footer/Footer.jsx";
import Hero from "../sections/hero/Hero.jsx";
import HowItWorks from "../sections/how-it-works/HowItWorks.jsx";
import Pricing from "../sections/pricing/Pricing.jsx";
import TestimonialTicker from "../sections/testimonials/TestimonialTicker.jsx";

function App() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <TestimonialTicker />
      <FAQ />
      <FinalCTA />
      <Footer />
    </MainLayout>
  );
}

export default App;
