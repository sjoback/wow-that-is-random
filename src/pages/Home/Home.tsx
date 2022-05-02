import Button from "../../components/Button/Button";
import styles from "./Home.module.scss";

function Home() {
   return (
      <main>
         <div className={styles.container}>
            <h1>What randomness are you looking for?</h1>

            <div className={styles.containerButtons}>
               <Button
                  component="link"
                  to="/recipe"
                  text="I'm hungry"
                  color="blue"
                  size="md"
               />

               <Button
                  component="link"
                  to="/workout"
                  text="I need to workout"
                  color="red"
                  size="md"
               />
            </div>
         </div>
      </main>
   );
}

export default Home;
