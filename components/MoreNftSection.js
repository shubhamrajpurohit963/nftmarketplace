import {
  EyeIcon,
  RocketLaunchIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import CollectionCard from "./NftCollectionCard/CollectionCard";
import CreatorCard from "./Creators/CreatorCard";
import NftCard from "./MoreNfts/NftCard";
import { mockNFTData } from "@/data/mockNFTData";

export default function MoreNftSection() {
  return (
    <div className="container mx-auto w-7/12 md:w-10/12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">Discover More Nfts</h1>
          <h2 className="text-md md:text-2xl font-medium mt-3">
            Explore New Trending Nfts
          </h2>
        </div>
        <button className="hidden md:flex py-4 px-10 my-2 border-2  space-x-4 ease-in hover:translate-y-0 hover:scale-95 duration-100 cursor-pointer border-[#a159ff] rounded-2xl  items-center ">
          <EyeIcon aria-hidden="true" className="h-5 w-5 text-[#a159ff]  " />
          <p className="font-bold text-lg">See All</p>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mt-6">
        {mockNFTData.slice(0, 3).map((nft, index) => (
          <NftCard key={index} nft={nft} />
        ))}
      </div>
      <button className="flex w-full justify-center mt-10 md:hidden py-4 px-10 my-2 border-2  space-x-4 ease-in hover:translate-y-0 hover:scale-95 duration-100 cursor-pointer border-[#a159ff] rounded-2xl  items-center ">
        <EyeIcon aria-hidden="true" className="h-5 w-5 text-[#a159ff]  " />
        <p className="font-bold text-lg">See All</p>
      </button>
    </div>
  );
}
