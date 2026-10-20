import { ArrowUpRight, ArrowRight } from "lucide-react";

function Hero() {
  const scrollToFlowers = () => {
    document.getElementById("flowers")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="mx-auto max-w-7xl px-6 py-8">
      <div className="rounded-3xl bg-[#F5F5F5] px-6 pt-20 pb-16 text-center sm:px-12 lg:pt-24">
        {/* Section Label */}
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          A Floral Studio for Every Season
        </p>

        {/* Heading */}
        <h1 className="font-heading text-6xl font-medium leading-[0.95] text-foreground sm:text-7xl lg:text-[86px]">
          Flowers for
          <br />
          <span className="italic text-primary">every moment.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-muted">
          Thoughtfully arranged blooms for the moments that matter most.
        </p>

        {/* Hero Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* Primary Button */}
          <button
            type="button"
            onClick={scrollToFlowers}
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-primary-hover"
          >
            Explore Flowers
            <ArrowUpRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          {/* Secondary Button */}
          <button
            type="button"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
          >
            About Us
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
