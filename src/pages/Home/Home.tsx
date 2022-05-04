import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import bag from "../../assets/hot-pot.webp";
import wo from "../../assets/wo.svg";

function Home() {
   return (
      <div className={styles.container}>
         <div className={styles.containerButtons}>
            <Link to="/recipe" className="btn-icon">
               <img src={bag} alt="Meat" loading="eager" />
            </Link>

            <Link to="/workout" className="btn-icon">
               <img src={wo} alt="Meat" loading="eager" />
            </Link>
         </div>
      </div>
   );
}

export default Home;
