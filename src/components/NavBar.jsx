import {useState} from 'react';
import ThemeButton from './ThemeButton.jsx';
import {NavItems} from '../data/NavItems.jsx';
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  let pathArray = useLocation().pathname.split("/");
  let lastPart = pathArray[pathArray.length - 1];

  return (
    <>
      <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40 mx-auto">
        <nav
          className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max relative">
            <a href="/" className="font-semibold flex items-center gap-x-2">
              <div className="flex items-center -space-x-3">
                <img src="/logo.svg" className="h-12 rounded-full dark:invert duration-300 ease-linear" alt="brand"/>
              </div>
            </a>
          </div>
          <div
            className={`
              fixed inset-x-0 h-[100dvh] lg:h-max top-0 lg:opacity-100 left-0 bg-white dark:bg-black lg:!bg-transparent py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full lg:top-0 lg:relative lg:flex lg:justify-between duration-300 ease-linear
              ${openNavbar ? '' : '-translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0'}
            `}
          >
            <ul
              className="flex flex-col justify-center lg:flex-row gap-8 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:pl-36">
              {NavItems.map((navItem) => (
                <li key={navItem.id}>
                  <Link to={navItem.link}
                     className={`relative py-2.5 duration-300 ease-linear hover:text-blue-500 ${
                       lastPart === navItem.link
                         ? "rounded-none border-b-2 border-blue-600 text-blue-600"
                         : ""
                     }`}>
                    {navItem.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative mt-8 lg:mt-0 lg:mr-5">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>

              <input type="text"
                     className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-opacity-40 transition duration-500"
                     placeholder="Search"/>
            </div>
            <div className="flex items-center justify-center mt-6 lg:mt-0">
              <ThemeButton/>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleNavbar}
              className="outline-none border-l border-l-purple-100 dark:border-l-gray-800 pl-3 relative py-3"
            >
              <span className="sr-only">Toggle navbar</span>
              <span
                aria-hidden="true"
                className={`
                  flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-500
                  ${openNavbar ? 'rotate-45 translate-y-[0.33rem]' : ''}
                `}
              />
              <span
                aria-hidden="true"
                className={`
                  flex mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-500
                  ${openNavbar ? '-rotate-45 -translate-y-[0.33rem]' : ''}
                `}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;