import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Free Classes", href: "#free-classes" },
    { label: "Contact", href: "#contact" }
  ];

  const resources = [
    { label: "KSL Basics Guide", href: "#" },
    { label: "Class Schedule", href: "#" },
    { label: "Student Portal", href: "#" },
    { label: "Community Events", href: "#" },
    { label: "FAQ", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Ephphatha
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Bridging the communication gap through authentic Kenyan Sign Language education. 
              Join our vibrant community and discover the beauty of Deaf culture.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-sm">Adams Arcade, Ngong Road, Nairobi</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-sm">info@ephphatha.co.ke</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-sm">+254 XXX XXX XXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Ready to Start Your KSL Journey?</h4>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join thousands of students who've transformed their lives through authentic sign language learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="lg" className="px-8">
                Claim Your 3 FREE Classes
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Ephphatha Sign Language School. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs mt-1">
              Proudly serving the Kenyan Deaf community since 2019
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;