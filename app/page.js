import CategorySection from "@/components/CategorySection";
import CreatorSection from "@/components/CreatorSection";
import FullBanner from "@/components/FullBanner";
import HeaderSection from "@/components/headerSection";
import HowItWork from "@/components/HowItWork";
import MoreNftSection from "@/components/MoreNftSection";
import NavBar from "@/components/navbar";
import Newsletter from "@/components/Newsletter";
import NftCollectionSection from "@/components/NftCollectionSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <HeaderSection />
      <NftCollectionSection />
      <CreatorSection />
      <CategorySection />
      <MoreNftSection />
      <FullBanner />
      <HowItWork />
      <Newsletter />
    </div>
  );
}
