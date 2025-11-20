import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const CONTACT_PHONE = "7993737373";
  const CONTACT_ADDRESS =
    "1-10-4-16/1, Aslimetta Junction, Gnanapuram, Visakhapatnam, Andhra Pradesh, 530004";
  const CONTACT_EMAIL = "info@sreepratishinfra.com";

  // Google Maps embed via address query (will center based on the address)
  const mapsQuery = encodeURIComponent(CONTACT_ADDRESS);
  const mapsSrc = `https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.enquiryType ||
      !formData.message
    ) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // In production, replace with real API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Message Sent Successfully!",
        description: "Our team will get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiryType: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: CONTACT_ADDRESS,
    },
    {
      icon: Phone,
      title: "Phone",
      content: `+91 ${CONTACT_PHONE}`,
    },
    {
      icon: Mail,
      title: "Email",
      content: CONTACT_EMAIL,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  // JSON-LD structured data for SEO (LocalBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sree Pratish Infra LLP",
    telephone: `+91${CONTACT_PHONE}`,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1-10-4-16/1, Aslimetta Junction, Gnanapuram",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      postalCode: "530004",
      addressCountry: "IN",
    },
    url: typeof window !== "undefined" ? window.location.origin : "https://your-website-domain.com",
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Have questions about our projects or want to explore investment opportunities? Our team is
            here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground break-words">
                    {info.title === "Phone" ? (
                      <a href={`tel:+91${CONTACT_PHONE}`} className="text-inherit">
                        {info.content}
                      </a>
                    ) : info.title === "Email" ? (
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-inherit">
                        {info.content}
                      </a>
                    ) : (
                      info.content
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-medium mb-2">
                    Type of Enquiry *
                  </label>
                  <Select
                    value={formData.enquiryType}
                    onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
                    required
                  >
                    <SelectTrigger id="enquiryType">
                      <SelectValue placeholder="Select enquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales / Buy Property</SelectItem>
                      <SelectItem value="investor">Investor / Joint Venture</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Visit Our Office</h2>

              {/* Map iframe */}
              <div className="bg-secondary/20 rounded-lg h-96 mb-6 overflow-hidden">
                <iframe
                  title="Sree Pratish Infra LLP Office Location"
                  src={mapsSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-4">Download Company Profile</h3>
                  <p className="text-muted-foreground mb-4">
                    Get detailed information about our company, services, and ongoing projects.
                  </p>
                  <Button variant="outline" className="w-full">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What types of properties do you offer?",
                a: "We offer residential apartments, commercial spaces, and plotted land developments across Visakhapatnam.",
              },
              {
                q: "How do you ensure legal security?",
                a: "Every project undergoes rigorous due diligence including 30-year title verification, encumbrance checks, and regulatory compliance validation.",
              },
              {
                q: "What is the typical ROI on investments?",
                a: "Our projects have historically delivered 20-40% annual returns, though actual returns vary based on project type and market conditions.",
              },
              {
                q: "Do you offer financing options?",
                a: "Yes, we work with leading banks and financial institutions to facilitate home loans and investment financing.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
