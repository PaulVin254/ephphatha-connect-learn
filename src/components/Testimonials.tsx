import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import signLanguageHands from "@/assets/sign-language-hands.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Level 2 Graduate",
      text: "I tried three other schools before Ephphatha. The difference is night and day. Learning from Deaf instructors connected me to the real community, not just textbook signs.",
      rating: 5,
      highlight: "Real community connection"
    },
    {
      name: "David Mwangi",
      role: "Level 3 Student",
      text: "As a teacher, I needed authentic KSL for my Deaf students. Ephphatha didn't just teach me signs—they taught me how to truly communicate and understand Deaf culture.",
      rating: 5,
      highlight: "Professional development"
    },
    {
      name: "Grace Akinyi",
      role: "Community Attachment",
      text: "My daughter is Deaf, and I was failing to connect with her. After Ephphatha, we have real conversations now. She's so proud when I sign with her friends.",
      rating: 5,
      highlight: "Family transformation"
    },
    {
      name: "James Ochieng",
      role: "Level 1 Graduate",
      text: "I was scared to embarrass myself. The instructors made me feel welcome from day one. Now I volunteer in the Deaf community and made lifelong friends.",
      rating: 5,
      highlight: "Confidence building"
    }
  ];

  const stats = [
    { number: "98%", label: "Student Satisfaction" },
    { number: "150+", label: "Successful Graduates" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real Stories from 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Real Students
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't take our word for it. Here's what our students say about their 
            transformation journey with authentic KSL education.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                
                <p className="text-lg leading-relaxed mb-6 text-foreground">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.highlight}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Story */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Featured Success Story
              </Badge>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                "From Fear to Fluency in 90 Days"
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "I started Ephphatha terrified of making mistakes. My instructor, John from the 
                Woodley community, showed me that errors are part of learning. Now I interpret 
                at my church and help bridge communication gaps in my workplace. Ephphatha 
                didn't just teach me KSL—they gave me a purpose."
              </p>
              
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">Mary Njeri</div>
                  <div className="text-sm text-muted-foreground">Church Interpreter & Level 3 Graduate</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={signLanguageHands} 
                alt="Professional sign language communication"
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground rounded-full p-4">
                <Quote className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;