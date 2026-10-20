import { ShoppingBag } from "lucide-react";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
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
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
        >
          <ShoppingBag size={17} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
