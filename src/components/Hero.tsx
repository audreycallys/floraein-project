function Hero() {
  const scrollToFlowers = () => {
    document.getElementById("flowers")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-24">
      <div>
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Fresh Flowers Collection
        </p>

        <h1 className="font-heading text-6xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-7xl lg:text-[86px]">
          Beautiful
          <br />
          flowers,
          <br />
          <span className="italic text-primary">
            beautiful
            <br />
            moments.
          </span>
        </h1>

        <p className="mt-8 max-w-sm text-sm leading-7 text-muted">
          Discover thoughtfully arranged bouquets for every special occasion.
        </p>

        <button
          type="button"
          onClick={scrollToFlowers}
          className="mt-7 bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-primary-hover"
        >
          Explore Flowers ↗
        </button>
      </div>

      <div className="relative">
        <img
          src="/images/hero-flower.jpg"
          alt="Beautiful floral arrangement"
          className="h-[480px] w-full object-cover lg:h-[520px]"
        />

        <div className="absolute right-5 bottom-5 text-right font-heading text-base italic text-white drop-shadow-md">
          Seasonal arrangements
          <br />
          made with feeling
        </div>
      </div>
    </section>
  );
}

export default Hero;
s;
