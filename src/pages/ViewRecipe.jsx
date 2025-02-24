import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../ViewRecipe.css";
import recipes from './recipes';


const ViewRecipe = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const recipeId = parseInt(searchParams.get('id'), 10); // Get the ID from the URL

    const [recipe, setRecipe] = useState(null); // State to hold recipe data

    useEffect(() => {
        const selectedRecipe = Object.values(recipes).flat().find(recipe => recipe.id === recipeId);

        if (selectedRecipe) {
            setRecipe(selectedRecipe);
        } else {
            console.error("Recipe not found!");
        }
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading...</div>; // Or a "Recipe not found" message
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={recipe.image} className="img-fluid rounded recipe-image" alt={recipe.title} />
                </div>
                <div className="col-md-6">
                    <h1 id='h1'>{recipe.title}</h1>
                    <div className="d-flex align-items-center">
                        <div className="rating">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < recipe.rating ? "text-warning" : "text-secondary"} style={{marginRight: "3px"}}>★</span>
                            ))}
                        </div>
                        <span className="ms-2">({recipe.ratingCount} ratings)</span>
                    </div>
                    <p className="mt-2">{recipe.description}</p>

                    <div className="row"> {/* Prep/Cook/Servings */}
                        <div className="col-md-4">
                            <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Servings:</strong> {recipe.servings}</p>
                        </div>
                    </div>

                    <div className="row"> {/* Cuisine/Category/Dietary */}
                        <div className="col-md-4">
                            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Category:</strong> {recipe.category}</p>
                        </div>
                        <div className="col-md-4">
                            {recipe.dietaryInfo && (
                                <p><strong>Dietary Info:</strong> {recipe.dietaryInfo.join(", ")}</p>
                            )}
                        </div>
                    </div>


                    <h2 id='h2'>Ingredients</h2>
                    <ul className="ingredients-list">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient.quantity} {ingredient.name}
                                {ingredient.notes && ` (${ingredient.notes})`}
                            </li>
                        ))}
                    </ul>

                    <h2>Instructions</h2>
                    <ol className="instructions-list">
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>

                    {recipe.nutritionalInfo && (
                        <div className="nutritional-info">
                            <h2>Nutritional Information (per serving)</h2>
                            <ul>
                                {Object.entries(recipe.nutritionalInfo).map(([key, value]) => (
                                    <li key={key}>{key}: {value}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* {recipe.video && ( // Conditionally render video if available
                        <div className="mt-3">
                            <iframe 
                                width="100%" 
                                height="315" 
                                src={recipe.video} 
                                title="Recipe Video" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    )} */}

                    <button className="btn btn-primary mt-3">Print Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default ViewRecipe;