import { Leaf, Search, HardHat, Building, ClipboardCheck, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Acquisition & Due Diligence",
      description:
        "Strategic land identification and rigorous legal verification to ensure clear titles, regulatory compliance, and high appreciation potential. Every property undergoes comprehensive soil testing, water analysis, and title scrutiny before acquisition.",
      features: [
        "Title verification & legal clearance",
        "Soil & water quality testing",
        "Market analysis & appreciation forecasting",
        "Regulatory compliance check",
      ],
    },
    {
      icon: HardHat,
      title: "Development",
      description:
        "End-to-end development services from concept to completion. We create residential, commercial, and plotted land projects with modern infrastructure, sustainable design principles, and future-ready amenities.",
      features: [
        "Master planning & design",
        "Infrastructure development",
        "Quality construction management",
        "Sustainable & eco-friendly practices",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description:
        "Professional project management ensuring timely delivery, cost efficiency, and quality control. Our experienced team oversees every aspect from ground-breaking to final handover.",
      features: [
        "Timeline management",
        "Budget control & transparency",
        "Quality assurance",
        "Regular progress updates",
      ],
    },
    {
      icon: Building,
      title: "Property Management",
      description:
        "Comprehensive property management services for completed projects including maintenance, facility management, and tenant coordination to protect your investment's long-term value.",
      features: [
        "Facility maintenance",
        "Security management",
        "Tenant relations",
        "Asset value protection",
      ],
    },
    {
      icon: Handshake,
      title: "Advisory Services",
      description:
        "Expert guidance for investors and landowners seeking to maximize returns in the real estate market. We provide strategic advice on investment opportunities, market trends, and partnership structures.",
      features: [
        "Investment strategy consulting",
        "Market intelligence",
        "Joint venture structuring",
        "Portfolio optimization",
      ],
    },
    {
      icon: Leaf,
      title: "Sustainable Development",
      description:
        "Committed to environmentally responsible development practices including rainwater harvesting, solar integration, waste management systems, and green landscaping to create sustainable communities.",
      features: [
        "Rainwater harvesting systems",
        "Solar energy integration",
        "Waste management planning",
        "Green landscaping & open spaces",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Comprehensive real estate solutions from acquisition to management, backed by decades
            of expertise and unwavering commitment to transparency and quality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <span className="text-primary mr-2 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Our Development Process
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            A transparent, systematic approach to delivering exceptional real estate projects
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Land Identification & Analysis",
                  description: "Strategic selection based on growth potential, connectivity, and market demand",
                },
                {
                  step: "02",
                  title: "Legal Due Diligence",
                  description: "Comprehensive title verification, regulatory compliance, and risk assessment",
                },
                {
                  step: "03",
                  title: "Master Planning & Design",
                  description: "Thoughtful layout design with modern amenities and sustainable features",
                },
                {
                  step: "04",
                  title: "Development & Construction",
                  description: "Quality construction with regular monitoring and transparent updates",
                },
                {
                  step: "05",
                  title: "Marketing & Sales",
                  description: "Honest pricing, clear documentation, and customer-centric approach",
                },
                {
                  step: "06",
                  title: "Handover & Support",
                  description: "Smooth handover process with ongoing support and property management",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're an investor, landowner, or homebuyer, our team is ready to guide you
            through every step of your real estate journey.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
