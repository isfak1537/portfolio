import Navbar from "../components/Navbar/Navbar";
import AuroraBackground from "../components/Background/AuroraBackground";
import AnimatedGrid from "../components/Background/AnimatedGrid";
import Particles from "../components/Background/Particles";
import Radar from "../components/Radar/Radar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Timeline from "../components/Timeline/Timeline";
import Philosophy from "../components/Philosophy/Philosophy";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollProgress from "../components/UI/ScrollProgress";
import BackToTop from "../components/UI/BackToTop";
export default function MainLayout() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

  <ScrollProgress />

  <AuroraBackground />
  <AnimatedGrid />
  <Particles />

  <Navbar />

  <Hero />

  <Stats />

  <Radar />

  <Timeline />

  <Philosophy />

  <Projects />
<Contact />
<Footer />

<BackToTop />
    </main>
  );
}