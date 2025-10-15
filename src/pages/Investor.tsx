import { TrendingUp, Shield, FileCheck, Users, Download, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Investor = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "High-Growth Potential",
      description:
        "Strategic property selection in rapidly appreciating corridors with proven track record of 20-40% annual returns.",
    },
    {
      icon: Shield,
      title: "Legal Security",
      description:
        "Every project undergoes rigorous due diligence ensuring clear titles, regulatory compliance, and zero legal hassles.",
    },
    {
      icon: FileCheck,
      title: "Transparent Documentation",
      description:
        "Complete transparency in all paperwork, pricing, and project timelines. All documents verified and shared upfront.",
    },
    {
      icon: Users,
      title: "Fair Partnership Model",
      description:
        "Win-win joint venture structures designed for mutual benefit and long-term partnerships.",
    },
  ];

  const caseStudies = [
    {
      title: "Horizon Greens - Plot Development",
      investment: "₹5 Cr Joint Venture",
      returns: "38% ROI in 18 months",
      details:
        "25-acre plotted land development near upcoming highway. All plots sold within 12 months of launch.",
    },
    {
      title: "Pratish Residency - Residential",
      investment: "₹12 Cr Development",
      returns: "45% profit margin",
      details:
        "Premium 2 & 3 BHK apartments. 80% pre-sold during construction phase with excellent appreciation.",
    },
    {
      title: "Commerce Square - Commercial",
      investment: "₹8 Cr Investment",
      returns: "7% annual rental yield",
      details:
        "Commercial complex in prime business district delivering consistent rental income and capital appreciation.",
    },
  ];

  const process = [
    "Initial Discussion & Investment Goals",
    "Site Visit & Project Presentation",
    "Legal Document Review",
    "Investment Agreement Signing",
    "Project Execution & Regular Updates",
    "Returns Distribution",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Partner With Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
            Join successful investors who trust Sree Pratish Infra for transparent, high-return real
            estate opportunities with complete legal security.
          </p>
          <Button asChild size="lg" className="text-lg px-8 animate-scale-in">
            <Link to="/contact">Download Investment Deck</Link>
          </Button>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Why Invest With Us
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Combining strategic foresight with rigorous execution for exceptional returns
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <highlight.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Success Stories
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Real results from our investor partnerships
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={study.title}
                className="hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold mb-4">{study.title}</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Investment</div>
                      <div className="text-lg font-bold text-primary">{study.investment}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Returns</div>
                      <div className="text-lg font-bold text-green-600">{study.returns}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{study.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Diligence Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
              Our Legal Diligence Process
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12">
              Every project undergoes exhaustive legal verification to ensure investor safety
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Title deed verification (30-year chain)",
                "Encumbrance certificate scrutiny",
                "Revenue records validation",
                "Court case verification",
                "Land conversion & zoning checks",
                "Regulatory approvals verification",
                "Soil & water testing reports",
                "Independent legal opinion",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Investment Process
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Simple, transparent steps from inquiry to returns
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg font-semibold">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Start Your Investment Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our investor relations team to explore current opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="#" download>
                <Download className="mr-2" size={20} />
                Download Investment Deck
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investor;
