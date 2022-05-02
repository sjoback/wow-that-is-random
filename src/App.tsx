import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
// import Workout from "./pages/Workout/Workout";
import "./styles/globals.scss";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipe" element={<Recipe />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
