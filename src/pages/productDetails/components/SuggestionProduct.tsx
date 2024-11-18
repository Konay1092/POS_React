import React from "react";
import { products } from "@/pages/home/products";
import ProductCard from "../../../components/shared/ProductCard";

const SuggestionProduct = () => {
  return (
    <div className="my-4">
      <h4 className="mb-4 font-black text-xl">You May also like</h4>
      <div className="flex overflow-x-scroll no-scrollbar gap-4">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            tags={product.tags}
            desc={product.desc}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestionProduct;
