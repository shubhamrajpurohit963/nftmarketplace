import { mockNFTData } from "@/data/mockNFTData";
import CategoryCard from "./Categories/CategoriesCard";

export default function CategorySection() {
  return (
    <div className="container mx-auto w-9/12 md:w-10/12">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-16">Browse Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8  mt-6">
        {mockNFTData.slice(0, 8).map((item, index) => (
          <CategoryCard key={item.id} nft={item} index={index} />
        ))}
      </div>
    </div>
  );
}
