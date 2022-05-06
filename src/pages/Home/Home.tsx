import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faUtensils } from "@fortawesome/free-solid-svg-icons";

function Home() {
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
         <motion.ul
            className={styles.containerButtons}
            variants={list}
            initial="hidden"
            animate="show"
         >
            <motion.li key="no meat">
               <Link to="/recipe" className="btn-icon">
                  <FontAwesomeIcon icon={faUtensils} />
               </Link>
            </motion.li>

            <motion.li key="meat">
               <Link to="/workout" className="btn-icon">
                  <FontAwesomeIcon icon={faDumbbell} />
               </Link>
            </motion.li>
         </motion.ul>
      </div>
   );
}

export default Home;
