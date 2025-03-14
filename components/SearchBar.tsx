"use client";
import { Loader2, Search, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/sanity.types";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProduct([]);
      return;
    }
    setLoading(true);

    try {
      const query = `*[_type=="product" && name match $search] | order(name asc)`;
      const params = { search: `${search}*` };
      const response = await client.fetch(query, params);
      setProduct(await response);
    } catch (error) {
      console.log("Error Fetching Product : ", error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [search, fetchProducts]);

  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
        <Search className="size-5 hover:text-custom-darkColor hoverEffect" />
      </DialogTrigger>
      <DialogContent className="max-w-5xl md:min-w:4xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="mb-1">Product Search Bar</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Serach Product"
              className="flex-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className={`w-10 h-full absolute right-0 top-0 
               flex items-center rounded-tr-md rounded-br-md 
              justify-center hover:bg-custom-darkColor hover:text-white  
              hoverEffect  ${search ? "bg-custom-darkColor text-white" : "bg-gray-100"}`}
              type="submit"
            >
              <Search className="size-4 " />
            </button>
            {search && (
              <X
                onClick={() => setSearch("")}
                className="size-4 absolute  top-2.5 right-11 hover:text-red-600 hoverEffect"
              />
            )}
          </form>
        </DialogHeader>
        <div className="w-full h-full overflow-y-scroll border border-custom-darkColor/20 rounded-md">
          <div>
            {loading ? (
              <p className="flex items-center px-6 py-10 gap-1 text-center text-yellow-600 font-semibold">
                <Loader2 className="size-5 animate-spin" />
                Searching On Progress ...
              </p>
            ) : product.length ? (
              product.map((product: Product) => (
                <div
                  key={product?._id}
                  className="bg-white overflow-hidden border-b last:border-b-0"
                >
                  <div className="flex  items-center p-1">
                    <Link
                      href={`/product/${product?.slug?.current}`}
                      className="size-20 md:size-24 flex-shrink-0 border border-custom-darkColor/20 rounded-md overflow-hidden group "
                      onClick={() => setShowSearch(false)}
                    >
                      {product?.images && (
                        <Image
                          width={200}
                          height={200}
                          src={urlFor(product?.images[0]).url()}
                          alt={product?.name || "Product Image"}
                          className="object-cover w-full h-full group-hover:scale-110 hoverEffect"
                        />
                      )}
                    </Link>
                    <div className="flex-grow px-4 py-2">
                      <Link
                        href={`/product/${product?.slug?.current}`}
                        onClick={() => setShowSearch(false)}
                      >
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 line-clamp-1">
                          {product?.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {product?.intro}
                        </p>
                      </Link>
                      <PriceView
                        price={product?.price}
                        discount={product?.discount}
                        className="md:text-lg"
                      />
                    </div>
                    <div className="w-60 mt-1">
                      <AddToCartButton
                        product={product}
                        className="md:text-lg"
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 font-semibold tracking-wide">
                {search && !loading ? (
                  <p>
                    Nothing match With The Keyword{" "}
                    <span className="underline text-red-800">{search}</span>{" "}
                    Please try Something else
                  </p>
                ) : (
                  <p className="text-blue-400 flex items-center justify-center gap-1">
                    {" "}
                    <Search className="size-5" />
                    Search and Explore Your Products from zylera
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
