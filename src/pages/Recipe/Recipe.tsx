import { useState } from "react";
import styles from "./Recipe.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCarrot,
   faDrumstickBite,
   faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import Overlay from "../../components/Overlay/Overlay";
import ImagePopUp from "../../components/ImagePopUp/ImagePopUp";

function Recipe() {
   const [showResult, setShowResult] = useState(false);
   const [result, setResult] = useState(Object);
   const [category, setCategory] = useState(String);

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
      const res = await response.json();
      console.log(res.meals[0]);
      setResult(res.meals[0]);
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

   return (
      <div className={styles.container}>
         <AnimatePresence>
            {!showResult && (
               <motion.ul
                  className="icon-list"
                  key="list"
                  initial={{
                     opacity: 0,
                     y: "-100px",
                  }}
                  animate={{
                     opacity: 1,
                     y: "0px",
                  }}
                  transition={{
                     duration: 0.3,
                     ease: "easeOut",
                  }}
                  exit={{
                     opacity: 0,
                     y: "-100px",
                     transition: { duration: 0.3 },
                  }}
               >
                  <li key="no meat" className="btn-icon" onClick={getNoMeat}>
                     <FontAwesomeIcon icon={faCarrot} />
                  </li>

                  <li key="meat" className="btn-icon" onClick={getMeat}>
                     <FontAwesomeIcon icon={faDrumstickBite} />
                  </li>

                  <li key="random" className="btn-icon" onClick={getRandom}>
                     <FontAwesomeIcon icon={faShuffle} />
                  </li>
               </motion.ul>
            )}
         </AnimatePresence>

         <AnimatePresence>
            {showResult && (
               <div className={styles.result}>
                  <Overlay onClick={() => setShowResult(false)} opacity={0} />

                  <motion.div
                     className={styles.content}
                     key="result"
                     initial={{
                        opacity: 0,
                        y: "100px",
                     }}
                     animate={{
                        opacity: 1,
                        y: "0px",
                     }}
                     transition={{
                        duration: 0.2,
                        ease: "easeOut",
                     }}
                     exit={{
                        opacity: 0,
                        y: "100px",
                        transition: { duration: 0.2 },
                     }}
                  >
                     <div className={styles.header}>
                        <img
                           src={result.strMealThumb}
                           alt={result.strMeal}
                           loading="lazy"
                        />

                        <div className={styles.text}>
                           <h1>{result.strMeal}</h1>
                           <h3>
                              <a
                                 href={result.strSource}
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 Go to site
                              </a>
                           </h3>
                           <h3>
                              <a
                                 href={result.strYoutube}
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 Youtube
                              </a>
                           </h3>
                        </div>
                     </div>
                  </motion.div>
               </div>
            )}
         </AnimatePresence>
      </div>
   );
}

export default Recipe;
