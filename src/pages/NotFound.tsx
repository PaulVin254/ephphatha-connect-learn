import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    window.history.length > 1 ? navigate(-1) : navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-bounce">
              <Search className="h-16 w-16 md:h-20 md:w-20 text-primary" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off. Let's get
            you back to learning sign language!
          </p>
          <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 border border-border">
            <span className="font-mono">Error: {location.pathname}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            onClick={handleGoHome}
            size="lg"
            className="w-full sm:w-auto gap-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Home className="h-5 w-5" />
            Go to Homepage
          </Button>
          <Button
            onClick={handleGoBack}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto gap-2 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-sm text-muted-foreground mb-4">
            Or explore these popular sections:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                navigate("/");
                setTimeout(
                  () =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  100
                );
              }}
              className="text-xs"
            >
              About Us
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                navigate("/");
                setTimeout(
                  () =>
                    document
                      .getElementById("courses")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  100
                );
              }}
              className="text-xs"
            >
              Courses
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                navigate("/");
                setTimeout(
                  () =>
                    document
                      .getElementById("free-classes")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  100
                );
              }}
              className="text-xs"
            >
              Free Classes
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
};

export default NotFound;
