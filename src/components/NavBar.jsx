import {useEffect, useRef, useState} from 'react';
import ThemeButton from './ThemeButton.jsx';
import {NavItems} from '../data/NavItems.jsx';
import {Link, useLocation} from "react-router-dom";
import {options} from "../data/RequestOptions.jsx";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [prevSearchResults, setPrevSearchResults] = useState([]);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  let pathArray = useLocation().pathname.split("/");
  let lastPart = pathArray[pathArray.length - 1];

  useEffect(() => {
    if (searchInput) {
      const fetchMovies = fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => data.results.map(movie => ({...movie, media_type: 'movie'})));

      const fetchTVShows = fetch(`https://api.themoviedb.org/3/search/tv?query=${searchInput}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => data.results.map(tvShow => ({...tvShow, media_type: 'tv_show'})));

      Promise.all([fetchMovies, fetchTVShows])
        .then(([movies, tvShows]) => {
          const combinedResults = [...movies, ...tvShows];
          setSearchResults(combinedResults);
          setPrevSearchResults(combinedResults);
        });
    } else {
      setSearchResults([]);
      setPrevSearchResults([]);
    }
  }, [searchInput]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <div className="relative mt-8 lg:mt-0 lg:mr-5" ref={dropdownRef}>
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-opacity-40 transition duration-500"
                placeholder="Search"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onClick={() => setSearchResults(prevSearchResults)}
              />
              {searchResults.length > 0 && (
                <ul className="absolute w-full bg-white dark:bg-black border rounded-lg mt-2 transition duration-500">
                  {searchResults.slice(0, 5).map(result => (
                    <Link key={result.id} to={`/${result.media_type === 'movie' ? 'movie' : 'tv-show'}/${result.id}`}>
                      <li
                        className="p-2 text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-950 flex items-center gap-2">
                        {result.poster_path ? (
                          <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                               alt={result.title || result.name}
                               className="w-10 h-14"/>
                        ) : (
                          <div
                            className="flex items-center justify-center bg-gray-300 dark:bg-gray-700 flex-shrink-0 relative overflow-hidden w-10 h-14">
                            <svg className="w-2 h-2 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                              <path
                                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                          </div>
                        )}
                        <div>
                          <div>{result.title || result.name ? ((result.title || result.name).length > 20 ? (result.title || result.name).substring(0, 20) + '...' : (result.title || result.name)) : ''}</div>
                          <div
                            className="text-sm text-gray-500">{result.media_type === 'movie' ? 'Movie' : 'TV Show'}</div>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
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