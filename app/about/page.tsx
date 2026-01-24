import Navbar from "../components/Navbar";
import WhoWeAre from "../components/WhoWeAre";
import StorySection from "../components/StorySection";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] selection:bg-orange-500 selection:text-white">
      <Navbar />
      <WhoWeAre />
      <StorySection />
    </main>
  );
}
