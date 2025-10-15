import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Building2, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";
import homesImage from "@/assets/homes-icon.jpg";
import hubsImage from "@/assets/hubs-icon.jpg";
import horizonsImage from "@/assets/horizons-icon.jpg";

const Home = () => {
  const [counters, setCounters] = useState({ projects: 0, acres: 0, investors: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const targets = { projects: 25, acres: 500, investors: 1200 };

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounters({
        projects: Math.floor(targets.projects * progress),
        acres: Math.floor(targets.acres * progress),
        investors: Math.floor(targets.investors * progress),
      });

      if (currentStep >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  const spotlights = [
    {
      title: "Homes",
      subtitle: "Premium Apartments For Modern Living",
      description: "High-rise apartments and independent villas crafted with modern amenities and thoughtful design.",
      image: homesImage,
      link: "/projects?category=Homes",
    },
    {
      title: "Hubs",
      subtitle: "High-Yield Commercial Assets",
      description: "Strategic commercial properties in prime locations offering excellent rental returns.",
      image: hubsImage,
      link: "/projects?category=Hubs",
    },
    {
      title: "Horizons",
      subtitle: "Plotted Land That Secures The Future",
      description: "Legally vetted land in high-growth corridors with clear titles and strong appreciation potential.",
      image: horizonsImage,
      link: "/projects?category=Horizons",
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
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(155, 52, 17, 0.7), rgba(155, 52, 17, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-4 animate-fade-in">
            Sree Pratish Infra LLP
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 font-medium mb-8 animate-slide-up">
            Homes · Hubs · Horizons
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 animate-fade-in">
            A Visakhapatnam-based real estate development and advisory firm with a sharp focus on
            high-growth opportunities, legal security, and sustainable value creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/projects">
                Our Projects <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-serif font-bold text-primary mb-2">
                {counters.projects}+
              </div>
              <p className="text-lg text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-serif font-bold text-primary mb-2">
                {counters.acres}+
              </div>
              <p className="text-lg text-muted-foreground">Acres Acquired</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-5xl font-serif font-bold text-primary mb-2">
                {counters.investors}+
              </div>
              <p className="text-lg text-muted-foreground">Happy Investors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Our Focus Areas
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            We specialize in three key segments of real estate development
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlights.map((spotlight, index) => (
              <Card
                key={spotlight.title}
                className="hover-lift overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={spotlight.image}
                    alt={spotlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-3xl font-serif font-bold text-white mb-1">
                      {spotlight.title}
                    </h3>
                    <p className="text-sm text-white/90">{spotlight.subtitle}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{spotlight.description}</p>
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link to={spotlight.link}>
                      Explore {spotlight.title} <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Our Promise to You
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustPoints.map((point, index) => (
              <div
                key={point.text}
                className="flex flex-col items-center text-center p-4 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <point.icon className="text-primary" size={28} />
                </div>
                <p className="font-semibold text-sm">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Award className="mx-auto mb-6 text-secondary" size={64} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Invest in Your Future?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied investors who trust Sree Pratish Infra for transparent,
            high-growth real estate opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/projects">Browse Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-primary-foreground text-primary-foreground">
              <Link to="/investor">Investor Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
