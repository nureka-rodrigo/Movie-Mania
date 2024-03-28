import axios from "axios";
import {options} from "../data/RequestOptions.jsx";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const MovieCards = ({ size, type, page }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}`, options) // Use the page prop in the request
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.results)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
  }, [type, page]);

  return (
    <>
      {isLoading ? (
        <div className="max-w-[95rem] px-6 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {Array.from({length: size}).map((_, index) => (
              <div key={index} className="group sm:flex rounded-xl" role="status">
                <div
                  className="flex items-center justify-center bg-gray-300 dark:bg-gray-700 flex-shrink-0 relative rounded-xl overflow-hidden w-[300px] h-[400px] animate-pulse">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                      d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                  </svg>
                </div>
                <div className="grow">
                  <div className="p-4 flex flex-col h-full sm:p-6 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-8"></div>

                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 lg:w-96"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="mt-5 sm:mt-auto">
                      <button
                        className="w-full px-16 py-5 mt-6 tracking-wider uppercase transition-colors duration-500 transform bg-gray-200 dark:bg-gray-700 rounded-lg lg:w-auto">
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-[95rem] px-6 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {data.slice(0, size).map((movie, index) => (
              <div key={index} className="group sm:flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-950 transition duration-300">
                <div
                  className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
                  <img className="size-full absolute top-0 start-0 object-cover"
                       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                       alt={movie.title}/>
                </div>
                <div className="grow">
                  <div className="p-4 flex flex-col h-full sm:p-6">
                    <h3
                      className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-500 transition-colors duration-500">
                      {movie.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-500">
                      {movie.overview}
                    </p>
                    <div className="mt-5 sm:mt-auto">
                      <button
                        className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-500 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

MovieCards.propTypes = {
  size: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default MovieCards;