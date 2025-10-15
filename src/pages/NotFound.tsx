import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-secondary/30 to-background pt-20">
      <div className="text-center px-4 max-w-2xl">
        <div className="text-9xl font-serif font-bold text-primary/20 mb-4 animate-fade-in">
          404
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 animate-slide-up">
          Page Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2" size={20} />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/projects">
              Browse Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
