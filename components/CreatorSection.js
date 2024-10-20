import { RocketLaunchIcon, UserIcon } from "@heroicons/react/24/outline";
import CollectionCard from "./NftCollectionCard/CollectionCard";
import CreatorCard from "./Creators/CreatorCard";
import { mockNFTData } from "@/data/mockNFTData";

export default function CreatorSection() {
  return (
    <div className="mx-auto w-7/12 md:w-10/12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className=" text-2xl md:text-4xl font-bold">Top Creators</h1>
          <h2 className="text-md md:text-xl font-medium mt-3">
            Checkout Top Rated Creators On The Nft Marketplace
          </h2>
        </div>
        <button className=" hidden md:flex py-4 px-8 my-2 border-2  ease-in hover:translate-y-0 hover:scale-95 duration-100 cursor-pointer  border-[#a159ff] border-width-2 rounded-2xl items-center space-x-2">
          <RocketLaunchIcon
            aria-hidden="true"
            className="h-5 w-5 text-[#a159ff]  "
          />
          <p className="font-bold">View Rankings</p>
        </button>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-8  mt-6">
        {mockNFTData.slice(0, 10).map((item, index) => (
          <CreatorCard key={item.id} nft={item} index={index} />
        ))}
      </div>
      <button className="flex md:hidden py-4 px-8 my-8 md:my-2 border-2 w-full ease-in hover:translate-y-0 hover:scale-95 duration-100 cursor-pointer  border-[#a159ff] border-width-2 rounded-2xl items-center justify-center space-x-2">
        <RocketLaunchIcon
          aria-hidden="true"
          className="h-5 w-5 text-[#a159ff]  "
        />
        <p className="font-bold">View Rankings</p>
      </button>
    </div>
  );
}
