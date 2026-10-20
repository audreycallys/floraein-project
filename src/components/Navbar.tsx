import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";

type NavbarProps = {
  cartCount: number;
  onOpenCart: () => void;
};

function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <nav className="mx-auto grid h-20 max-w-7xl grid-cols-2 items-center px-6 md:grid-cols-3">
        {/* Brand */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 justify-self-start"
        >
          <img
            src="/images/logo.png"
            alt="FLORAEIN Logo"
            className="h-9 w-9 object-contain"
          />

          <span className="text-sm font-bold tracking-[0.15em] text-foreground">
            FLORAEIN
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-center gap-8 md:flex">
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
            className="whitespace-nowrap text-sm text-foreground transition-colors hover:text-primary"
          >
            About Us
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center justify-self-end gap-4">
          {/* Cart Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open cart with ${cartCount} items`}
            className="flex items-center gap-2"
          >
            <ShoppingBag size={20} strokeWidth={1.7} />

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-surface md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-white px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-5">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-left text-sm font-medium text-foreground hover:text-primary"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("flowers")}
              className="text-left text-sm font-medium text-foreground hover:text-primary"
            >
              Products
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="text-left text-sm font-medium text-foreground hover:text-primary"
            >
              About Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
