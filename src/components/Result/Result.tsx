import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react';
import styles from './Result.module.scss'
import ResultRecipe from './ResultRecipe/ResultRecipe';
import ResultWorkout from './ResultWorkout/ResultWorkout';

interface propTypes {
    type: string;
}

function Result(props: propTypes){
    const type = props.type;

    const Components = {
        recipe: ResultRecipe,
        workout: ResultWorkout
    }
   
    // if (typeof Components[type] !== "undefined") {
    // return React.createElement(Components[type]);
    // }

    render{

        return (
            <div className={styles.container}>
                {type}
                <Component />
            </div>
        )
    }
  }


export default Result