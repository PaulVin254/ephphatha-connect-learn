import Hero from "@/components/Hero";
import ProblemAgitation from "@/components/ProblemAgitation";
import Solution from "@/components/Solution";
import GodfatherOffer from "@/components/GodfatherOffer";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/ui/hero-section-1";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <main>
        <section id="home">
          <Hero />
        </section>
        <ProblemAgitation />
        <Solution />
        <GodfatherOffer />
        <Courses />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
