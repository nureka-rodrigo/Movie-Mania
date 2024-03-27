const HomeMovies = () => {
  return (
    <>
      <div className="max-w-lg mx-auto text-center">
        <h2
          className="text-3xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight transition duration-500">Movies</h2>
      </div>
      <div className="max-w-[95rem] px-6 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">

            <div className="group sm:flex rounded-xl">
              <div
                className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
                <img className="size-full absolute top-0 start-0 object-cover"
                     src="https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
                     alt="Image Description"/>
              </div>
              <div className="grow">
                <div className="p-4 flex flex-col h-full sm:p-6">
                  <h3
                    className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-500 transition-colors duration-500">
                    Blade Runner 2049
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    Earth&apos;s mightiest heroes must come together and learn to fight as a team if they are going
                    to
                    stop
                    the mischievous Loki and his alien army from enslaving humanity.
                  </p>

                  <div className="mt-5 sm:mt-auto">
                    <div>
                      <p
                        className="inline-flex items-center py-1.5 px-3 m-2 ml-0 lg:mr-2 lg:m-0 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        IMDB: 8.0
                      </p>
                      <p
                        className="inline-flex items-center py-1.5 px-3 m-2 ml-0 lg:mr-2 lg:m-0 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        RT: 88%
                      </p>
                      <p
                        className="inline-flex items-center py-1.5 px-3 ml-0 lg:mr-2 lg:m-0 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        Metascore: 81
                      </p>
                    </div>

                    <button
                      className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-500 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Read
                      more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="group sm:flex rounded-xl">
              <div
                className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
                <img className="size-full absolute top-0 start-0 object-cover"
                     src="https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
                     alt="Image Description"/>
              </div>
              <div className="grow">
                <div className="p-4 flex flex-col h-full sm:p-6">
                  <h3
                    className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-500 transition-colors duration-500">
                    Blade Runner 2049
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    Earth&apos;s mightiest heroes must come together and learn to fight as a team if they are going
                    to
                    stop the
                    mischievous Loki and his alien army from enslaving humanity.
                  </p>

                  <div className="mt-5 sm:mt-auto">
                    <div>
                      <p
                        className="inline-flex items-center py-1.5 px-3 m-2 ml-0 lg:mr-2 lg:m-0 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        IMDB: 8.0
                      </p>
                      <p
                        className="inline-flex items-center py-1.5 px-3 m-2 ml-0 lg:mr-2 lg:m-0 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        RT: 88%
                      </p>
                      <p
                        className="inline-flex items-center py-1.5 px-3 ml-0 lg:mr-2 lg:m-0 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        Metascore: 81
                      </p>
                    </div>

                    <button
                      className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-500 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Read
                      more
                    </button>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default HomeMovies;