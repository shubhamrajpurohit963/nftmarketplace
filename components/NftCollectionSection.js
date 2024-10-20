"use client";
import { useEffect, useState } from "react";
import CollectionCard from "./NftCollectionCard/CollectionCard";
import { mockNFTData } from "@/data/mockNFTData";

export default function NftCollectionSection() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); 
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-auto w-9/12 md:w-10/12">
      <h1 className="text-xl md:text-4xl font-bold">Trending Collection</h1>
      <h2 className="text-sm md:text-2xl font-medium mt-3">
        Checkout Our Weekly Updated Trending Collection.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 space-x-0 md:space-x-8 mt-6">
        {isMobile
          ? mockNFTData
              .slice(9, 10)
              .map((item) => <CollectionCard key={item.id} nft={item} />)
          : mockNFTData
              .slice(9, 12)
              .map((item) => <CollectionCard key={item.id} nft={item} />)}
      </div>
    </div>
  );
}
