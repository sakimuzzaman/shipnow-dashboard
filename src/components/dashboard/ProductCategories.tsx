import { MoreHorizontal } from "lucide-react";

import { productCategories } from "@/data/dashboard";

import ProductCategoryDistribution from "./ProductCategoryDistribution";
import ProductCategoryItem from "./ProductCategoryItem";

export default function ProductCategories() {
  const totalProducts = productCategories.reduce(
    (total, category) => total + category.totalProducts,
    0
  );

  return (
    <section
      className="
        h-[443px]
        w-[370px]
        rounded-[12px]
        bg-[#FEFEFE]
        p-[16px]
      "
    >
      {/* Header */}
      <header className="flex h-[28px] w-full items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#34363A]">
          Product Categories
        </h2>

        <button
          type="button"
          aria-label="Product category options"
          className="
            flex
            h-[22px]
            w-[22px]
            items-center
            justify-center
            rounded-[6px]
            bg-[#F5F5F6]
            text-[#8A8D94]
            transition-colors
            hover:bg-[#ECECEF]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#7563CF]
          "
        >
          <MoreHorizontal
            size={13}
            strokeWidth={1.6}
          />
        </button>
      </header>

      {/* Body */}
      <div className="mt-[16px] flex h-[367px] flex-col gap-[24px]">
        {/* Total products */}
        <div className="flex h-[26px] w-full items-center justify-between">
          <span className="text-[14px] font-normal leading-[125%] text-[#757575]">
            Total Products
          </span>

          <strong className="h-[26px] w-[64px] text-right text-[24px] font-bold leading-[110%] text-[#333333]">
            {totalProducts.toLocaleString()}
          </strong>
        </div>

        {/* Category distribution */}
        <ProductCategoryDistribution
          categories={productCategories}
        />

        {/* Category list */}
        <div
          className="
            flex
            h-[240px]
            flex-col
            gap-[16px]
            py-[8px]
          "
        >
          {productCategories.map((category) => (
            <ProductCategoryItem
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}