import { EyeIcon } from "@heroicons/react/24/outline";
import { Space_Mono } from "@next/font/google";
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });
export default function FullBanner() {
  return (
    <div className="relative bg-[#3b3b3b] flex flex-row  md:flex-col items-center justify-between overflow-hidden">
      <div
        style={{
          backgroundImage: `url(https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/screen-tablet@1x.png)`,
        }}
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-purple-500 via-transparent to-transparent opacity-100"></div>

      <div className="relative z-10 flex flex-col space-y-5 md:space-y-0 md:flex-row items-start justify-between container px-40 mt-96 md:items-end my-10 text-white">
        <div className="space-y-5">
          <div className="flex md:w-1/2 w-full items-center space-x-2 bg-[#3b3b3b]  rounded-full px-4 py-2 cursor-pointer">
            <img
              src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-1@2x.png"
              className="rounded-full h-8 w-8"
            />
            <p>Shroomie</p>
          </div>
          <h3 className={`text-4xl font-bold mb-2  ${spaceMono.className}`}>
            Magic Mushrooms
          </h3>
          <button className="hidden md:flex py-4 px-8 my-2 bg-white rounded-2xl  items-center space-x-2 ease-in hover:translate-y-0 hover:scale-95 duration-150 delay-75 cursor-pointer">
            <EyeIcon aria-hidden="true" className="h-5 w-5 text-[#a159ff] " />
            <p className="font-semibold text-black">See NFT</p>
          </button>
        </div>

        {/* Auction Timer */}
        <div className="flex flex-col w-full md:w-auto items-center rounded-xl md:items-start p-4 bg-[#3b3b3b80]">
          <p>Auction ends in:</p>
          <div className="flex space-x-2 text-lg font-semibold">
            <div className="text-center">
              <p>59</p>
              <p className="text-sm">Hours</p>
            </div>
            <p>:</p>
            <div className="text-center">
              <p>59</p>
              <p className="text-sm">Minutes</p>
            </div>
            <p>:</p>
            <div className="text-center">
              <p>59</p>
              <p className="text-sm">Seconds</p>
            </div>
          </div>
        </div>
        <button className="py-4 px-8 my-2 bg-white rounded-2xl flex md:hidden items-center space-x-2 ease-in hover:translate-y-0 hover:scale-95 duration-150 delay-75 cursor-pointer w-full justify-center">
          <EyeIcon aria-hidden="true" className="h-5 w-5 text-[#a159ff] " />
          <p className="font-semibold text-black">See NFT</p>
        </button>
      </div>
    </div>
  );
}
