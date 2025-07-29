import {
  AlertTriangle,
  Clock,
  DollarSign,
  Users,
  UserX,
  BookOpen,
} from "lucide-react";

const ProblemAgitation = () => {
  const problems = [
    {
      icon: <UserX className="h-8 w-8 text-destructive" />,
      title: "Left in the Cold",
      description:
        "You've completed courses, only to find yourself with nowhere to practice, no community to belong to, and no ongoing support. Other schools teach the theory, then leave you feeling isolated and unsure of your next step.",
    },
    {
      icon: <Clock className="h-8 w-8 text-destructive" />,
      title: "Wasted Time",
      description:
        "Months of memorizing vocabulary from textbooks and YouTube videos, but you still can't hold a basic conversation with a Deaf person. Sound familiar?",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-destructive" />,
      title: "Money Down the Drain",
      description:
        "You've spent thousands on courses that promise fluency but deliver disappointment. Generic programs that don't connect you to the real Deaf community.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-destructive" />,
      title: "Stuck in Theory",
      description:
        "You know the individual signs, but when it comes to real-time, flowing conversations with a Deaf person, you freeze. Textbooks and isolated learning don't teach you how to respond naturally or understand nuances.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Are You Tired of
            <span className="block text-destructive">
              Sign Language Struggles?
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            If you've been frustrated by ineffective sign language methods,
            you're not alone. Here's what most schools won't tell you about why
            students fail...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{problem.icon}</div>
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
              You might be learning signs, but are you{" "}
              <strong>truly learning to communicate?</strong> Many programs
              focus on teaching vocabulary and grammar in isolation, like
              learning words from a dictionary. But without{" "}
              <em>real-world context</em>, <em>cultural immersion</em>, and{" "}
              <em>consistent interaction with native signers</em>, you're left
              with a collection of signs, not the ability to hold a flowing
              conversation. It's like knowing every word in a language but{" "}
              <strong>never truly speaking it</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;
