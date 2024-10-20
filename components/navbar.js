import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Marketplace", href: "#", current: false },
  { name: "Rankings", href: "#", current: false },
  { name: "Connect a wallet", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav">
      <div className="flex h-32 px-10 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            alt="Your Company"
            src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg"
            className="mx-2"
          />
          <img
            alt="NFT Marketplace"
            src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/nft-marketplace-1@2x.svg"
          />
        </div>

        <div className="flex items-center lg:hidden">
          <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="block h-6 w-6 group-data-[open]:hidden"
              aria-hidden="true"
            />
            <XMarkIcon
              className="hidden h-6 w-6 group-data-[open]:block"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  "rounded-md px-3 py-2 text-md font-bold ease-in hover:translate-y-0 hover:scale-95 duration-200"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="hidden md:flex items-center space-x-2 rounded-2xl bg-[#a159ff] px-8 py-5 font-bold ease-in hover:translate-y-0 hover:scale-95 duration-100 cursor-pointer"
          >
            <UserIcon className="h-6 w-6" aria-hidden="true" />
            <p>Sign Up</p>
          </button>
        </div>
      </div>
      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
