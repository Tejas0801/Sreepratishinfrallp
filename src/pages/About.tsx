import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Risk-Mitigated Investments",
      description:
        "We specialize in clear-title land with high appreciation potential, ensuring legal safety and hassle-free ownership.",
    },
    {
      icon: Award,
      title: "Smart & Scalable Projects",
      description:
        "From plotted developments to integrated housing solutions, we prioritize modern infrastructure, connectivity, and community-centric design.",
    },
    {
      icon: Users,
      title: "Investor-First Partnerships",
      description:
        "Our joint ventures and end-to-end execution model are tailored for predictable returns and shared success.",
    },
  ];

  const milestones = [
    { year: "2018", event: "Company Founded" },
    { year: "2019", event: "First Residential Project Completed" },
    { year: "2020", event: "Expanded to Commercial Developments" },
    { year: "2021", event: "500+ Acres Acquired" },
    { year: "2023", event: "1000+ Happy Investors Milestone" },
    { year: "2024", event: "Multiple Ongoing Premium Projects" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
              About Sree Pratish Infra
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
              Sree Pratish Infra LLP is a Visakhapatnam-based real estate development and advisory
              firm with a sharp focus on high-growth opportunities, legal security, and sustainable
              value creation. We don't just develop land—we transform it into trusted, high-yield
              assets through meticulous planning, transparent dealings, and future-ready
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To redefine real estate in India by becoming the most trusted name for
                  sustainable, high-return developments—where every project enriches lives and
                  secures futures.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Develop legally secure, strategically located projects with stable
                      appreciation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Innovate in design, planning, and execution for lasting value
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Operate with uncompromising transparency from acquisition to handover
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex items-center gap-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 flex-shrink-0">
                    <div className="text-3xl font-serif font-bold text-primary">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary rounded-full" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our experienced team brings decades of combined expertise in real estate development,
            legal compliance, and strategic planning.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Managing Partner", "Legal Head", "Project Manager", "Investor Relations"].map(
              (role, index) => (
                <div
                  key={role}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/40 mb-4" />
                  <p className="font-semibold">{role}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
