import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Deaf instructors teaching sign language"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Become Fluent in 
          <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Kenyan Sign Language
          </span>
          in 90 Days, Guaranteed
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Learn from authentic Deaf instructors in the heart of Woodley's thriving Deaf community. 
          Stop guessing, start signing with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" variant="cta" className="text-lg px-8 py-4">
            Start 3 FREE Classes Today
          </Button>
          <Button size="lg" variant="warm" className="text-lg px-8 py-4">
            View Class Schedule
          </Button>
        </div>
        
        <p className="text-sm text-white/80">
          ✨ No payment required • 90-Day fluency guarantee • Join the first 10 students this month
        </p>
      </div>
    </section>
  );
};

export default Hero;