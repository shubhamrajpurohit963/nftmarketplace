import { RocketLaunchIcon, UserIcon } from "@heroicons/react/24/outline";
import { Space_Mono, Work_Sans } from "@next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function HeaderSection() {
  return (
    <div className="flex w-9/12 mx-auto md:py-[70px] md:w-10/12 space-x-28">
      <div className={`flex-1 flex-col ${workSans.className}`}>
        <h1 className="text-3xl md:text-6xl font-medium my-2">
          Discover Digital Art & Collect Nfts
        </h1>
        <p
          className="text:xl md:text-2xl
          my-8 font-light"
        >
          Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And Sell
          Art From More Than 20k Nft Artists.
        </p>
        <div className="md:block lg:hidden flex-1">
          <img
            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
            className=""
          />
        </div>
        <button className="py-4 w-full flex  justify-center mx-auto px-8 my-8 md:my-2 bg-[#a159ff] rounded-2xl items-center space-x-2">
          <RocketLaunchIcon aria-hidden="true" className="h-5 w-5" />
          <p className="font-medium">Get Started</p>
        </button>
        <div
          className={`flex justify-between font-medium text-sm md:text-2xl my-8  ${spaceMono.className}`}
        >
          <div>
            <p className="text-lg md:text-2xl font-bold">240k+</p>
            <p>Total Sale</p>
          </div>
          <div>
            <p className="text-lg md:text-2xl font-bold">100k+</p>
            <p>Auctions</p>
          </div>
          <div>
            <p className="text-lg md:text-2xl font-bold">240k+</p>
            <p>Artists</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block flex-1">
        <img
          src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
          className=""
        />
      </div>
    </div>
  );
}
