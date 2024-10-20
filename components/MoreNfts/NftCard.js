import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function NftCard({ nft }) {
  return (
    <div className="bg-[#3b3b3b] rounded-2xl flex flex-col items-center  overflow-hidden ease-in hover:translate-y-0 hover:scale-95 duration-150 delay-75 cursor-pointer mx-auto">
      <img className=" md:h-full rounded-none" src={nft?.image} />
      <div className="bg-[#3b3b3b] w-full
       flex flex-col p-6 space-y-2 ">
        <p className=" font-bold text-xl ">{nft?.nft_name}</p>
        <div className="flex space-x-2">
          <img src={nft?.owner_image} className="rounded-full h-8 w-8 " />
          <p>{nft?.owner_name}</p>
        </div>
        <div className="flex w-full justify-between">
          <div>
            <p className="text-sm text-[#858584]">price</p>
            <p className="text-md">{nft?.price} ETH</p>
          </div>
          <div>
            <p className="text-sm text-[#858584]">Higest Bid</p>
            <p className="text-md">
              {nft?.price + Math.floor(Math.random() * 10)} ETH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
