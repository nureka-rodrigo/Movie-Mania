import './App.css'
import Index from "./pages/Index.jsx";
import {Route, Routes} from "react-router-dom";
import Landing from "./components/Landing.jsx";

function App() {

  return (
    <>
      <div className="bg-white dark:bg-black transition duration-500">
        <Routes>
          <Route path={"/"} element={<Landing/>}/>
          <Route path={"/home"} element={<Index/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
