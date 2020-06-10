import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,weburl,yielding}) => {
    return (
<div className={style.recipes}>
    <h1 className={style.title}> {title} </h1>
    <p className={style.calories}>Kalorie: {calories.toFixed(0)} </p>
    <p className={style.yielding}> Porcja dla: {yielding} </p>
    <ul className={style.ol}>Przepis będzie wymagał: {ingredients.map(ingredient =>(
        <li className={style.list}>{ingredient.text}</li>
    ))}
    </ul>
    <img className={style.image} src={image} alt="Tis a lonely road to absolution"/>
    <a className={style.weburl} href ={weburl}> Kliknij tutaj aby uzyskać pełny przepis! </a>
</div>
    );
}



export default Recipe;