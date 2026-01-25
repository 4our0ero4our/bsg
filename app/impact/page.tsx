import Navbar from "../components/Navbar";
import ImpactsHero from "../components/ImpactsHero";
import ImpactsSections from "../components/ImpactsSections";
import Footer from "../components/Footer";

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-orange-500 selection:text-white">
      <Navbar />
      <ImpactsHero />
      <ImpactsSections />
      <Footer />
    </main>
  );
}
