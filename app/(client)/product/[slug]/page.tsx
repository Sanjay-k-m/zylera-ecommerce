import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import ProductCharacteristics from "@/components/ProductCharacteristics";
import { getProductBySlug } from "@/sanity/helpers/queries";
import {
  Box,
  BoxIcon,
  FileQuestion,
  Heart,
  ListOrderedIcon,
  Share,
} from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  console.log("🚀 ~ product:", product);
  console.log("🚀 ~ slug:", slug);

  if (!product) {
    return notFound();
  }
  return (
    <Container className="py-10 flex flex-col md:flex-row gap-10">
      {product?.images && <ImageView images={product?.images} />}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {product?.name}
          </h2>
          <PriceView
            price={product?.price}
            discount={product?.discount}
            className="font-bold text-lg"
          />
        </div>
        {product?.stock && (
          <>
            <p
              className={`bg-green-100 w-24 text-center text-green-600 text-sm py-2.5 font-semibold rounded-lg`}
            >
              In Stock
            </p>
            <p>{product?.description}</p>
            <div className="items-center flex gap-3 lg:gap-5">
              <AddToCartButton
                product={product}
                className="bg-custom-darkColor opacity-80 text-white hover:bg-custom-darkColor"
              />
              <button className=" border-2 border-custom-darkColor/30 text-custom-darkColor/60 px-2.5 py-1.5 rounded-md hover:text-custom-darkColor hover:border-custom-darkColor hoverEffect">
                <Heart className="size-5" />
              </button>
            </div>
            <ProductCharacteristics product={product} />
            <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2">
              <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
                <BoxIcon className="size-5" />
                <p>compare color</p>
              </div>{" "}
              <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
                <FileQuestion className="size-5" />
                <p>Ask a Question</p>
              </div>{" "}
              <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
                <ListOrderedIcon className="size-5" />
                <p>Delivery & Return</p>
              </div>{" "}
              <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
                <Share className="size-5" />
                <p>Share</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="border border-b-custom-darkBlue/20 text-center p-3 hover:border-custom-darkBlue rounded-md hoverEffect">
                <p className="text-base font-semibold text-custom-darkColor">
                  Free shipping{" "}
                </p>
                <p className="text-sm text-gray-500">
                  Free Shipping over order $120{" "}
                </p>
              </div>
              <div className="border border-b-custom-darkBlue/20 text-center p-3 hover:border-custom-darkBlue rounded-md hoverEffect">
                <p className="text-base font-semibold text-custom-darkColor">
                  Flexible Payment{" "}
                </p>
                <p className="text-sm text-gray-500">
                  Pay With Multiple Credit Card{" "}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default SingleProductPage;
