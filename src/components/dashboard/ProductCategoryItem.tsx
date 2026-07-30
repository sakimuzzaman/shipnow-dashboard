import type { ProductCategory } from "@/types/dashboard";

interface ProductCategoryItemProps {
  category: ProductCategory;
}

export default function ProductCategoryItem({
  category,
}: ProductCategoryItemProps) {
  return (
    <div className="flex h-[24px] w-full items-center justify-between">
      {/* Category name */}
      <div className="flex min-w-0 items-center gap-[8px]">
        <span
          aria-hidden="true"
          className="h-[10px] w-[10px] shrink-0 rounded-[6px]"
          style={{
            backgroundColor: category.color,
          }}
        />

        <span className="truncate text-[10px] font-medium text-[#55575C]">
          {category.name}
        </span>
      </div>

      {/* Product count and percentage */}
      <div
        className="
          flex
          h-[24px]
          w-[132px]
          shrink-0
          items-center
          justify-between
          gap-[8px]
          rounded-[4px]
          bg-[#F0F0F0]
          px-[2px]
          py-[4px]
        "
      >
        <span className="text-[8px] text-[#85878D]">
          {category.totalProducts} products
        </span>

        <span className="text-[8px] font-medium text-[#55575C]">
          {category.percentage}%
        </span>
      </div>
    </div>
  );
}