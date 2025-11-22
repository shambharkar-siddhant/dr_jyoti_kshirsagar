import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">DG</span>
              </div>
              <span className="font-heading font-semibold ttext-base sm:text-lg">DentalGlow</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" data-testid="link-nav-home">
              <Button
                variant={isActive("/") ? "secondary" : "ghost"}
                className="font-medium"
              >
                Home
              </Button>
            </Link>
            <Link href="/services" data-testid="link-nav-services">
              <Button
                variant={isActive("/services") ? "secondary" : "ghost"}
                className="font-medium"
              >
                Services
              </Button>
            </Link>
            <Link href="/about" data-testid="link-nav-about">
              <Button
                variant={isActive("/about") ? "secondary" : "ghost"}
                className="font-medium"
              >
                About
              </Button>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <a
              href="tel:+918149600848"
              data-testid="button-header-call"
            >
              <Button variant="outline" size="default">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
            <Link href="/book" data-testid="link-book">
              <Button variant="default" size="default">
                Book Appointment
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" data-testid="mobile-menu">
            <nav className="flex flex-col space-y-2">
              <Link href="/" data-testid="link-mobile-home">
                <Button
                  variant={isActive("/") ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Button>
              </Link>
              <Link href="/services" data-testid="link-mobile-services">
                <Button
                  variant={isActive("/services") ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Button>
              </Link>
              <Link href="/about" data-testid="link-mobile-about">
                <Button
                  variant={isActive("/about") ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Button>
              </Link>
              <div className="pt-2 space-y-2">
                <a
                  href="tel:+918149600848"
                  className="block"
                  data-testid="button-mobile-call"
                >
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <Link href="/book" data-testid="link-mobile-book">
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
