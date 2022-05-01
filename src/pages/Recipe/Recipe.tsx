import { useState } from 'react';
import styles from './Recipe.module.scss'

function Recipe() {
    const [fetching, setFetching] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
            'X-RapidAPI-Key': '8d423d3f85msh40e1cf5ff2656b6p14d206jsn0ba38bc45a3c'
        }
    };

    const fetchData = () => {
        setFetching(true)
        fetch('https://yummly2.p.rapidapi.com/feeds/list', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setShowResult(true)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className={styles.container}>
            <form>
                <input type="text" placeholder="Random me!" />
                <button type="button" onClick={fetchData}>click</button>
                {/* {showResult &&
                    <Result type="recipe" />
                } */}
            </form>
        </div>
    )
}

export default Recipe;