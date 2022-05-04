import styles from "./Workout.module.scss";

function Workout() {
   return (
      <div className={styles.container}>
         <h1>Coming soon..</h1>
      </div>
   );
}

export default Workout;
// import { useState } from "react";
// import Result from "../../components/Result/Result";
// import styles from "./Workout.module.scss";

// import noMeat from "../../assets/no-meat.svg";
// import meat from "../../assets/meat.svg";
// import random from "../../assets/random.svg";
// import Overlay from "../../components/Overlay/Overlay";
// import { motion } from "framer-motion";

// function Workout() {
//    const [showResult, setShowResult] = useState(false);
//    const [result, setResult] = useState("");
//    const [category, setCategory] = useState("");

//    function randomNumber(length: number) {
//       const rand = Math.random() * length;
//       return Math.floor(rand);
//    }

//    const getRandom = async () => {
//       setResult("");
//       setCategory("Random");
//       const response = await fetch(
//          "https://www.themealdb.com/api/json/v1/1/random.php"
//       );
//       const result = await response.json();
//       setResult(result.meals[0]);
//       setShowResult(true);
//    };

//    const optionsClasses = `${styles.containerOptions} ${
//       showResult ? styles.showResult : ""
//    }`;

//    const list = {
//       show: {
//          opacity: 1,
//          transition: {
//             duration: 0.2,
//             when: "beforeChildren",
//             staggerChildren: 0.1,
//          },
//       },
//       hidden: {
//          opacity: 0,
//          transition: {
//             when: "afterChildren",
//          },
//       },
//    };

//    const listItem = {
//       show: { opacity: 1, scale: [0.9, 1.05, 0.975, 1] },
//       hidden: { opacity: 0, scale: 0.9 },
//    };

//    return (
//       <div className={styles.container}>
//          <div className={optionsClasses}>
//             <motion.ul
//                className={styles.list}
//                variants={list}
//                initial="hidden"
//                animate="show"
//             >
//                <motion.li
//                   variants={listItem}
//                   key="no meat"
//                   className={styles.button}
//                >
//                   <img src={noMeat} alt="No meat" loading="eager" />
//                </motion.li>

//                <motion.li
//                   variants={listItem}
//                   key="meat"
//                   className={styles.button}
//                >
//                   <img src={meat} alt="Meat" loading="eager" />
//                </motion.li>

//                <motion.li
//                   variants={listItem}
//                   key="random"
//                   className={styles.button}
//                   onClick={getRandom}
//                >
//                   <img src={random} alt="Random" loading="eager" />
//                </motion.li>
//             </motion.ul>

//             <Overlay opacity={0.5} />
//          </div>

//          {showResult && (
//             <Result
//                onClick={() => {
//                   setShowResult(false);
//                }}
//                category={category}
//                type="recipe"
//                result={JSON.stringify(result)}
//             />
//          )}
//       </div>
//    );
// }

// export default Workout;
