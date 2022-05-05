import styles from "./Overlay.module.scss";

interface propTypes {
   opacity?: number;
   onClick(): void;
}

function Overlay(props: propTypes) {
   return (
      <div
         onClick={props.onClick}
         style={{ opacity: props.opacity }}
         className={styles.container}
      />
   );
}

export default Overlay;
