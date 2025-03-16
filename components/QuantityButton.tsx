"use client";
import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import useCartStore from "@/store";
import toast from "react-hot-toast";

interface Props {
  product: Product;
  className?: string;
}
const QuantityButton = ({ product, className }: Props) => {
  const { addItem, getItemCount, removeItem } = useCartStore();
  const itemCount = getItemCount(product._id);
  const isOutOfStock = product?.stock === 0;

  const handleRemoveItem = (product: Product) => () => {
    removeItem(product._id);
    if (itemCount > 1) {
      toast.success(`Quantity Decreased Successfully`, {
        duration: 2000,
      });
    } else {
      toast.success(`${product?.name?.substring(0, 12)} Removed Successfully`, {
        duration: 2000,
      });
    }
  };
  const handleAddItem = (product: Product) => () => {
    addItem(product);
    toast.success(`${product?.name?.substring(0, 12)} Added Successfully`, {
      duration: 2000,
    });
  };
  return (
    <div
      className={cn(
        `flex items-center
     justify-center gap-1 text-base`,
        className
      )}
    >
      <Button
        disabled={itemCount === 0 || isOutOfStock}
        onClick={handleRemoveItem(product)}
        variant={"outline"}
        size={"icon"}
        className="size-6"
      >
        <Minus />
      </Button>
      <span className="font-semibold w-8 text-center text-custom-darkColor pb-1">
        {itemCount}
      </span>
      <Button
        variant={"outline"}
        size={"icon"}
        className="size-6"
        onClick={handleAddItem(product)}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButton;
