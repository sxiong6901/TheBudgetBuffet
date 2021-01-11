import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const Recipes = ({title, image, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                    
                ))}
            </ol>
          
            <img src={image} alt="" /><hr></hr>
        </div>
    )
};

export default Recipes
