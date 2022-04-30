import styles from './Result.module.scss'

function Result({type}){
 return (
     <div className={styles.container}></div>
     {type}
 )
}

export default Result