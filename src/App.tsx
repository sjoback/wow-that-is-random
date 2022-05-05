import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoBot from "./components/InfoBot/InfoBot";
import Navigation from "./components/Settings/Navigation/Navigation";
import Theme from "./components/Theme/Theme";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Workout from "./pages/Workout/Workout";
import "./styles/globals.scss";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Navigation />

            <Theme />

            <main>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="recipe" element={<Recipe />} />
                  <Route path="workout" element={<Workout />} />
               </Routes>
            </main>

            <InfoBot />
         </BrowserRouter>
      </div>
   );
}

export default App;
