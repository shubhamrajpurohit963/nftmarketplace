import { RocketLaunchIcon, UserIcon } from "@heroicons/react/24/outline";
import CollectionCard from "./NftCollectionCard/CollectionCard";
import CreatorCard from "./Creators/CreatorCard";
import HowItWorkCard from "./HowItWork/HowItWorkCard";

export default function HowItWork() {
  return (
    <div className="container mx-auto w-9/12 md:w-10/12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-bold">How It Works</h1>
          <h2 className="text-xl font-medium mt-3">
            Find Out How To Get Started
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-8  mt-6">
        <HowItWorkCard
          title={"Setup Your Wallet"}
          description={
            "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
          }
        />
        <HowItWorkCard
          title={"Create Collection"}
          description={
            "Upload your work and setup your collection. Add a description, social links and floor price."
          }
        />
        <HowItWorkCard
          title={"Start Earning"}
          description={
            "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
          }
        />
      </div>
    </div>
  );
}
