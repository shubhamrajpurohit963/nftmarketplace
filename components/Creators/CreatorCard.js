export default function CreatorCard({ nft, index }) {
  return (
    <div
      className="relative bg-[#3b3b3b] cursor-pointer rounded-2xl
    flex flex-row md:flex-col md:space-x-0 space-x-4 items-center md:py-4 p-2 ease-in hover:translate-y-0 hover:scale-95 duration-100"
    >
      <div className=" absolute top-2 left-2 md:top-5 md:left-5 rounded-full bg-[#2b2b2b] h-8 w-8 flex items-center justify-center">
        <p>{index + 1}</p>
      </div>
      <img
        className="rounded-full h-20 w-20 md:h-32 md:w-32 mb-4"
        src={nft?.image}
      />
      <div className="md:flex md:items-center  md:flex-col">
        <h3 className="text-xl font-bold mb-2">{nft?.owner_name}</h3>
        <div className="flex items-center  justify-between text-sm space-x-2">
          <p className="text-[#858584]">Total Sales: </p>
          <p>{nft?.sales}.52 ETH</p>
        </div>
      </div>
    </div>
  );
}
