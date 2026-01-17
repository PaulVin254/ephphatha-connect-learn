import React from "react";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextRotate } from "@/components/ui/text-rotate";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import FloatingImages from "@/components/ui/floating-images";
import { cn } from "@/lib/utils";
import { scrollToSection, scrollToFreeClassesForm } from "@/lib/scroll-utils";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

// Former students data
const formerStudents = [
  {
    id: 1,
    name: "Evans Morekerwa",
    designation: "KSL Interpreter",
    image: "/former-student-evans.jpg",
  },
  {
    id: 2,
    name: "Fred Otieno",
    designation: "Community Leader",
    image: "/former-student-fred.jpg",
  },
  {
    id: 3,
    name: "Marion Chudu",
    designation: "KSL Interpreter",
    image: "/former-student-marion.jpg",
  },
];

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section id="home">
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring" as const,
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />
            <div className="mx-auto max-w-7xl px-6">
              {/* Floating Images */}
              <FloatingImages />

              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0 relative z-10">
                <AnimatedGroup variants={transitionVariants}>
                  <a
                    href="#link"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      Try 3 classes FREE
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </a>

                  <h1 className="mt-8 max-w-4xl mx-auto text-balance text-4xl md:text-5xl lg:text-6xl lg:mt-16">
                    Learn Kenyan{" "}
                    <span className="inline-block lg:hidden">🇰🇪</span> Sign
                    Language{" "}
                    <span className="inline-block">
                      <TextRotate
                        words={["Faster", "Better", "Smarter"]}
                        className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"
                      />
                    </span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-2xl text-balance text-base md:text-lg leading-relaxed text-muted-foreground">
                    Learn from authentic instructors in the heart of Woodley's
                    thriving Deaf community. Stop guessing, start signing with
                    confidence.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[14px] border p-0.5"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl px-5 text-base"
                      onClick={scrollToFreeClassesForm}
                    >
                      <span className="text-nowrap">
                        Start 3 FREE Classes Today
                      </span>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <a
                      href="https://aojlbhvjvoxofdzzjrud.supabase.co/storage/v1/object/public/Learn%20Kenyan%20Sign%20Language%20in%201%20hour/Learn%20Kenyan%20Sign%20Language%20in%201%20hour%20(FREE).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-nowrap">View Class Schedule</span>
                    </a>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="/sign-language-students.jpg"
                    alt="Sign language students learning"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="/sign-language-students.jpg"
                    alt="Sign language students learning"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="relative m-auto max-w-5xl px-6">
            <div className="mx-auto mt-12 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-sm font-medium text-muted-foreground mb-6">
                  Join our successful graduates who are now fluent in Kenyan
                  Sign Language
                </h3>
                <AnimatedTooltip
                  items={formerStudents}
                  className="justify-center"
                />
                <p className="text-sm text-muted-foreground/80 mt-6">
                  ✨ No payment required • 90-Day fluency guarantee • Join the
                  first 10 students this month
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Contact", href: "#free-classes" },
];

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith("#")) {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setMenuState(false); // Close mobile menu after clicking
  };
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2 group"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-5xl rounded-2xl border backdrop-blur-lg lg:px-6",
          )}
        >
          <div
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4",
              isScrolled && "lg:gap-4",
            )}
          >
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul
                className={cn(
                  "flex gap-8 text-sm transition-all duration-300",
                  isScrolled && "gap-6",
                )}
              >
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleSmoothScroll(item.href)}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150 cursor-pointer"
                    >
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleSmoothScroll(item.href)}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150 w-full text-left"
                      >
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Call us:</p>
                  <a
                    href="tel:++254706241832"
                    className="text-foreground font-medium hover:text-red-600 transition-colors"
                  >
                    +254 706 241 832
                  </a>
                </div>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:items-center lg:flex-row lg:space-y-0">
                <div
                  className={cn(
                    "hidden lg:block text-sm text-muted-foreground mr-4 transition-all duration-300",
                    isScrolled && "lg:hidden",
                  )}
                >
                  <a
                    href="tel:+254706241832"
                    className="hover:text-red-600 transition-colors"
                  >
                    📞 +254 706 241 832
                  </a>
                </div>
                <Button
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={scrollToFreeClassesForm}
                >
                  <span>Get 3 Free Classes</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <img
        src="/ephphatha-logo.svg"
        alt="Ephphatha Sign Language School"
        className="h-8 w-auto"
      />
      <span className="text-xl font-semibold text-foreground">Ephphatha</span>
    </div>
  );
};
