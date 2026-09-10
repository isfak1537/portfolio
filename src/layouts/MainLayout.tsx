import Navbar from "../components/Navbar/Navbar";
import AuroraBackground from "../components/Background/AuroraBackground";
import AnimatedGrid from "../components/Background/AnimatedGrid";
import Particles from "../components/Background/Particles";
import ThreeBackground from "../components/Background/ThreeBackground";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Radar from "../components/Radar/Radar";
import Timeline from "../components/Timeline/Timeline";
import Philosophy from "../components/Philosophy/Philosophy";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollProgress from "../components/UI/ScrollProgress";
import BackToTop from "../components/UI/BackToTop";
import CustomCursor from "../components/UI/CustomCursor";
import ErrorBoundary from "../components/UI/ErrorBoundary";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fafafa] text-[#18181b] selection:bg-black/10 selection:text-black">
      {/* Interactive Microinteractions */}
      <CustomCursor />
      <ScrollProgress />

      {/* Interactive 3D Perspective WebGL Environment */}
      <ErrorBoundary>
        <ThreeBackground />
      </ErrorBoundary>
      <AuroraBackground />
      <AnimatedGrid />
      <Particles />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero (#home) */}
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>

        {/* 2. Skills (#skills) */}
        <ErrorBoundary>
          <Radar />
        </ErrorBoundary>

        {/* 3. Projects (#projects) */}
        <ErrorBoundary>
          <Projects />
        </ErrorBoundary>

        {/* 4. Engineering Snapshot / Stats (#stats) */}
        <ErrorBoundary>
          <Stats />
        </ErrorBoundary>

        {/* 5. Developer Journey (#journey) */}
        <ErrorBoundary>
          <Timeline />
        </ErrorBoundary>

        {/* 6. Engineering Philosophy (#philosophy) */}
        <ErrorBoundary>
          <Philosophy />
        </ErrorBoundary>

        {/* 7. Contact (#contact) */}
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>

      {/* Footer */}
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>

      {/* Back To Top Action */}
      <BackToTop />
    </div>
  );
}