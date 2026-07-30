import type { ProductCategory } from "@/types/dashboard";

interface ProductCategoryDistributionProps {
  categories: ProductCategory[];
}

export default function ProductCategoryDistribution({
  categories,
}: ProductCategoryDistributionProps) {
  return (
    <div
      className="
        flex
        h-[53px]
        w-full
        gap-[4px]
        overflow-hidden
        rounded-[8px]
      "
      aria-label="Product category distribution"
    >
      {categories.map((category) => (
        <div
          key={category.id}
          title={`${category.name}: ${category.percentage}%`}
          className="h-full"
          style={{
            flexGrow: category.percentage,
            flexBasis: 0,
            backgroundColor: category.color,
          }}
        />
      ))}
    </div>
  );
}