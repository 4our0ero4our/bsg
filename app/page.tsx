import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobilePartners from "./components/MobilePartners";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <MobilePartners />
      <WhatWeDo />
      <div className="h-screen bg-white"></div> {/* Spacer for scroll */}
    </main>
  );
}
