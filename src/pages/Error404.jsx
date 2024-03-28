import { PiFilmReelFill, PiTelevisionBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section className="bg-white dark:bg-black">
        <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
          <div className="w-full ">
            <div className="flex flex-col items-center max-w-lg mx-auto text-center">
              <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                404 error
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                We lost this page
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                We searched high and low, but couldn’t find what you’re looking
                for. Let’s find a better place for you to go.
              </p>

              <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <button
                  onClick={handleGoBack}
                  className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg dark:text-gray-200 gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:border-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>

                  <span>Go back</span>
                </button>

                <Link to="home">
                  <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                    Take me home
                  </button>
                </Link>
              </div>
            </div>

            <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-900">
                <span className="text-gray-500 dark:text-gray-400">
                  <PiFilmReelFill className="w-6 h-6" />
                </span>

                <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200 ">
                  Movies
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                  Dive in to learn about new movies.
                </p>

                <Link
                  to="movies"
                  className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>View latest movies</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-900">
                <span className="text-gray-500 dark:text-gray-400">
                  <PiTelevisionBold className="w-6 h-6" />
                </span>

                <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200 ">
                  TV Shows
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                  Dive in to learn about new TV shows.
                </p>

                <Link
                  to="tv-shows"
                  className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>View latest shows</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-900">
                <span className="text-gray-500 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                </span>

                <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200 ">
                  Contact Us
                </h3>

                <p className="mt-2 text-gray-500 dark:text-gray-400 ">
                  Can’t find what you’re looking for?
                </p>

                <Link
                  to="contact"
                  className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline"
                >
                  <span>Chat to our team</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
