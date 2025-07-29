import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react";

const ProblemAgitation = () => {
  const problems = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
      title: "Fake Fluency",
      description: "You've tried learning from hearing instructors who don't truly understand Deaf culture or authentic KSL. Result? Broken signs that embarrass you in real conversations."
    },
    {
      icon: <Clock className="h-8 w-8 text-destructive" />,
      title: "Wasted Time",
      description: "Months of memorizing vocabulary from textbooks and YouTube videos, but you still can't hold a basic conversation with a Deaf person. Sound familiar?"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-destructive" />,
      title: "Money Down the Drain",
      description: "You've spent thousands on courses that promise fluency but deliver disappointment. Generic programs that don't connect you to the real Deaf community."
    },
    {
      icon: <Users className="h-8 w-8 text-destructive" />,
      title: "Cultural Confusion",
      description: "Without understanding Deaf culture, you accidentally offend or misunderstand. True communication requires cultural immersion, not just hand movements."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Are You Tired of 
            <span className="block text-destructive">Sign Language Struggles?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            If you've been frustrated by ineffective sign language methods, you're not alone. 
            Here's what most schools won't tell you about why students fail...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-destructive mb-4">
              The Hidden Truth About Sign Language Education
            </h3>
            <p className="text-lg text-foreground">
              <strong>95% of sign language schools use hearing instructors</strong> who learned KSL as a second language. 
              They teach you <em>about</em> sign language, not <em>in</em> sign language. 
              It's like learning to swim from someone who's never been in water.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;