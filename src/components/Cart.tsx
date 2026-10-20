import { ShoppingBag, Trash2, X } from "lucide-react";
import type { Product } from "../data/products";

type CartProps = {
  cart: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: number) => void;
  onClear: () => void;
};

function Cart({ cart, isOpen, onClose, onRemove, onClear }: CartProps) {
  // Menghitung total harga
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-[visibility] duration-300 ${
        isOpen ? "visible" : "invisible delay-500"
      }`}
    >
      {/* Background Overlay */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <aside
        role="dialog"
        aria-modal={isOpen ? true : undefined}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
        inert={!isOpen}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-6">
          <div>
            <h2 className="font-heading text-3xl text-foreground">
              Your Cart ({cart.length})
            </h2>

            <p className="mt-1 text-xs text-muted">Your selected bouquets</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Clear All */}
            {cart.length > 0 && (
              <button
                type="button"
                onClick={onClear}
                className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary-light"
              >
                <Trash2 size={15} />
                Clear All
              </button>
            )}

            {/* Close Cart */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
              className="rounded-full p-2 transition-colors hover:bg-surface"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={42} strokeWidth={1.3} className="text-muted" />

              <h3 className="mt-4 font-medium text-foreground">
                Your cart is empty
              </h3>

              <p className="mt-2 text-sm text-muted">
                Explore our flowers and find your favorite bouquet.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 border-b border-border pb-5"
                >
                  {/* Product Image */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Information */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-foreground">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-primary">
                      Rp{product.price.toLocaleString("id-ID")}
                    </p>
                  </div>

                  {/* Remove Product */}
                  <button
                    type="button"
                    onClick={() => onRemove(product.id)}
                    aria-label={`Remove ${product.name}`}
                    className="rounded-full p-2 text-muted transition-colors hover:bg-primary-light hover:text-primary"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="border-t border-border px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Subtotal
              </span>

              <span className="text-lg font-semibold text-primary">
                Rp{totalPrice.toLocaleString("id-ID")}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-full border border-border bg-white px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Cart;
