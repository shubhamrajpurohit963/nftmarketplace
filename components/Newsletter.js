import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  RocketLaunchIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Newsletter() {
  return (
    <div className="container space-x-0 md:space-x-14 mx-auto w-10/12 rounded-3xl flex flex-col md:flex-row justify-between md:items-center bg-none md:bg-[#3b3b3b] py-12 px-20 pt-16">
      <img
        src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/photo-1@2x.png"
        className="rounded-lg w-full md:w-1/2 h-1/2 "
      />

      <div className="flex mt-10 md:mt-0 flex-col justify-between items-start space-y-5 ">
        <h1 className="text-2xl md:text-4xl font-bold">
          Join Our Weekly Digest
        </h1>
        <h3 className="text-sm md:text-lg">
          Get Exclusive Promotions & Updates Straight To Your Inbox.
        </h3>
        <button className=" w-full md:w-auto py-4 px-8 my-4 bg-[#a159ff] rounded-2xl flex items-center  justify-center space-x-2">
          <EnvelopeIcon aria-hidden="true" className="h-5 w-5 " />
          <p className="font-bold">Subscribe</p>
        </button>
      </div>
    </div>
  );
}
