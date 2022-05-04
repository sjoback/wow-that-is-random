import styles from "./Navigation.module.scss";
import logo from "../../../assets/logo.webp";

import { NavLink } from "react-router-dom";

function Navigation() {
   return (
      <nav className={styles.container}>
         <NavLink to="/">
            <img src={logo} alt="" />
         </NavLink>
         <NavLink to="/recipe">Recipe</NavLink>
         <NavLink to="/workout">Workout</NavLink>
      </nav>
   );
}

export default Navigation;
