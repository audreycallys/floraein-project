import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />

        <section
          id="flowers"
          className="mx-auto max-w-6xl border-t border-border px-6 py-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Selection
          </p>

          <h2 className="mt-3 font-heading text-5xl text-foreground">
            Our flowers
          </h2>

          <p className="mt-3 text-sm text-muted">Find the perfect bouquet.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
