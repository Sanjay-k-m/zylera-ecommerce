"use client";
import { CATEGORIES_QUERYResult, Product } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import NoProductsAvailable from "./NoProductsAvailable";
import { AnimatePresence,motion } from "motion/react";
import ProductCard from "./ProductCard";

interface Props {
  categories: CATEGORIES_QUERYResult;
  slug: string;
}
const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = `*[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)`;
      const response = await client.fetch(query, { categorySlug });
      setProducts(await response);
      console.log("🚀 ~ fetchProducts ~ response:", response)
    } catch (error) {
      console.log("Product fetching Error...", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]);

  return (
    <div className="py-5 flex flex-col md:flex-row items-start gap-5">
      <div className="flex flex-col border md:min-w-40">
        {categories.map((item, index) => (
          <Button
            onClick={() => setCurrentSlug(item?.slug?.current as string)}
            key={index}
            className={`bg-transparent border-0 rounded-none text-custom-darkColor shadow-none hover:bg-custom-darkColor hover:opacity-80 hover:text-white border-b last:border-b-0 ${item?.slug?.current === currentSlug && "bg-custom-darkColor text-white border-custom-darkColor"}`}
          >
            {item?.title}
          </Button>
        ))}
      </div>
      <div className="w-full">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-0">
          <div className=" flex items-center space-x-2 text-blue-600">
            <Loader2 className=" animate-spin " />
            <span className="text-lg font-semibold">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  w-full">
              {products?.map((product: Product) => (
                <AnimatePresence key={product._id}>
                  <motion.div layout initial={{opacity:0.2}} animate={{opacity:1}} exit={{opacity:0}}>
                    <ProductCard product={product} />
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>
          ) : (
            <NoProductsAvailable  selectedTab={currentSlug} className="mt-0"/>
          )}
        </>
      )}
      </div>
    </div>
  );
};

export default CategoryProducts;
