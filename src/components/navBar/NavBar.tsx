import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="navbar bg-base-100 py-0 max-w-7xl mx-auto"
        aria-label="Global"
      >
        <div className="navbar-start">
          <label
            tabIndex={0}
            className="btn btn-ghost md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" />
          </label>

          <a href="#" className="btn btn-ghost normal-case">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal menu-lg p-0">
            <li>
              <a>Classes</a>
            </li>
            <li>
              <a>Get Involved</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn btn-secondary">Donate</a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-base-100 p-2 sm:max-w-sm sm:ring-1 sm:ring-neutral">
          <ul className="menu menu-horizontal flex items-center gap-x-6">
            <li>
              <a href="#" className="">
                <span className="sr-only">Your Company</span>
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

          <ul className="menu menu-lg rounded-box">
            <li>
              <a>Classes</a>
            </li>
            <li>
              <a>Get Involved</a>
            </li>
            <li></li>
            <a className="btn btn-block mt-4">Donate</a>
          </ul>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
