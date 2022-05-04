import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Settings/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Workout from "./pages/Workout/Workout";
import "./styles/globals.scss";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Navigation />

            <main>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="recipe" element={<Recipe />} />
                  <Route path="workout" element={<Workout />} />
               </Routes>
            </main>
         </BrowserRouter>
      </div>
   );
}

export default App;
