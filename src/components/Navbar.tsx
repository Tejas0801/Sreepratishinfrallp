import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoy from "../assets/logoy.png"; // light logo
import logor from "../assets/logor.png"; // dark logo

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

// Themes
const THEMES = {
  home: {
    allowTransparent: true,
    threshold: 40,
    logoTransparent: logoy,
    logoSolid: logor,
    linkTransparent: "text-white bg-black/10 hover:bg-black/20 backdrop-blur-sm",
    linkSolid: "text-foreground hover:text-primary hover:bg-secondary/30",
    headerSolid: "bg-background/95 backdrop-blur-md shadow-md",
  },
  inner: {
    allowTransparent: false,
    threshold: 0,
    logoTransparent: logor,
    logoSolid: logor,
    linkTransparent: "text-foreground",
    linkSolid: "text-foreground hover:text-primary hover:bg-secondary/30",
    headerSolid: "bg-background/95 backdrop-blur-md shadow-md",
  },
};

const ROUTE_TO_THEME = [
  { match: (p) => p === "/", theme: "home" },
  { match: () => true, theme: "inner" },
];

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname || "/";

  const themeKey = useMemo(() => {
    const entry = ROUTE_TO_THEME.find((r) => r.match(pathname));
    return entry?.theme || "inner";
  }, [pathname]);

  const theme = THEMES[themeKey];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll logic
  useEffect(() => {
    if (!theme.allowTransparent) {
      setIsScrolled(true);
      return;
    }
    const onScroll = () => setIsScrolled(window.scrollY > theme.threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [theme]);

  const logoSrc =
    theme.allowTransparent && !isScrolled ? theme.logoTransparent : theme.logoSolid;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !theme.allowTransparent ? theme.headerSolid : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* 🔧 Navbar height tuned so logo never clips */}
        <div className="flex items-center justify-between h-24 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full">
            <img
              src={logoSrc}
              alt="Sree Pratish Infra LLP"
              // 🔧 Logo height is slightly smaller than navbar height
              className="max-h-16 md:max-h-20 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              const base =
                isScrolled || !theme.allowTransparent
                  ? theme.linkSolid
                  : theme.linkTransparent;

              const activeClass = isActive
                ? isScrolled || !theme.allowTransparent
                  ? "text-primary bg-secondary/50"
                  : "text-white bg-black/20"
                : "";

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${base} ${activeClass}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild size="lg">
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled || !theme.allowTransparent ? "text-foreground" : "text-white"
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md rounded-b-xl py-4 px-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium ${
                    isActive
                      ? "text-primary bg-secondary/50"
                      : "text-foreground hover:bg-secondary/20"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3">
              <Button asChild className="w-full">
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
