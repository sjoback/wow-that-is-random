import { useState } from "react";
import Result from "../../components/Result/Result";
import styles from "./Recipe.module.scss";

import noMeat from "../../assets/no-meat.svg";
import meat from "../../assets/meat.svg";
import random from "../../assets/random.svg";
import Overlay from "../../components/Overlay/Overlay";
import { motion } from "framer-motion";

function Recipe() {
   const [showResult, setShowResult] = useState(false);
   const [result, setResult] = useState("");
   const [category, setCategory] = useState("");

   function randomNumber(length: number) {
      const rand = Math.random() * length;
      return Math.floor(rand);
   }

   const getMeat = async () => {
      setResult("");
      setCategory("Meat");
      Promise.all([
         fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork"
         ).then((value) => value.json()),
         fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb"
         ).then((value) => value.json()),
         fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
         ).then((value) => value.json()),
         fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
         ).then((value) => value.json()),
      ])
         .then((value) => {
            const meals = {
               ...value[0].meals,
               ...value[1].meals,
               ...value[2].meals,
               ...value[3].meals,
            };
            const length = Object.keys(meals).length;
            getRecipeById(meals[randomNumber(length)].idMeal);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const getRecipeById = async (id: number) => {
      const response = await fetch(
         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const result = await response.json();
      console.log(result.meals[0]);
      setResult(result.meals[0]);
      setShowResult(true);
   };

   const getNoMeat = async () => {
      setResult("");
      setCategory("No meat");
      Promise.all([
         fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan"
         ).then((value) => value.json()),

         fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
         ).then((value) => value.json()),
      ])
         .then((value) => {
            const meals = {
               ...value[0].meals,
               ...value[1].meals,
            };
            const length = Object.keys(meals).length;
            getRecipeById(meals[randomNumber(length)].idMeal);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const getRandom = async () => {
      setResult("");
      setCategory("Random");
      const response = await fetch(
         "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const result = await response.json();
      setResult(result.meals[0]);
      setShowResult(true);
   };

   const optionsClasses = `${styles.containerOptions} ${
      showResult ? styles.showResult : ""
   }`;

   const list = {
      show: {
         opacity: 1,
         transition: {
            duration: 0.2,
            when: "beforeChildren",
            staggerChildren: 0.1,
         },
      },
      hidden: {
         opacity: 0,
         transition: {
            when: "afterChildren",
         },
      },
   };

   const listItem = {
      show: { opacity: 1, scale: [0.9, 1.05, 0.975, 1] },
      hidden: { opacity: 0, scale: 0.9 },
   };

   return (
      <div className={styles.container}>
         <div className={optionsClasses}>
            <motion.ul
               className={styles.list}
               variants={list}
               initial="hidden"
               animate="show"
            >
               <motion.li
                  variants={listItem}
                  key="no meat"
                  className={styles.button}
                  onClick={getNoMeat}
               >
                  <img src={noMeat} alt="No meat" loading="eager" />
               </motion.li>

               <motion.li
                  variants={listItem}
                  key="meat"
                  className={styles.button}
                  onClick={getMeat}
               >
                  <img src={meat} alt="Meat" loading="eager" />
               </motion.li>

               <motion.li
                  variants={listItem}
                  key="random"
                  className={styles.button}
                  onClick={getRandom}
               >
                  <img src={random} alt="Random" loading="eager" />
               </motion.li>
            </motion.ul>

            <Overlay opacity={0.3} />
         </div>

         {showResult && (
            <Result
               category={category}
               type="recipe"
               result={JSON.stringify(result)}
            />
         )}
      </div>
   );
}

export default Recipe;
