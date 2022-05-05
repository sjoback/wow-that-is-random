import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ImagePopUp.module.scss";

interface propTypes {
   image: string;
   alt: string;
}

function ImagePopUp(props: propTypes) {
   const [open, toggleOpen] = useState(false);

   const imageContainer = {
      show: {
         display: "flex",
         opacity: 1,
      },
      hidden: {
         display: "none",
         opacity: 0,
      },
   };

   const escFunction = useCallback((event: { keyCode: number }) => {
      if (event.keyCode === 27) toggleOpen(false);
   }, []);

   useEffect(() => {
      document.addEventListener("keydown", escFunction);

      return () => {
         document.removeEventListener("keydown", escFunction);
      };
   }, [escFunction]);

   return (
      <div className={styles.container}>
         <div className={styles.closed} onClick={() => toggleOpen(true)}>
            <img src={props.image} loading="lazy" alt={props.alt} />
         </div>

         {open && (
            <motion.div
               initial="hidden"
               animate="show"
               variants={imageContainer}
               className={styles.open}
               onClick={() => toggleOpen(false)}
            >
               <div>
                  <img src={props.image} loading="lazy" alt={props.alt} />
               </div>
            </motion.div>
         )}
      </div>
   );
}

export default ImagePopUp;
