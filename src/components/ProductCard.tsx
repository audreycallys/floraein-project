import { ShoppingBag, Check } from "lucide-react";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
  isAdded: boolean;
  onAddToCart: () => void;
};

function ProductCard({ product, isAdded, onAddToCart }: ProductCardProps) {
  return (
    <div className="group">
      {/* Product Image */}
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-5">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-foreground">
          {product.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-primary">
          Rp{product.price.toLocaleString("id-ID")}
        </p>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={onAddToCart}
          disabled={isAdded}
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
            isAdded
              ? "cursor-default bg-primary-light text-primary"
              : "bg-primary text-white hover:bg-primary-hover"
          }`}
        >
          {isAdded ? (
            <>
              <Check size={17} />
              Added
            </>
          ) : (
            <>
              <ShoppingBag size={17} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
