import {useEffect, useState} from "react";
import axios from "axios";
import {options} from "../data/RequestOptions.jsx";
import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import {useParams} from "react-router-dom";

const Movie = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
  }, [id]);

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Navbar/>
        {isLoading ? (
          <section className="pt-20 mx-auto">
            <div
              className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-32 py-10 rounded-2xl">
              <div className="flex md:flex-1">
                <div
                  className="flex items-center justify-center bg-gray-300 dark:bg-gray-700 flex-shrink-0 relative rounded-xl overflow-hidden w-[275px] h-[400px] md:w-[300px] md:h-[600px] lg:w-[475px] lg:h-[700px] animate-pulse">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                      d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2 text-gray-700 dark:text-gray-300 animate-pulse">
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 my-6 mb-16"></div>

                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-52 md:w-72 lg:w-96 my-6"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 my-6"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 my-6"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 my-6"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-44 md:w-60 lg:w-7/12 my-6"></div>

                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-52 md:w-72 lg:w-96 my-6 mt-16"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 my-6"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 my-6"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 my-6"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 my-6"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 my-6"></div>
              </div>
            </div>
          </section>
        ) : (
          <section className="pt-20 mx-auto">
            <div
              className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row gap-8 md:gap-16 py-10 rounded-2xl">
              {data.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt={data.title}
                     className="w-full md:h-full object-cover rounded-lg"/>
              ) : (
                <div
                  className="flex items-center justify-center bg-gray-300 dark:bg-gray-700 flex-shrink-0 relative rounded-xl overflow-hidden w-[275px] h-[400px] md:w-[300px] md:h-[600px] lg:w-[475px] lg:h-[700px]">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                      d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                  </svg>
                </div>
              )}
              <div className="md:w-1/2 space-y-4 lg:space-y-8 text-gray-700 dark:text-gray-300 transition duration-500">
                <h1
                  className="h-12 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600 font-semibold text-2xl sm:text-3xl md:text-4xl">
                  {data.title}
                </h1>
                <p>
                  {data.overview}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-x-4">
                  <span
                    className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                    Status: {data.status}
                  </li>
                  <li className="flex items-center gap-x-4">
                  <span
                    className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                    Released Date: {data.release_date}
                  </li>
                  <li className="flex items-center gap-x-4">
                  <span
                    className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                    Runtime: {data.runtime} minutes
                  </li>
                  <li className="flex items-center gap-x-4">
                  <span
                    className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                    Genres: {data.genres?.map((genre) => genre.name).join(", ")}
                  </li>
                  <li className="flex items-center gap-x-4">
                  <span
                    className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                    Average Votes: {data.vote_average}
                  </li>
                  <li className="flex items-center gap-x-4">
                  <span
                    className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                    Language: {data.spoken_languages?.map((language) => language.name).join(", ")}
                  </li>
                  <li className="flex items-center gap-x-4">
                    <span
                      className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                    Produced By: {data.production_companies?.map((company) => company.name).join(", ")}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
        <Footer className="mt-auto"/>
      </div>
    </>
  )
}
export default Movie