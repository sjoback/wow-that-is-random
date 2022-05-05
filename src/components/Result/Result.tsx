import styles from "./Result.module.scss";
import { motion } from "framer-motion";
import ImagePopUp from "../ImagePopUp/ImagePopUp";
import Overlay from "../Overlay/Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface propTypes {
   type: string;
   result: string;
   category: string;
   onClick(): void;
}

function Result(props: propTypes) {
   const [open, toggleOpen] = useState(false);
   const result = JSON.parse(props.result);

   useEffect(() => {
      if (props.result.length > 2) toggleOpen(true);
   }, []);

   function handleClick() {
      toggleOpen(false);

      setTimeout(function () {
         props.onClick();
      }, 300);
   }

   const enter = {
      show: {
         opacity: 1,
         transition: {
            duration: 0.3,
         },
      },
      hidden: {
         opacity: 0,
         transition: {
            duration: 0.3,
         },
      },
   };

   return (
      <div className={styles.container}>
         <Overlay opacity={0.2} onClick={handleClick} />

         <motion.div
            animate={open ? "show" : "hidden"}
            variants={enter}
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

            <div onClick={handleClick} className={styles.close}>
               <FontAwesomeIcon icon={faClose} />
            </div>
         </motion.div>
      </div>
   );
}

export default Result;
