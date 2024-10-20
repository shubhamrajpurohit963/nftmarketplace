import {
  RocketLaunchIcon,
  PowerIcon,
  UserIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/24/outline";

const icons = [
  RocketLaunchIcon,
  PowerIcon,
  UserIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  ViewGridIcon,
];

export default function CategoryCard({ nft, index }) {
  const IconComponent = icons[index % icons.length];
  return (
    <div className="relative bg-[#3b3b3b] rounded-2xl flex flex-col items-center justify-between overflow-hidden ease-in hover:translate-y-0 hover:scale-95 duration-150 delay-75 cursor-pointer">
      <div
        style={{
          backgroundImage: `url(${nft?.image})`,
        }}
        className="absolute inset-0 bg-no-repeat bg-cover bg-center blur-md opacity-100"
      ></div>

      <div className="relative z-10 flex h-32  md:h-64 w-32 md:w-40 items-center justify-center">
        <IconComponent
          aria-hidden="true"
          className="h-1/3 w-1/3 md:h-20  md:w-20 text-white"
        />
      </div>

      <div className="relative z-10 bg-[#3b3b3b] w-full flex items-center justify-center h-1/3 p-4 md:p-7">
        <h3 className="text-sm md:text-lg font-bold text-white">
          {nft?.category}
        </h3>
      </div>
    </div>
  );
}
