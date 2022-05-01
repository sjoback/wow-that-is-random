import React from 'react';
import { Component } from 'react';
import styles from './Result.module.scss'
import ResultRecipe from './ResultRecipe/ResultRecipe';
import ResultWorkout from './ResultWorkout/ResultWorkout';

interface propTypes {
    type: string;
}

function Result(props: propTypes) {
    return (
        <div className={styles.container}>
            {props.type}
        </div>
    )
}

export default Result