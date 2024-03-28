import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import TvShowCards from "../components/TvShowCards.jsx";
import {useState} from "react";

const TvShowList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSelection, setCurrentSelection] = useState("airing_today");

  const handleSelection = (e) => {
    setCurrentSelection(e.target.value);
    setCurrentPage(1)
  }

  const handleNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Navbar/>
        <div className="container pt-24 w-full max-w-[95rem] mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div
            className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
            <div className="absolute right-0 top-0 h-full w-full flex justify-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45"/>
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45"/>
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45"/>
              </div>
            </div>
            <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45"/>
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45"/>
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45"/>
              </div>
            </div>
            <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
              <h1
                className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-950 dark:text-white">
                Discover Exciting <span
                className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">TV Shows</span>
              </h1>
              <p className="text-gray-700 dark:text-gray-300">
                Dive into an array of binge-worthy TV shows available for streaming. From gripping dramas to hilarious
                comedies, you&apos;ll find your next favorite series here.
              </p>
            </div>
          </div>

          <section className="flex items-center py-8">
            <div className="w-full max-w-screen-7xl mx-auto">
              <nav
                className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0 md:justify-end">
                <select
                  onChange={(e) => handleSelection(e)}
                  className="lex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-800 transition duration-500">
                  <option value="airing_today">Airing Today</option>
                  <option value="on_the_air">On The Air</option>
                  <option value="popular">Popular</option>
                  <option value="top_rated">Top Rated</option>
                </select>
              </nav>
            </div>
          </section>

          <TvShowCards size={10} type={currentSelection} page={currentPage}/>

          <section className="flex items-center">
            <div className="w-full max-w-screen-7xl mx-auto">
              <nav
                className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0 md:justify-end"
                aria-label="Table navigation">
                <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                    <button onClick={handlePrevious}
                            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition duration-500">
                      <span className="sr-only">Previous</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <a href="#" aria-current="page"
                       className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-800 dark:border-gray-800 dark:bg-gray-800 dark:text-white transition duration-500">{currentPage}</a>
                  </li>
                  <li>
                    <button onClick={handleNext}
                            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition duration-500">
                      <span className="sr-only">Next</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </div>

        <Footer className="mt-auto"/>
      </div>
    </>
  )
}

export default TvShowList