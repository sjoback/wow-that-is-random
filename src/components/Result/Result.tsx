import React, { useState } from "react";
import { Component } from "react";
import styles from "./Result.module.scss";
import ResultRecipe from "./ResultRecipe/ResultRecipe";
import ResultWorkout from "./ResultWorkout/ResultWorkout";
import { motion } from "framer-motion";
import ImagePopUp from "../ImagePopUp/ImagePopUp";

interface propTypes {
   type: string;
   result: string;
}

const Components = {
   recipe: ResultRecipe,
   workout: ResultWorkout,
};

function Result(props: propTypes) {
   const [open, toggleOpen] = useState(true);
   const result = JSON.parse(props.result);
   console.log(props.result);

   const variants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-100%" },
   };

   return (
      <div className={styles.container}>
         <div className={styles.close} />

         <div className={styles.content}>
            <ImagePopUp alt={result.strMeal} image={result.strMealThumb} />

            <div className={styles.contentRight}>
               <h1>{result.strMeal}</h1>
               <p>{props.result}</p>
            </div>
         </div>
      </div>
   );
}

export default Result;
