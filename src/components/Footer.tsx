import { Button } from "@/components/ui/button";
import { scrollToFreeClassesForm } from "@/lib/scroll-utils";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Free Classes", href: "#free-classes" },
    { label: "Contact", href: "#free-classes" },
  ];

  const resources = [
    { label: "KSL Basics Guide", href: "#" },
    { label: "Class Schedule", href: "#" },
    { label: "Student Portal", href: "#" },
    { label: "Community Events", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Ephphatha
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Bridging the communication gap through authentic Kenyan Sign
              Language education. Join our vibrant community and discover the
              beauty of Deaf culture.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-sm text-slate-300">
                  Adams Arcade, Ngong Road, Nairobi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span className="text-sm text-slate-300">
                  liturgye@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-sm text-slate-300">+254 706 241 832</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-100">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-slate-400 hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4 text-slate-100">
              Ready to Start Your KSL Journey?
            </h4>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join thousands of students who've transformed their lives through
              authentic sign language learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="cta"
                size="lg"
                className="px-8"
                onClick={scrollToFreeClassesForm}
              >
                Claim Your 3 FREE Classes
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-slate-400 hover:text-red-400 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-red-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-red-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Ephphatha Kenya. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Designed with ❤️ by{" "}
              <a
                href="https://www.linkedin.com/in/paul-wakoli/"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Paul Wakoli
              </a>
              , who learned KSL here, interpreted part-time, and now builds
              websites.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
