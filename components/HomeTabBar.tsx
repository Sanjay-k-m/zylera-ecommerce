import { productType } from "@/constants";
import { Repeat } from "lucide-react";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}
const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold">
      <div className="flex items-center gap-1.5">
        {productType?.map((item, index) => (
          <button
            key={index}
            onClick={() => onTabSelect(item?.title)}
            className={`border border-custom-darkColor px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-custom-darkColor hover:text-white ${selectedTab === item?.title && "bg-custom-darkColor text-white"}`}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <button
        className={`border border-custom-darkColor p-2 rounded-full  hover:bg-custom-darkColor hover:text-white`}
      >
        <Repeat className="size-5" />
      </button>
    </div>
  );
};

export default HomeTabBar;
