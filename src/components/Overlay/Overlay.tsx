import styles from "./Overlay.module.scss";

interface propTypes {
   opacity?: 0.1;
}

function Overlay(props: propTypes) {
   return (
      <div style={{ opacity: props.opacity }} className={styles.container} />
   );
}

export default Overlay;
