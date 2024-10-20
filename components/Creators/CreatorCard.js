export default function CreatorCard({ nft, index }) {
  return (
    <div
      className="relative bg-[#3b3b3b] cursor-pointer rounded-2xl
    flex flex-row md:flex-col md:space-x-0 space-x-4 items-center md:py-4 p-2 ease-in hover:translate-y-0 hover:scale-95 duration-100 justify-center"
    >
      <div className=" absolute top-1 left-4 md:top-5 md:left-5 rounded-full bg-[#2b2b2b] h-6 w-6 md:h-8 md:w-8 flex items-center justify-center text-sm">
        <p className="text-xs text-[#858584]">{index + 1}</p>
      </div>
      <img
        className="rounded-full h-14 w-14 md:h-32 md:w-32 "
        src={nft?.image}
      />
      <div className="md:flex md:items-center w-full md:flex-col">
        <h3 className="text-md font-bold mb-2">{nft?.owner_name}</h3>
        <div className="flex items-center justify-start  text-[9px]">
          <p className="text-[#858584]">Total Sales: </p>
          <p>{nft?.sales}.52 ETH</p>
        </div>
      </div>
    </div>
  );
}
