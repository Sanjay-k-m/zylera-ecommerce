import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className?: string;
}
const QuantityButton = ({ product, className }: Props) => {
  const itemCount = 4;
  return (
    <div
      className={cn(
        `flex items-center
     justify-center gap-1 text-base`,
        className
      )}
    >
      <Button
        // disabled={itemCount === 0}
        variant={"outline"}
        size={"icon"}
        className="size-6"
      >
        <Minus />
      </Button>
      <span className="font-semibold w-8 text-center text-custom-darkColor pb-1">
        {itemCount}
      </span>
      <Button variant={"outline"} size={"icon"} className="size-6">
        <Plus />
      </Button>
    </div>
  );
};

export default QuantityButton;
