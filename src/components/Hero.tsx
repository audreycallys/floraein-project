import { ArrowRight, ArrowUpRight } from "lucide-react";

function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const flowers = [
    { image: "flower-1.png", name: "Colorful Blooms" },
    { image: "flower-2.png", name: "Soft Petals" },
    { image: "flower-4.png", name: "Pastel Blue" },
    { image: "flower-5.png", name: "Spring Garden" },
  ];

  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-80px)] w-full flex-col overflow-hidden bg-white"
    >
      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 text-center sm:pt-16">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          A Floral Studio for Every Season
        </p>

        <h1 className="font-heading text-5xl font-medium leading-[1.05] text-foreground sm:text-7xl lg:text-[86px] lg:leading-[0.95]">
          Flowers for
          <br />
          <span className="italic text-primary">every moment.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-muted">
          Thoughtfully arranged blooms for the moments that matter most.
        </p>

        {/* Hero Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("flowers")}
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Explore Flowers
            <ArrowUpRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            About Us
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* Flower Showcase */}
      <div className="relative mt-7 pt-5 pb-8">
        {/* Background Arch */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[150%] -translate-x-1/2 translate-y-[150px] rounded-t-[50%] bg-plum sm:h-[360px] sm:w-[125%] sm:translate-y-[190px] lg:h-[520px] lg:w-[115%] lg:translate-y-[310px]"
        />

        {/* Flower Gallery */}
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-4 sm:gap-4 lg:flex lg:justify-center lg:gap-9 lg:translate-y-8">
          {flowers.map((flower) => (
            <div
              key={flower.image}
              className="group relative min-w-0 overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:w-[210px] lg:shrink-0"
            >
              <img
                src={`/images/flowers/${flower.image}`}
                alt={flower.name}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-5 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-left text-sm font-medium text-white">
                  {flower.name}
                </p>

                <p className="mt-1 text-left text-xs text-white/80">
                  Our Collection
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
