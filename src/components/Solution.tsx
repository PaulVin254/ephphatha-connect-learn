import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Heart, Award } from "lucide-react";
import communityImage from "@/assets/community-learning.jpg";

const Solution = () => {
  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      text: "Learn directly from native Deaf instructors from Woodley Deaf Community"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      text: "Immerse yourself in authentic Deaf culture, not just sign vocabulary"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      text: "Master real conversational KSL that Deaf people actually use"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      text: "Build genuine confidence through community connection"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The 
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Ephphatha Difference
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Unlike other schools, Ephphatha connects you directly to the heart of Kenya's Deaf community. 
              Our instructors aren't just teachers—they're cultural ambassadors who will guide you into 
              a world of authentic communication.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  {benefit.icon}
                  <p className="text-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-accent mb-3">
                Why Woodley Deaf Community?
              </h3>
              <p className="text-foreground">
                Located in Adams Arcade, Ngong Road, our instructors come from one of Kenya's most 
                vibrant Deaf communities. You're not just learning a language—you're joining a family 
                that has been communicating in authentic KSL for generations.
              </p>
            </div>

            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Experience Authentic KSL Today
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={communityImage} 
              alt="Community learning environment"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-lg p-6 max-w-xs">
              <p className="font-semibold">
                "Not just a school. A movement for connection."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;