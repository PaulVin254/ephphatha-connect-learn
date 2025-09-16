import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, MapPin, Clock, Mail } from "lucide-react";
import { scrollToFreeClassesForm } from "@/lib/scroll-utils";

const About = () => {
  const handleGetDirections = () => {
    const googleMapsLink = "https://maps.app.goo.gl/uLfxVu2AFN4teX736";
    const schoolAddress = "Adams Arcade, Ngong Road, Nairobi, Kenya";

    // Smart device detection
    const isMobile =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isMobile) {
      // For mobile devices, try native apps first
      if (isIOS) {
        // iOS - Try Apple Maps first, then fallback to Google Maps
        window.open(
          `maps://maps.apple.com/?q=${encodeURIComponent(schoolAddress)}`,
          "_blank"
        );
        // Fallback to Google Maps link after short delay
        setTimeout(() => {
          window.open(googleMapsLink, "_blank");
        }, 1000);
      } else if (isAndroid) {
        // Android - Try Google Maps app with intent, then fallback to web
        window.open(
          `intent://maps.google.com/?q=${encodeURIComponent(
            schoolAddress
          )}#Intent;scheme=https;package=com.google.android.apps.maps;end`,
          "_blank"
        );
        // Fallback to Google Maps link after short delay
        setTimeout(() => {
          window.open(googleMapsLink, "_blank");
        }, 1000);
      } else {
        // Other mobile devices - direct to Google Maps link
        window.open(googleMapsLink, "_blank");
      }
    } else {
      // Desktop - Open Google Maps link directly
      window.open(googleMapsLink, "_blank");
    }
  };

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Authentic Connection",
      description:
        "We believe true communication comes from cultural understanding, not just sign memorization.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community First",
      description:
        "Our instructors are integral members of the Woodley Deaf Community, bringing lived experience to every lesson.",
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Excellence in Education",
      description:
        "We maintain small class sizes and personalized attention to ensure every student succeeds.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            About Ephphatha
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Just a School.
            <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              A Movement for Connection.
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Founded in the heart of Nairobi's Woodley Deaf Community, Ephphatha
            exists to bridge the communication gap between the hearing and Deaf
            worlds through authentic, culturally-rich KSL education.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 mb-16 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed text-foreground max-w-4xl mx-auto">
              To create a world where communication barriers don't exist. We
              empower hearing individuals with authentic KSL skills while
              honoring and celebrating Deaf culture. Every student who walks
              through our doors becomes an ambassador for inclusion and
              understanding.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Classroom Learning Environment */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Learning Environment
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience interactive, hands-on KSL learning in our welcoming
              classroom where every student receives personalized attention
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/class-ongoing.JPG"
              alt="Students learning sign language in classroom setting"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-800">
                      Class in Session
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">•</div>
                  <span className="text-sm text-gray-600">
                    Interactive KSL Learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-lg md:text-xl font-semibold">Find Us</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Adams Arcade, Ngong Road
                <br />
                Nairobi, Kenya
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Located in the heart of the Woodley Deaf Community, our
                accessible learning space welcomes students of all backgrounds.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleGetDirections}
              >
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-lg md:text-xl font-semibold">
                  Office Hours
                </h3>
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
              <Button
                variant="hero"
                className="w-full"
                onClick={scrollToFreeClassesForm}
              >
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
