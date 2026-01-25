import Navbar from "../components/Navbar";
import ProgramsHero from "../components/ProgramsHero";
import ProgramsGrid from "../components/ProgramsGrid";
import Footer from "../components/Footer";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-orange-500 selection:text-white">
      <Navbar />
      <ProgramsHero />
      <ProgramsGrid />
      <Footer />
    </main>
  );
}
