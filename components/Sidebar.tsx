import React, { FC } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { headerData } from "@/constants";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { CATEGORIES_QUERYResult } from "@/sanity.types";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const Sidebar: FC<SidebarProps & { categories: CATEGORIES_QUERYResult }> = ({
  isOpen,
  onClose,
  categories,
}) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-gray-800/50 shadow-xl hoverEffect cursor-auto w-full ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-custom-darkColor text-white/90 h-full p-10 border-r-white flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">zylera</Logo>
          </button>
          <button className="hover:text-red-500 hoverEffect" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide ">
          {categories.map((category, index) => {
            return (
              <Link
                onClick={onClose}
                key={index}
                href={`/category/${category?.slug?.current}`}
                className={`text-gray-400 hover:text-white hoverEffect ${
                  pathname === category?.slug?.current && "text-white"
                }`}
              >
                {category?.title}
              </Link>
            );
          })}
        </div>
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default Sidebar;
