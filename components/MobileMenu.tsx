"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { CATEGORIES_QUERYResult } from "@/sanity.types";

const MobileMenu = ({ categories }: { categories: CATEGORIES_QUERYResult }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-custom-darkColor hoverEffect md:hidden " />
      </button>
      <div className="md:hidden ">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          categories={categories}
        />
      </div>
    </>
  );
};

export default MobileMenu;
