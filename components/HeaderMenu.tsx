"use client";
import { CATEGORIES_QUERYResult } from "@/sanity.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = ({ categories }: { categories: CATEGORIES_QUERYResult }) => {
  const pathname = usePathname();
  // console.log("🚀 ~ HeaderMenu ~ pathname:", pathname);

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
      <Link
        href="/"
        className={`hover:text-custom-darkColor hoverEffect relative group ${
          pathname === "/" && "text-custom-darkColor"
        }`}
      >
        Home
        <span
          className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5  bg-custom-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${
            pathname === "/" && "w-1/2 left-0"
          }`}
        />
        <span
          className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5  bg-custom-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${
            pathname === "/" && "w-1/2 right-0"
          }`}
        />
      </Link>
      {categories?.map((category, index) => {
        return (
          <Link
            key={index}
            href={`/category/${category?.slug?.current}`}
            className={`hover:text-custom-darkColor hoverEffect relative group ${
              pathname === `/category/${category?.slug?.current}` &&
              "text-custom-darkColor"
            }`}
          >
            {category?.title}
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5  bg-custom-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${
                pathname === `/category/${category?.slug?.current}` &&
                "w-1/2 left-0"
              }`}
            />
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5  bg-custom-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${
                pathname === `/category/${category?.slug?.current}` &&
                "w-1/2 right-0"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
