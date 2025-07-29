import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, MapPin, Clock, Mail } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Authentic Connection",
      description: "We believe true communication comes from cultural understanding, not just sign memorization."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community First",
      description: "Our instructors are integral members of the Woodley Deaf Community, bringing lived experience to every lesson."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Excellence in Education",
      description: "We maintain small class sizes and personalized attention to ensure every student succeeds."
    }
  ];

  const teamMembers = [
    {
      name: "John Mwangi",
      role: "Lead Instructor & Community Elder",
      experience: "15+ years teaching KSL",
      specialty: "Deaf culture & storytelling"
    },
    {
      name: "Rose Achieng",
      role: "Level 1 & 2 Instructor",
      experience: "Native KSL, 8+ years teaching",
      specialty: "Beginner immersion methods"
    },
    {
      name: "Peter Kamau",
      role: "Advanced Level Instructor",
      experience: "KSL linguistics expert",
      specialty: "Professional sign development"
    },
    {
      name: "Faith Njoroge",
      role: "Community Coordinator",
      experience: "Bridge between hearing & Deaf",
      specialty: "Cultural sensitivity training"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            About Ephphatha
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Just a School.
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              A Movement for Connection.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Founded in the heart of Nairobi's Woodley Deaf Community, Ephphatha exists to bridge 
            the communication gap between the hearing and Deaf worlds through authentic, 
            culturally-rich KSL education.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 mb-16 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed text-foreground max-w-4xl mx-auto">
              To create a world where communication barriers don't exist. We empower hearing individuals 
              with authentic KSL skills while honoring and celebrating Deaf culture. Every student who 
              walks through our doors becomes an ambassador for inclusion and understanding.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-2 border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Meet Your 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Deaf Instructors
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{member.name}</h4>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-1">{member.experience}</p>
                  <p className="text-xs text-accent font-medium">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location & Contact */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Find Us</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Adams Arcade, Ngong Road<br />
                Nairobi, Kenya
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Located in the heart of the Woodley Deaf Community, our accessible 
                learning space welcomes students of all backgrounds.
              </p>
              <Button variant="outline" className="w-full">
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Office Hours</h3>
              </div>
              <div className="space-y-2 text-muted-foreground mb-6">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 3:00 PM</p>
                <p>Sunday: Class hours only</p>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">info@ephphatha.co.ke</span>
              </div>
              <Button variant="hero" className="w-full">
                Contact Us Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;