import Navbar from "../components/Navbar";
import WhoWeAre from "../components/WhoWeAre";
import StorySection from "../components/StorySection";
import MissionVisionValues from "../components/MissionVisionValues";

export default function About() {
  return (
    <main className="min-h-screen bg-black selection:bg-orange-500 selection:text-white">
      <Navbar />
      <WhoWeAre />
      <StorySection />
      <MissionVisionValues />
    </main>
  );
}
