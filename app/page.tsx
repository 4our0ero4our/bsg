import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobilePartners from "./components/MobilePartners";
import WhatWeDo from "./components/WhatWeDo";
import ImpactNumbers from "./components/ImpactNumbers";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <MobilePartners />
      <WhatWeDo />
      <ImpactNumbers />
      <div className="h-screen bg-white"></div> {/* Spacer for scroll */}
    </main>
  );
}
