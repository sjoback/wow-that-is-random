import { useState } from "react";
import Button from "../../components/Button/Button";
import Result from "../../components/Result/Result";
import styles from "./Recipe.module.scss";

import noMeat from "../../assets/no-meat.svg"; // relative path to image
import meat from "../../assets/meat.svg"; // relative path to image
import random from "../../assets/random.svg"; // relative path to image
import Overlay from "../../components/Overlay/Overlay";

function Recipe() {
   const [title, setTitle] = useState("");
   const [fetching, setFetching] = useState(false);
   const [showResult, setShowResult] = useState(false);
   const [result, setResult] = useState({});

   function randomNumber(length: number) {
      const rand = Math.random() * length;
      return Math.floor(rand);
   }

   const getMeat = async () => {
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
      const response = await fetch(
         "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const result = await response.json();
      setTitle("random");
      setResult(result.meals[0]);
      setShowResult(true);
   };

   const optionsClasses = `${styles.containerOptions} ${
      showResult ? styles.showResult : styles.hideResult
   }`;

   return (
      <div className={styles.container}>
         <div className={optionsClasses}>
            <div className={styles.optionsInner}>
               <div className={styles.button} onClick={getNoMeat}>
                  <img src={noMeat} alt="" />
                  {/* <span>No meat</span> */}
               </div>

               <div className={styles.button} onClick={getMeat}>
                  <img src={meat} alt="" />
                  {/* <span>Meat</span> */}
               </div>

               <div className={styles.button} onClick={getRandom}>
                  <img src={random} alt="" />
                  {/* <span>Random</span> */}
               </div>
            </div>

            <Overlay opacity={0.1} />
         </div>

         {showResult && (
            <Result type="recipe" result={JSON.stringify(result)} />
         )}
      </div>
   );
}

export default Recipe;
