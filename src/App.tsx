import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import type { Product } from "./data/products";

function App() {
  // Menyimpan produk yang ditambahkan ke keranjang
  const [cart, setCart] = useState<Product[]>([]);

  // Menambahkan produk ke keranjang
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart;
      }

      return [...prevCart, product];
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cart.length} />

      <main>
        <Hero />

        {/* Product Section */}
        <section id="flowers" className="mx-auto max-w-7xl px-6 py-16">
          {/* Section Heading */}
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Our Selection
            </p>

            <h2 className="mt-3 font-heading text-5xl font-medium text-foreground sm:text-6xl">
              Our Flowers
            </h2>

            <p className="mt-3 text-sm text-muted">
              Find the perfect bouquet for every special moment.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isAdded={cart.some((item) => item.id === product.id)}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
