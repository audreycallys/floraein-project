function About() {
  return (
    <section id="about" className="bg-[#FAFAFA] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          01 / Our Story
        </p>

        {/* About Content */}
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left - Heading */}
          <div>
            <h2 className="font-heading text-5xl font-medium leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Flowers made
              <br />
              with <span className="italic text-primary">love.</span>
            </h2>
          </div>

          {/* Right - Description */}
          <div className="max-w-lg lg:pt-3">
            <p className="text-sm leading-8 text-muted">
              At{" "}
              <span className="font-semibold tracking-wide text-primary">
                FLORAEIN
              </span>
              , we believe flowers are more than beautiful gifts. Each bouquet
              is a little expression of love, joy, and connection.
            </p>

            <p className="mt-5 text-sm leading-8 text-muted">
              Thoughtfully selected and beautifully arranged, our flowers are
              made to celebrate the moments that matter most.
            </p>

            <p className="mt-7 font-heading text-2xl italic text-primary">
              Make every moment bloom.
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 border-t border-border" />
      </div>
    </section>
  );
}

export default About;
