import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Navbar/>
        <Footer className="mt-auto"/>
      </div>
    </>
  )
}

export default Index;