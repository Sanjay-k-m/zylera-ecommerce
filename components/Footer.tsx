import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { categoriesData, quickLinksData } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo>zylera</Logo>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, eveniet.
            </p>
            <SocialMedia
              className="text-custom-darkColor opacity-60 "
              iconClassName="border-custom-darkColor opacity-60 hover:border-custom-darkColor  hover:text-custom-darkColor"
              tooltipClassName="bg-custom-darkColor text-white"
            />
          </div>
          <div>
            <h3 className="font-semibold text-custom-darkColor mb-4">
              Quick Links
            </h3>
            <div className=" flex flex-col gap-3">
              {quickLinksData?.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="text-gray-600 hover:text-custom-darkColor text-sm font-medium hoverEffect"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-custom-darkColor mb-4">
              Categories
            </h3>
            <div className=" flex flex-col gap-3">
              {categoriesData?.map((item, index) => (
                <Link
                  href={`/category${item.href}`}
                  key={index}
                  className="text-gray-600 hover:text-custom-darkColor text-sm font-medium hoverEffect"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-custom-darkColor mb-4">
              Newsletter
            </h3>
            <p
              className="text-gray-600 text-sm mb-4
            "
            >
              Subscribe to our newsletter for the latest fashion trends,
              promotions and offers
            </p>
            <form className=" space-y-3">
              <Input
                required
                className="w-full  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                type="email"
                placeholder="Enter your email"
              />
              <Button
                type="submit"
                className="w-full bg-gray-900 text-white
              px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
