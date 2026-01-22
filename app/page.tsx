import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobilePartners from "./components/MobilePartners";
import WhatWeDo from "./components/WhatWeDo";
import ImpactNumbers from "./components/ImpactNumbers";
import FeaturedStories from "./components/FeaturedStories";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <MobilePartners />
      <WhatWeDo />
      <ImpactNumbers />
      <FeaturedStories />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
