import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { products } from "./data/products";
import type { Product } from "./data/products";
import About from "./components/About";

function App() {
  // State keranjang
  const [cart, setCart] = useState<Product[]>([]);

  // State untuk membuka dan menutup panel
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Menambahkan produk ke keranjang
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const alreadyAdded = prevCart.some((item) => item.id === product.id);

      if (alreadyAdded) {
        return prevCart;
      }

      return [...prevCart, product];
    });
  };

  // Menghapus produk dari keranjang
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // Menghapus semua produk dari keranjang
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        {/* Hero */}
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
        
        {/* About Section */}
        <About />
      </main>

      {/* Shopping Cart */}
      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
        onClear={clearCart}
      />
    </div>
  );
}

export default App;
