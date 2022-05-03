import { useState } from "react";
import Button from "../../components/Button/Button";
import Result from "../../components/Result/Result";
import styles from "./Recipe.module.scss";

import noMeat from "../../assets/no-meat.svg"; // relative path to image
import meat from "../../assets/meat.svg"; // relative path to image
import random from "../../assets/random.svg"; // relative path to image
import Overlay from "../../components/Overlay/Overlay";
import { motion, MotionConfig } from "framer-motion";

function Recipe() {
   const [title, setTitle] = useState("");
   const [fetching, setFetching] = useState(false);
   const [showResult, setShowResult] = useState(false);
   const [result, setResult] = useState("");

   function randomNumber(length: number) {
      const rand = Math.random() * length;
      return Math.floor(rand);
   }

   const getMeat = async () => {
      setResult("");
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
            setTitle("meat");
            setResult(meals[randomNumber(length)]);
            setShowResult(true);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const getNoMeat = async () => {
      setResult("");

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
            setTitle("no meat");
            setResult(meals[randomNumber(length)]);
            setShowResult(true);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const getRandom = async () => {
      setResult("");

      const response = await fetch(
         "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const result = await response.json();
      setTitle("random");
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
            <div className={styles.grid}>
               {/* <h1>What do you wanna eat?</h1> */}

               <motion.ul
                  className={styles.optionsInner}
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
            </div>

            <Overlay opacity={0.3} />
         </div>

         {showResult && (
            <Result
               onClick={() => {
                  setShowResult(false), setResult("");
               }}
               type="recipe"
               result={JSON.stringify(result)}
            />
         )}
      </div>
   );
}

export default Recipe;
