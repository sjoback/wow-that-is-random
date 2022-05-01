import React, { useState } from "react";
import Button from "./components/Button/Button";
import Result from "./components/Result/Result";
import "./styles/globals.scss";

function App() {
   return (
      <main>
         <div className="main-container">
            <h1>What randomness are you looking for?</h1>

            <div className="main-container__buttons">
               <Button type="link" color="blue" size="md" />
               <Button text="test" color="red" size="md" />
            </div>
         </div>
      </main>
   );
}

export default App;
