import { Heart } from "lucide-react";

function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-6">
        {/* Footer Main */}
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="FLORAEIN Logo"
                className="h-9 w-9 object-contain"
              />

              <h2 className="text-sm font-bold tracking-[0.15em] text-foreground">
                FLORAEIN
              </h2>
            </div>

            <p className="mt-3 text-sm text-muted">Make every moment bloom.</p>
          </div>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap items-start gap-8">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("flowers")}
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              Products
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              About Us
            </button>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © 2026 FLORAEIN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
