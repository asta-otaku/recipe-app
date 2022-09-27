import React from "react";
import style from "./recipe.module.css";

function Recipe({ label, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{label}</h1>
      <ol>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.calories}>
        <strong>Calories - </strong>
        {calories}
      </p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
}

export default Recipe;
