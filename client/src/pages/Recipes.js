import React from "react";
<<<<<<< HEAD
import Carousel from 'react-bootstrap/Carousel'
=======
>>>>>>> cdbe3cd89ad8fa306af327f52c660a1e9b15867f

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