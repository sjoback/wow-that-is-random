import styles from "./Overlay.module.scss";

interface propTypes {
   opacity?: number;
}

function Overlay(props: propTypes) {
   return (
      <div style={{ opacity: props.opacity }} className={styles.container} />
   );
}

export default Overlay;
