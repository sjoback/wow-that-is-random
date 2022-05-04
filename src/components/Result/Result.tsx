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
   category: string;
}

const Components = {
   recipe: ResultRecipe,
   workout: ResultWorkout,
};

function Result(props: propTypes) {
   const result = JSON.parse(props.result);

   const variants = {
      open: { opacity: 1, x: 0, duration: 2 },
      closed: { opacity: 0, x: "-100px", duration: 2 },
   };

   const exitVariants = {
      opacity: 0,
      y: "-60px",
      duration: 2,
   };

   return (
      <div className={styles.container}>
         <motion.div
            animate={props.result.length > 2 ? "open" : "closed"}
            variants={variants}
            exit={exitVariants}
            className={styles.content}
         >
            <ImagePopUp alt={result.strMeal} image={result.strMealThumb} />

            <div className={styles.contentRight}>
               <p>
                  <b>Category: </b>
                  {props.category}
               </p>
               <h1>{result.strMeal}</h1>
            </div>
         </motion.div>
      </div>
   );
}

export default Result;
