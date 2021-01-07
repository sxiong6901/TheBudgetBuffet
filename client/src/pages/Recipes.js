import React from "react";

const Recipes = ({title, image, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <img src={image} alt="" />
        </div>
    )
};

export default Recipes