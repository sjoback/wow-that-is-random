import { useEffect, useState } from "react";
import Overlay from "../Overlay/Overlay";
import styles from "./ImagePopUp.module.scss";

interface propTypes {
   image: string;
   alt: string;
}

function ImagePopUp(props: propTypes) {
   const [open, toggleOpen] = useState(false);

   // Enable ESC for closing modal
   // useEffect(() => {
   //    const close = (e) => {
   //       if (e.keyCode === 27) {
   //          toggleOpen(false);
   //       }
   //    };
   //    window.addEventListener("keydown", close);
   //    return () => window.removeEventListener("keydown", close);
   // }, []);

   return (
      <div className={styles.container}>
         <div className={styles.closed} onClick={() => toggleOpen(true)}>
            <img src={props.image} loading="eager" alt={props.alt} />
         </div>

         {open && (
            <div className={styles.open} onClick={() => toggleOpen(false)}>
               <Overlay opacity={0.1} />
               <img src={props.image} loading="lazy" alt={props.alt} />
            </div>
         )}
      </div>
   );
}

export default ImagePopUp;
