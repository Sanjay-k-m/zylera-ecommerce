import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ListOrdered } from "lucide-react";
import { getAllCategories } from "@/sanity/helpers/queries";

const Header = async () => {
  const user = await currentUser();
  console.log("🚀 ~ Header ~ user:", user);
  const categories = await getAllCategories();
  console.log("🚀 ~ Header ~ categories:", categories)
  
  return (
    <header className=" border-b  border-b-gray-400 py-4 sticky top-0 z-50 bg-white">
      <Container className="flex items-center justify-between gap-7 text-custom-lightColor">
        <HeaderMenu  categories={categories}/>
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu categories={categories}/> <Logo className="">Zylera </Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className="group relative">
                <ListOrdered className="w-5 h-5 group-hover:text-custom-darkColor hoverEffect" />
                <span className="absolute -top-1 -right-1 bg-custom-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                  0
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-custom-darkColor hoverEffect ">
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
