import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, BookOpenIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const headerData = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Books",
      link: "/books",
    },
    {
      id: 3,
      title: "About",
      link: "/about",
    },
    {
      id: 4,
      title: "Contact Us",
      link: "/contact",
    },
  ];
  const [menus, setMenus] = useState(false);
  // console.log(menus);
  return (
    <header className="relative">
      <div className="flex justify-between items-center py-6 bg-slate-300 px-4">
        <Link to="/" className="text-2xl font-semibold">
          <BookOpenIcon className="h-8 w-8 inline-block text-blue-500" />{" "}
          buyBook
        </Link>
        <div onClick={() => setMenus(!menus)}>
          <Bars3Icon className="h-7 w-7 cursor-pointer md:hidden" />
        </div>
        <ul className="md:flex gap-4 hidden">
          {headerData.map((data) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-600" : ""
              }
              to={data.link}
            >
              {data.title}
            </NavLink>
          ))}
        </ul>
      </div>

      {menus && (
        <div className="absolute top-12 w-full mx-auto text-center z-10">
          <div className="p-5 bg-white opacity-90 border rounded shadow-sm">
            {/* Logo & Button section */}
            <div className="flex items-center justify-between mb-4">
              <div className="mx-auto">
                <Link to="/" className="text-2xl font-semibold">
                  <BookOpenIcon className="h-8 w-8 inline-block text-blue-500" />{" "}
                  buyBook
                </Link>
              </div>
              {/* Dropdown menu close button */}
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  onClick={() => setMenus(!menus)}
                >
                  <XMarkIcon className="w-7 text-gray-600" />
                </button>
              </div>
            </div>
            {/* Mobile Nav Items Section */}
            <nav>
              <ul className="flex flex-col gap-4">
                {headerData.map((data) => (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active:text-blue-600" : "default"
                    }
                    to={data.link}
                  >
                    {data.title}
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
