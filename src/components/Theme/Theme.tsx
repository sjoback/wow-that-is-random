import { useEffect, useState } from "react";
import styles from "./Theme.module.scss";

function Theme() {
   const [theme, toggleTheme] = useState("orange");

   function handleClick() {
      if (theme == "orange") {
         document.body.classList.remove(`theme-orange`);
         toggleTheme("purple");
         document.body.classList.add(`theme-purple`);
      } else {
         document.body.classList.remove(`theme-purple`);
         toggleTheme("orange");
         document.body.classList.add(`theme-orange`);
      }
   }

   useEffect(() => {
      document.body.classList.add(`theme-${theme}`);
   }, []);

   const buttonPosition = `${styles.button} ${
      theme == "purple" ? styles.right : ""
   } ${theme == "orange" ? styles.left : ""}`;

   return (
      <div onClick={handleClick} className={styles.container}>
         <div className={buttonPosition}></div>
      </div>
   );
}

export default Theme;
