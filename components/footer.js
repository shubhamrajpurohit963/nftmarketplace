export default function Footer() {
  return (
    <footer className="bg-[#3b3b3b] text-white py-10 px-10  mt-20 ">
      <div className=" grid grid-cols-1 w-10/12 mx-auto md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <span className="text-purple-500">
              <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg" />
            </span>
            <span className="" >NFT Marketplace</span>
          </h3>
          <p className="text-gray-400 mb-2">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="text-gray-400 mb-2">Join our community</p>
          <div className="flex">
            <div className="p-2 rounded-full">
              <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/discordlogo-1@2x.svg" />
            </div>
            <div className="p-2 rounded-full">
              <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/youtubelogo-1@2x.svg" />
            </div>
            <div className="p-2 rounded-full">
              <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/twitterlogo-1@2x.svg" />
            </div>
            <div className="p-2 rounded-full">
              <img
                className=""
                src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/instagramlogo-1@2x.svg"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li className=" cursor-pointer">Marketplace</li>
            <li className=" cursor-pointer">Rankings</li>
            <li className=" cursor-pointer">Connect a wallet</li>
          </ul>
        </div>

        <div className="col-span-2" >
          <h3 className="text-xl font-semibold mb-4">Join Our Weekly Digest</h3>
          <p className="text-gray-400 mb-4">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email here"
              className="p-4 w-full rounded-l-2xl bg-white text-black"
            />
            <button className="px-6 bg-purple-500 text-white font-bold rounded-r-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="container mx-auto mt-10  w-10/12   border-gray-700" />

      <div className="w-10/12 text-left mx-auto text-gray-500">
        <p>© NFT Market. Use this template freely.</p>
      </div>
    </footer>
  );
}
