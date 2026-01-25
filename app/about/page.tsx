import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import StorySection from "../components/StorySection";
import MissionVisionValues from "../components/MissionVisionValues";
import LeadershipGovernance from "../components/LeadershipGovernance";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-black selection:bg-orange-500 selection:text-white">
      <Navbar />
      <AboutHero />
      <StorySection />
      <MissionVisionValues />
      <LeadershipGovernance />
      <Footer />
    </main>
  );
}
