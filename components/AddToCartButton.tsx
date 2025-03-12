import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  console.log("🚀 ~ AddToCartButton ~ product:", product)
  
  const isOutOfStock = product?.stock === 0;
  return (
    <div>
      <Button
        disabled={isOutOfStock}
        className={cn(
          `w-full bg-transparent text-custom-darkColor shadow-none border border-custom-darkColor/30 font-semibold tracking-wide hover:text-white hoverEffect`
        ,className)}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
