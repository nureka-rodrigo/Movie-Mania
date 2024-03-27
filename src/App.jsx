import './App.css'
import Index from "./pages/Index.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <div className="bg-white dark:bg-black transition duration-500">
        <Routes>
          <Route path={"/"} element={<Index/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
