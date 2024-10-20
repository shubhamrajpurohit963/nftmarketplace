import { RocketLaunchIcon, UserIcon } from "@heroicons/react/24/outline";

export default function CollectionCard({ nft }) {
  return (
    <div className="flex max-w-96 flex-col mr-2 my-5 cursor-pointer">
      <img
        className="rounded-lg h-80 w-96 ease-in hover:translate-y-0 hover:scale-95 duration-200"
        src={nft.image}
      />
      <div className="flex overflow-hidden items-center justify-between my-6 mt-4 space-x-1">
        <img
          className=" h-24 w-24 md:h-24 md:w-24 rounded-xl ease-in hover:translate-y-0 hover:scale-95 duration-200 "
          src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-1@2x.png"
        />
        <img
          className="h-24 w-24 md:h-24 md:w-24 rounded-xl ease-in hover:translate-y-0 hover:scale-95 duration-200 "
          src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder@2x.png"
        />
        <div className="h-24 w-24 md:h-24 md:w-24 rounded-xl bg-[#a159ff] flex items-center justify-center ease-in hover:translate-y-0 hover:scale-95 duration-200 ">
          <p className="text-sm md:text-2xl font-semibold">1025+</p>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-xl">{nft?.nft_name}</h3>
        <div className="flex items-center justify-start mt-2 space-x-4 text-sm">
          <img className="w-6 h-6 rounded-full " src={nft?.owner_image} />
          <p>{nft?.owner_name}</p>
        </div>
      </div>
    </div>
  );
}
