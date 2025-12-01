import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Building2,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";
import homesImage from "@/assets/homes-icon.jpg";
import hubsImage from "@/assets/nivo1.png";
import horizonsImage from "@/assets/horizons-icon.jpg";

const Home = () => {
  // counters state
  const [counters, setCounters] = useState({
    projects: 0,
    acres: 0,
    investors: 0,
  });

  // refs
  const countersRef = useRef<HTMLElement | null>(null);
  const hasCounted = useRef(false);

  // target values
  const TARGETS = { projects: 25, acres: 500, investors: 1200 };

  // animate counters (progress-based)
  const runCounters = (duration = 1500, steps = 60) => {
    if (hasCounted.current) return;
    hasCounted.current = true;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = Math.min(1, step / steps);
      setCounters({
        projects: Math.floor(TARGETS.projects * progress),
        acres: Math.floor(TARGETS.acres * progress),
        investors: Math.floor(TARGETS.investors * progress),
      });
      if (progress >= 1) clearInterval(interval);
    }, duration / steps);
  };

  // Observe counters section, start animation when visible
  useEffect(() => {
    if (!countersRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Respect reduce motion: set final values immediately
      setCounters(TARGETS);
      hasCounted.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) runCounters();
        });
      },
      { root: null, threshold: 0.4 }
    );

    observer.observe(countersRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // spotlights & trust points
  const spotlights = [
    {
      title: "Homes",
      subtitle: "Premium Apartments For Modern Living",
      description:
        "High-rise apartments and independent villas crafted with modern amenities and thoughtful design.",
      image: homesImage,
      link: "/projects?category=Homes",
      alt: "Rendering of premium residential apartments",
    },
    {
      title: "Hubs",
      subtitle: "High-Yield Commercial Assets",
      description:
        "Strategic commercial properties in prime locations offering excellent rental returns.",
      image: hubsImage,
      link: "/projects?category=Hubs",
      alt: "Commercial building exterior with glass facade",
    },
    {
      title: "Horizons",
      subtitle: "Plotted Land That Secures The Future",
      description:
        "Legally vetted land in high-growth corridors with clear titles and strong appreciation potential.",
      image: horizonsImage,
      link: "/projects?category=Horizons",
      alt: "Open plotted land showing development layout",
    },
  ];

  const trustPoints = [
    { icon: CheckCircle2, text: "Zero Hidden Costs" },
    { icon: Shield, text: "Legal Peace of Mind" },
    { icon: TrendingUp, text: "High-Growth Selection" },
    { icon: Clock, text: "End-to-End Transparency" },
    { icon: Building2, text: "Quality Infrastructure" },
    { icon: Users, text: "Win-Win Partnerships" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[88vh] min-h-[700px] flex items-center"
        aria-labelledby="hero-heading"
        role="region"
        aria-roledescription="hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.22)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 z-10 text-center">
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white leading-tight drop-shadow-md"
          >
            Sree Pratish Infra LLP
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-white/90 font-medium">
            Homes · Hubs · Horizons
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-white/80">
            A Visakhapatnam-based real estate development and advisory firm focused on legal
            diligence, transparent deals and thoughtfully developed assets that appreciate over time.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="px-8 py-3 text-lg flex items-center gap-3"
              aria-label="View projects"
            >
              <Link to="/projects">
                Browse Projects <ArrowRight size={18} className="inline-block" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg flex items-center gap-3 bg-white/10 hover:bg-white/20 border-white text-white"
              aria-label="Talk to sales"
            >
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>

          {/* subtle scroll hint */}
          <div className="mt-12 flex justify-center">
            <span className="inline-block animate-bounce text-white/80">Scroll to explore ↓</span>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
<section className="py-6 md:py-8 bg-secondary/10" aria-labelledby="strap-heading">
  <div className="container mx-auto px-4">
    <h2 id="strap-heading" className="sr-only">Company strapline</h2>

    <div className="flex flex-col items-center justify-center gap-0.5 text-center">
      <p className="m-0 text-xl md:text-2xl tracking-widest font-serif font-bold text-primary uppercase leading-tight">
        INTEGRITY IN VISION.
      </p>

      <p className="m-0 text-xl md:text-2xl tracking-widest font-serif font-bold text-primary uppercase leading-tight">
        EXCELLENCE IN EXECUTION.
      </p>
    </div>
  </div>
</section>




      {/* Spotlight Cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-3">
            Our Focus Areas
          </h2>
          <p className="text-center text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
            We specialize in three key segments of real estate development — curated for long-term
            value and legal clarity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlights.map((spotlight, index) => (
              <Card
                key={spotlight.title}
                className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                role="article"
                aria-labelledby={`spot-${index}-title`}
                style={{ willChange: "transform" }}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={spotlight.image}
                    alt={spotlight.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute left-4 bottom-4 right-4">
                    <h3
                      id={`spot-${index}-title`}
                      className="text-2xl md:text-3xl font-serif font-bold text-white"
                    >
                      {spotlight.title}
                    </h3>
                    <p className="text-sm text-white/90">{spotlight.subtitle}</p>
                  </div>
                </div>

                <CardContent className="p-5 md:p-6">
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {spotlight.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Button asChild variant="link" className="p-0 h-auto text-primary font-medium">
                      <Link
                        to={spotlight.link}
                        aria-label={`Explore ${spotlight.title}`}
                        className="inline-flex items-center gap-2"
                      >
                        Explore {spotlight.title} <ArrowRight size={16} />
                      </Link>
                    </Button>

                    <span className="text-sm text-muted-foreground">{/* optional meta */}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-secondary/40 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8">
            Our Promise to You
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.text}
                  className="flex flex-col items-center text-center p-4 bg-white/60 rounded-lg"
                  aria-hidden={false}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="text-primary" size={22} aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-sm">{point.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Award className="mx-auto mb-6 text-secondary" size={56} aria-hidden="true" />
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">
            Ready to Invest in Your Future?
          </h2>

          <p className="text-sm md:text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied investors who trust Sree Pratish Infra for transparent,
            high-growth real estate opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link to="/projects">Browse Projects</Link>
            </Button>
           <Button
  asChild
  size="lg"
  variant="secondary"
  className="px-8 py-3 text-sm flex items-center justify-center"
>
  <Link to="/investor">Investor Information</Link>
</Button>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
