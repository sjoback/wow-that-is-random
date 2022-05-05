import styles from "./InfoBot.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import github from "../../assets/github.webp";
import linked from "../../assets/linked.webp";
import avatar from "../../assets/avatar.webp";

function InfoBot() {
   const [open, toggleOpen] = useState(false);

   const classes = `${styles.container} ${open ? styles.open : styles.closed}`;

   const socials = [
      {
         name: "Github",
         link: "https://github.com/sjoback",
         icon: github,
      },
      {
         name: "Portfolio",
         link: "https://joakim.netlify.app/",
         icon: avatar,
      },
      {
         name: "LinkedIn",
         link: "https://www.linkedin.com/in/joakim-sj%C3%B6b%C3%A4ck-8089a0110/",
         icon: linked,
      },
   ];

   const container = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
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
                        <motion.img
                           variants={item}
                           src={social.icon}
                           alt={social.name}
                           loading="lazy"
                        />
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

         {/* {open && <div className={styles.open}>im open</div>} */}
      </div>
   );
}

export default InfoBot;
