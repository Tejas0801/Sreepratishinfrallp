import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Sree Pratish Infra</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Visakhapatnam-based real estate development firm focused on
              high-growth opportunities and legal security.
            </p>
            <p className="text-xs font-semibold mb-2">Homes · Hubs · Horizons</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm hover:text-secondary transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/investor"
                  className="text-sm hover:text-secondary transition-colors"
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm hover:text-secondary transition-colors"
                >
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Visakhapatnam, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">info@sreepratishinfra.com</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for latest projects and news.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-primary-foreground/80">
            &copy; 2024 Sree Pratish Infra LLP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-secondary transition-colors text-primary-foreground/80"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-secondary transition-colors text-primary-foreground/80"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
