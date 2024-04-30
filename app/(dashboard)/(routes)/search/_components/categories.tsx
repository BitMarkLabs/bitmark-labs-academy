"use client";

import { Category } from "@prisma/client";
import {
  FaBitcoin,
  FaEthereum,
} from "react-icons/fa6";
import { SiSolana, SiCardano } from "react-icons/si";
import { IconType } from "react-icons";
import { RiNftFill } from "react-icons/ri";
import { FcSalesPerformance, FcMultipleDevices }from "react-icons/fc"
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Bitcoin": FaBitcoin,
  "NFTs": RiNftFill,
  "Solana": SiSolana,
  "DEX": FcSalesPerformance,
  "Wallets": FcMultipleDevices,
  "Ethereum": FaEthereum,
  "Cardano": SiCardano,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}