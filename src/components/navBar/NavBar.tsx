// import { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { DonateButton } from "../DonateButton";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

export const NavBar = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="navbar mx-auto max-w-7xl bg-base-100 py-0"
        aria-label="Global"
      >
        <div className="navbar-start">
          {/* <label
            tabIndex={0}
            className="btn-ghost btn md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" />
          </label> */}

          <a href="#" className="btn-ghost btn normal-case">
            <span className="sr-only">Marginal Entropy</span>
            <img className="h-12 w-auto fill-red-300 text-blue-400" src="/logo.svg" alt="" />
          </a>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal menu-lg p-0">
            {/* <li>
              <a className="btn btn-primary btn-outline">Classes</a>
            </li> */}
            {/* <li>
              <a>Get Involved</a>
            </li> */}
          </ul>
        </div>

        <div className="navbar-end">
            <DonateButton />
        </div>
      </nav>

      {/* <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-base-100 p-2 sm:max-w-sm sm:ring-1 sm:ring-neutral">
          <ul className="menu menu-horizontal flex items-center gap-x-6">
            <li>
              <a href="#" className="">
                <span className="sr-only">Marginal Entropy</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </li>
            <li className="ml-auto">
              <button
                type="button"
                className="btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              </button>
            </li>
          </ul>

          <ul className="menu rounded-box menu-lg">
            <li className="outline-2">
              <a>Classes</a>
            </li>
            <li>
              <a>Get Involved</a>
            </li>
            <li></li>
            <DonateButton />
          </ul>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );
};
