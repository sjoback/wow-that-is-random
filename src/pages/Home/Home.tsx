import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import bag from "../../assets/hot-pot.webp";
import wo from "../../assets/wo.svg";
import { motion } from "framer-motion";

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
                  <img src={bag} alt="Meat" loading="eager" />
               </Link>
            </motion.li>

            <motion.li key="meat">
               <Link to="/workout" className="btn-icon">
                  <img src={wo} alt="Meat" loading="eager" />
               </Link>
            </motion.li>
         </motion.ul>
      </div>
   );
}

export default Home;
