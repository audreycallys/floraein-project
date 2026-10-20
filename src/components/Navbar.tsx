function Navbar() {
  return (
    <header className="border-b border-border bg-white">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-[0.2em] text-foreground">
            FLORAEIN
          </span>

          <span className="hidden font-heading text-lg italic text-muted sm:block">
            Make every moment bloom.
          </span>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 text-sm text-foreground"
        >
          <span>Cart</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
            0
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
