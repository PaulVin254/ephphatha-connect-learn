import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Gift, Zap, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const GodfatherOffer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp_number: "",
    preferred_class: "",
    level_of_interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate all required fields
      const missingFields = [];
      if (!formData.name.trim()) missingFields.push("Full Name");
      if (!formData.email.trim()) missingFields.push("Email Address");
      if (!formData.whatsapp_number.trim())
        missingFields.push("WhatsApp Number");
      if (!formData.preferred_class) missingFields.push("Class Preference");
      if (!formData.level_of_interest) missingFields.push("Experience Level");

      if (missingFields.length > 0) {
        toast({
          title: "Missing Required Fields",
          description: `Please fill in: ${missingFields.join(", ")}`,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // First, test the connection by trying to select from the table
      console.log("Testing database connection...");
      const { data: testData, error: testError } = await supabase
        .from("leads")
        .select("count", { count: "exact", head: true });

      if (testError) {
        console.error("Database connection test failed:", testError);

        // Check if table exists by trying a different approach
        console.log("Trying alternative table check...");
        const { data: tableCheck, error: tableError } = await supabase
          .from("leads")
          .select("*")
          .limit(1);

        if (tableError) {
          console.error("Table check failed:", tableError);
          throw new Error(
            `Table 'leads' does not exist or is not accessible. Please ensure the database migrations have been applied to your Supabase project.`
          );
        }
      }

      console.log("Database connection successful. Attempting to insert...");
      console.log("Form data to insert:", formData);

      // Try insert with explicit return
      const { data, error } = await supabase
        .from("leads")
        .insert([formData])
        .select();

      if (error) {
        console.error("Insert error details:");
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
        console.error("Error details:", error.details);
        console.error("Error hint:", error.hint);
        console.error("Full error object:", JSON.stringify(error, null, 2));

        // If it's an empty error object, it's likely RLS
        if (!error.message && !error.code) {
          throw new Error(
            "Insert blocked by Row Level Security. The 'leads' table exists but the insert policy may not be properly configured. Please check your Supabase RLS policies."
          );
        }
        throw error;
      }

      console.log("Insert successful:", data);

      toast({
        title: "Success! 🎉",
        description:
          "Your free classes are reserved! We'll contact you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        whatsapp_number: "",
        preferred_class: "",
        level_of_interest: "",
      });
    } catch (error) {
      console.error("Form submission error details:");
      console.error("Error type:", typeof error);
      console.error("Error constructor:", error?.constructor?.name);
      console.error("Full error:", JSON.stringify(error, null, 2));
      if (error && typeof error === "object") {
        console.error("Error properties:", Object.keys(error));
        Object.entries(error).forEach(([key, value]) => {
          console.error(`${key}:`, value);
        });
      }

      toast({
        title: "Something went wrong",
        description: `Error: ${
          error instanceof Error ? error.message : "Unknown error"
        }. Please try again or contact us directly via WhatsApp.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const offerComponents = [
    {
      icon: <Gift className="h-8 w-8 text-accent" />,
      title: "3 FREE Classes",
      description:
        "Full immersion into our teaching style. Not a teaser—a complete experience.",
      value: "Ksh 5,000 Value",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "90-Day Fluency Guarantee",
      description:
        "Introduce yourself and hold basic conversations in KSL or get your money back.",
      value: "Risk-Free Promise",
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Lifetime Practice Community",
      description:
        "Connect with fellow students and Deaf mentors for ongoing support.",
      value: "Priceless Access",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-primary/5 to-accent/5"
      id="free-classes"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-destructive/10 text-destructive border-destructive/20">
            <Clock className="h-4 w-4 mr-2" />
            Limited to First 10 Students This Month
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Welcome
            </span>{" "}
            Offer
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're so confident in our authentic Deaf-led approach that we're
            making you an offer you literally can't refuse. Here's everything
            you get when you start today:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {offerComponents.map((component, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  {component.icon}
                  <div>
                    <CardTitle className="text-lg">{component.title}</CardTitle>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {component.value}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-primary/20 shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl mb-2">
              Reserve Your 3 FREE Classes Now
            </CardTitle>
            <p className="text-muted-foreground">
              No payment required. Just genuine interest in authentic KSL
              learning.
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp_number}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        whatsapp_number: e.target.value,
                      })
                    }
                    placeholder="+254 xxx xxx xxx"
                  />
                </div>

                <div>
                  <Label htmlFor="class-preference">Class Preference *</Label>
                  <Select
                    value={formData.preferred_class}
                    onValueChange={(value) =>
                      setFormData({ ...formData, preferred_class: value })
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">Online Classes</SelectItem>
                      <SelectItem value="sunday">Sunday In-Person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="level">Your Experience Level *</Label>
                <Select
                  value={formData.level_of_interest}
                  onValueChange={(value) =>
                    setFormData({ ...formData, level_of_interest: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your current level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Complete Beginner</SelectItem>
                    <SelectItem value="intermediate">
                      Some Experience
                    </SelectItem>
                    <SelectItem value="advanced">Advanced Learner</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Reserving Your Spot..."
                  : "Claim Your 3 FREE Classes Now"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-4">
              By submitting, you agree to receive communication about our
              programs. We respect your privacy and won't spam you.
              <br />
              <span className="text-destructive">
                * All fields are required
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GodfatherOffer;
