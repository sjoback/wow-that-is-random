import styles from "./InfoBot.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faRobot,
   faClose,
   faBuildingUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

function InfoBot() {
   const [open, toggleOpen] = useState(false);
   const classes = `${styles.container} ${open ? styles.open : styles.closed}`;
   const socials = [
      {
         name: "Github",
         link: "https://github.com/sjoback",
         icon: faGithub,
      },
      {
         name: "Portfolio",
         link: "https://joakim.netlify.app/",
         icon: faBuildingUser,
      },
      {
         name: "LinkedIn",
         link: "https://www.linkedin.com/in/joakim-sj%C3%B6b%C3%A4ck-8089a0110/",
         icon: faLinkedinIn,
      },
   ];

   const container = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            delay: 0.3,
            staggerChildren: 0.3,
         },
      },
   };

   const item = {
      hidden: { opacity: 0, x: 20 },
      show: { opacity: 1, x: 0 },
   };

   return (
      <div className={classes}>
         {open && (
            <motion.div
               variants={container}
               initial="hidden"
               animate="show"
               className={styles.socials}
            >
               {socials.map((social) => {
                  return (
                     <a
                        href={social.link}
                        rel="noreferrer"
                        target="_blank"
                        key={social.name}
                     >
                        <motion.div variants={item}>
                           <FontAwesomeIcon
                              style={{ fontSize: 22, color: "#fff" }}
                              icon={social.icon}
                           />
                        </motion.div>
                     </a>
                  );
               })}
            </motion.div>
         )}

         <div
            onClick={() => toggleOpen((open) => !open)}
            className={styles.bot}
         >
            {open ? (
               <FontAwesomeIcon icon={faClose} />
            ) : (
               <FontAwesomeIcon icon={faRobot} />
            )}
         </div>
      </div>
   );
}

export default InfoBot;
