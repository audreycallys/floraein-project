import { ShoppingBag } from "lucide-react";

type NavbarProps = {
  cartCount: number;
};

function Navbar({ cartCount }: NavbarProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <nav className="mx-auto grid h-20 max-w-7xl grid-cols-3 items-center px-6">
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

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8">
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

        {/* Shopping Cart */}
        <div className="flex items-center gap-3 justify-self-end">
          <ShoppingBag size={19} strokeWidth={1.7} />

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
            {cartCount}
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
