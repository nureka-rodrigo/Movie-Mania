import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Illustration1 from "../assets/home-1.svg";
import HomeMovies from "../components/HomeMovies.jsx";
import HomeTvShows from "../components/HomeTvShows.jsx";

const Index = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Navbar/>
        <div className="container px-6 pt-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1
                  className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl pt-16 lg:pt-0 transition duration-500">Discover
                  the <br/> latest <span
                    className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">Blockbusters</span>
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400 transition duration-500">Explore a world of
                  entertainment with our curated collection of movies and TV shows. From action-packed thrillers to
                  heartwarming dramas, we&apos;ve got something for everyone.</p>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-full h-full lg:max-w-3xl"
                   src={Illustration1} alt="Catalogue-pana.svg"/>
            </div>
          </div>
        </div>
        <HomeMovies/>
        <HomeTvShows/>
        <Footer className="mt-auto"/>
      </div>
    </>
  )
}

export default Index;