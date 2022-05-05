import { useState } from "react";
import Result from "../../components/Result/Result";
import styles from "./Recipe.module.scss";
import noMeat from "../../assets/no-meat.svg";
import meat from "../../assets/meat.svg";
import random from "../../assets/random.svg";
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

   const list = {
      show: {
         transition: {
            duration: 0.2,
         },
         opacity: 1,
         scale: 1,
      },
      hidden: {
         transition: {
            duration: 0.2,
         },
         scale: 0.95,
         opacity: 1,
      },
   };

   return (
      <div className={styles.container}>
         <div className={styles.containerOptions}>
            <motion.ul
               className={styles.list}
               variants={list}
               initial="hidden"
               animate="show"
            >
               <motion.li
                  key="no meat"
                  className="btn-icon"
                  onClick={getNoMeat}
               >
                  <img src={noMeat} alt="No meat" loading="eager" />
               </motion.li>

               <motion.li key="meat" className="btn-icon" onClick={getMeat}>
                  <img src={meat} alt="Meat" loading="eager" />
               </motion.li>

               <motion.li key="random" className="btn-icon" onClick={getRandom}>
                  <img src={random} alt="Random" loading="eager" />
               </motion.li>
            </motion.ul>
         </div>

         {showResult && (
            <Result
               onClick={() => {
                  setShowResult(false);
               }}
               category={category}
               type="recipe"
               result={JSON.stringify(result)}
            />
         )}
      </div>
   );
}

export default Recipe;
