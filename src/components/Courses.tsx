import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { scrollToFreeClassesForm } from "@/lib/scroll-utils";
import {
  Clock,
  Users,
  Calendar,
  CheckCircle,
  Monitor,
  MapPin,
  DollarSign,
} from "lucide-react";

const Courses = () => {
  const onlineSchedule = [
    {
      level: "Level 1",
      days: "Wednesdays & Fridays",
      time: "8:00 PM - 9:00 PM",
      fee: "Ksh 10,000",
    },
    {
      level: "Level 2",
      days: "Tuesdays & Saturdays",
      time: "8:00 PM - 9:00 PM",
      fee: "Ksh 9,500",
    },
    {
      level: "Level 3",
      days: "Mondays & Thursdays",
      time: "8:00 PM - 9:00 PM",
      fee: "Ksh 9,500",
    },
  ];

  const feeStructure = [
    {
      level: "Level 1",
      fee: "Ksh 10,000",
      description: "Foundation KSL - Perfect for beginners",
    },
    {
      level: "Level 2",
      fee: "Ksh 9,500",
      description: "Conversational KSL - Build your fluency",
    },
    {
      level: "Level 3",
      fee: "Ksh 9,500",
      description: "Advanced KSL - Master complex conversations",
    },
    {
      level: "Attachment",
      fee: "Ksh 6,500",
      description: "Community Immersion - Real-world practice",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="courses">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Class Schedule &
            <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Fees
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer both flexible online classes and immersive in-person
            sessions. Our fee structure remains consistent across all learning
            modes, ensuring equal access to quality KSL education.
            <span className="block mt-2 text-red-600 font-semibold">
              🎉 Start with 3 FREE trial classes - No payment required upfront!
            </span>
          </p>
        </div>

        {/* Section 1: Online Classes */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="h-6 w-6 text-red-600" />
            <h3 className="text-2xl font-bold">
              Online Learning: Flexible & Convenient
            </h3>
          </div>

          <Card className="border-red-100 bg-red-50/50">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {onlineSchedule.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-red-100"
                  >
                    <div className="font-semibold text-lg text-red-700 mb-2">
                      {item.level}
                    </div>
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      <span>{item.days}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <Clock className="h-4 w-4 text-red-600" />
                      <span>{item.time}</span>
                    </div>
                    <div className="text-xl font-bold text-red-600">
                      {item.fee}
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">
                      per 3-month term
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      3 FREE trial classes first
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 2: In-Person Classes */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-purple-600" />
            <h3 className="text-2xl font-bold">
              Sunday In-Person Classes: Immersive & Community-Focused
            </h3>
          </div>

          <Card className="border-purple-100 bg-purple-50/50">
            <CardContent className="p-6">
              <div className="bg-white rounded-lg p-6 border border-purple-100 text-center max-w-md mx-auto">
                <div className="font-semibold text-xl text-purple-700 mb-3">
                  All Levels Welcome
                </div>
                <div className="flex items-center justify-center gap-2 text-lg mb-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">Every Sunday</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-lg mb-4">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">2:00 PM - 4:00 PM</span>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  Adams Arcade, Woodley Community Center
                </div>
                <div className="text-xs text-green-600 font-medium mb-2">
                  3 FREE trial classes first
                </div>
                <Badge className="bg-purple-600 text-white">
                  Interactive Community Sessions
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 3: Fee Structure */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="h-6 w-6 text-green-600" />
            <h3 className="text-2xl font-bold">Investment in Your Fluency</h3>
          </div>

          <Card className="border-green-100 bg-green-50/50">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-lg">
                Course Fees (Same for All Modes)
              </CardTitle>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-700 font-semibold text-sm mb-1">
                  ✨ Try Before You Pay!
                </p>
                <p className="text-red-600 text-sm">
                  Get 3 FREE trial classes to experience our teaching method.
                  Only pay if you decide to continue with the full program.
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Same fees for both online and in-person modes</strong>
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {feeStructure.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-green-100 text-center"
                  >
                    <div className="font-semibold text-lg text-green-700 mb-1">
                      {item.level}
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {item.fee}
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      per 3-month term
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 4: Intake Periods */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold">
              Start Your Journey: Intake Periods
            </h3>
          </div>

          <Card className="border-blue-100 bg-blue-50/50">
            <CardContent className="p-6 text-center">
              <div className="max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold text-blue-700 mb-4">
                  Three Annual Intake Periods
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {["January", "May", "September"].map((month, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 border border-blue-100"
                    >
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {month}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        3-Month Term
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-base text-muted-foreground mb-6">
                  Each term runs for 3 months with consistent quality
                  instruction across all learning modes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={scrollToFreeClassesForm}
                  >
                    Claim Your 3 FREE Classes
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <a
                      href="https://aojlbhvjvoxofdzzjrud.supabase.co/storage/v1/object/public/Learn%20Kenyan%20Sign%20Language%20in%201%20hour/Learn%20Kenyan%20Sign%20Language%20in%201%20hour%20(FREE).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Full Schedule
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Courses;
