import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, CheckCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      level: "Level 1",
      title: "Foundation KSL",
      price: "Ksh 10,000",
      duration: "3 Months",
      schedule: "Wed & Fri",
      description: "Master the fundamentals of KSL with our native Deaf instructors.",
      highlights: [
        "Basic conversational skills",
        "Essential vocabulary (500+ signs)",
        "Deaf culture introduction",
        "Fingerspelling mastery"
      ],
      badge: "Most Popular"
    },
    {
      level: "Level 2", 
      title: "Conversational KSL",
      price: "Ksh 9,500",
      duration: "3 Months",
      schedule: "Tue & Sat",
      description: "Build fluency and confidence in everyday conversations.",
      highlights: [
        "Complex sentence structures",
        "Storytelling techniques",
        "Cultural nuances",
        "Community interaction"
      ]
    },
    {
      level: "Level 3",
      title: "Advanced KSL",
      price: "Ksh 9,500", 
      duration: "3 Months",
      schedule: "Mon & Thurs",
      description: "Achieve near-native fluency and cultural competency.",
      highlights: [
        "Advanced grammar",
        "Idiomatic expressions", 
        "Professional signing",
        "Teaching preparation"
      ]
    },
    {
      level: "Attachment",
      title: "Community Immersion",
      price: "Ksh 6,500",
      duration: "Ongoing",
      schedule: "Flexible",
      description: "Real-world practice within the Woodley Deaf Community.",
      highlights: [
        "Mentorship program",
        "Cultural events",
        "Volunteer opportunities", 
        "Networking support"
      ]
    }
  ];

  const schedule = [
    { day: "Monday", level: "Level 3", time: "2:00 PM - 4:00 PM" },
    { day: "Tuesday", level: "Level 2", time: "2:00 PM - 4:00 PM" },
    { day: "Wednesday", level: "Level 1", time: "2:00 PM - 4:00 PM" },
    { day: "Thursday", level: "Level 3", time: "2:00 PM - 4:00 PM" },
    { day: "Friday", level: "Level 1", time: "2:00 PM - 4:00 PM" },
    { day: "Saturday", level: "Level 2", time: "2:00 PM - 4:00 PM" },
    { day: "Sunday", level: "All Levels", time: "2:00 PM - 4:00 PM", special: "In-Person at Adams Arcade" }
  ];

  return (
    <section className="py-20 bg-muted/30" id="courses">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Path to 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              KSL Fluency
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured learning with authentic Deaf instructors. Three intake periods: 
            <strong> January, May, and September</strong> (3-month terms).
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className={`relative border-2 hover:shadow-lg transition-all duration-300 ${course.badge ? 'border-primary/50' : 'border-border'}`}>
              {course.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  {course.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-sm text-primary font-semibold">{course.level}</div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <div className="text-3xl font-bold text-primary">{course.price}</div>
                <div className="text-sm text-muted-foreground">per 3-month term</div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{course.description}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{course.schedule}</span>
                </div>
                
                <div className="space-y-2">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="bg-card rounded-xl border border-border p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Weekly Class Schedule</h3>
          
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 min-w-full">
              {schedule.map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 text-center ${item.special ? 'border-accent bg-accent/10' : 'border-border bg-background'}`}>
                  <div className="font-semibold text-lg">{item.day}</div>
                  <div className="text-primary font-medium mt-1">{item.level}</div>
                  <div className="text-sm text-muted-foreground mt-2">{item.time}</div>
                  {item.special && (
                    <div className="text-xs text-accent font-medium mt-2">{item.special}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Classes run for 2 hours each session • Small groups of 8-12 students maximum
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                Enroll in Next Intake
              </Button>
              <Button variant="outline">
                Download Full Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;