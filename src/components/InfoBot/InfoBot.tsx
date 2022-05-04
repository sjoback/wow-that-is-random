import styles from "./InfoBot.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

function InfoBot() {
   return (
      <div className={styles.container}>
         <div className={styles.bot}>
            <FontAwesomeIcon icon={faRobot} />
         </div>
      </div>
   );
}

export default InfoBot;
