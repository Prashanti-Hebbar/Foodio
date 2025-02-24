import React, { useState } from 'react';
import '../../styles/Breakfast.css';

const Breakfast = () => {
    const [setSelectedRecipe] = useState(null);

  const breakfastRecipes = [
    {
        id: 1,
        title: "Poha",
        image: "../ban.jpg",
        rating: 4.7,
        prepTime: "15 minutes",
        description: "Flattened rice cooked with onions, peanuts, and spices",
        ingredients: [
          { quantity: "1 cup", name: "poha (flattened rice)" },
          { quantity: "1", name: "onion", notes: "chopped" },
          { quantity: "1", name: "green chili", notes: "chopped" },
          { quantity: "1/4 teaspoon", name: "turmeric powder" },
          { quantity: "1/2 teaspoon", name: "mustard seeds" },
          { quantity: "1 tablespoon", name: "peanuts" },
          { quantity: "1 tablespoon", name: "lemon juice" }
        ]
      },
      {
        id: 2,
        title: "Aloo Paratha",
        image: "../ban.jpg",
        rating: 4.8,
        prepTime: "25 minutes",
        description: "Stuffed potato flatbread served with butter and curd",
        ingredients: [
          { quantity: "2 cups", name: "whole wheat flour" },
          { quantity: "2", name: "potatoes", notes: "boiled & mashed" },
          { quantity: "1", name: "green chili", notes: "chopped" },
          { quantity: "1/2 teaspoon", name: "cumin powder" },
          { quantity: "1/2 teaspoon", name: "garam masala" },
          { quantity: "1/4 teaspoon", name: "salt" },
          { quantity: "1 tablespoon", name: "butter" }
        ]
      },
      {
        id: 3,
        title: "Upma",
        image: "../ban.jpg",
        rating: 4.6,
        prepTime: "20 minutes",
        description: "South Indian savory semolina porridge with vegetables",
        ingredients: [
          { quantity: "1 cup", name: "semolina (rava)" },
          { quantity: "1", name: "onion", notes: "chopped" },
          { quantity: "1", name: "green chili", notes: "chopped" },
          { quantity: "1/2 teaspoon", name: "mustard seeds" },
          { quantity: "1 tablespoon", name: "ghee" },
          { quantity: "1 cup", name: "water" },
          { quantity: "1/2 teaspoon", name: "salt" }
        ]
      },
      {
        id: 4,
        title: "Dosa",
        image: "../ban.jpg",
        rating: 4.9,
        prepTime: "30 minutes",
        description: "Crispy South Indian fermented rice and lentil crepes",
        ingredients: [
          { quantity: "2 cups", name: "rice" },
          { quantity: "1/2 cup", name: "urad dal (black gram)" },
          { quantity: "1/2 teaspoon", name: "salt" },
          { quantity: "1/2 cup", name: "water" },
          { quantity: "1 tablespoon", name: "oil", notes: "for cooking" }
        ]
      },
      {
        id: 5,
        title: "Idli",
        image: "../ban.jpg",
        rating: 4.8,
        prepTime: "20 minutes (excluding fermentation time)",
        description: "Soft steamed rice cakes served with chutney and sambar",
        ingredients: [
          { quantity: "2 cups", name: "idli rice" },
          { quantity: "1 cup", name: "urad dal (black gram)" },
          { quantity: "1 teaspoon", name: "salt" },
          { quantity: "1/2 teaspoon", name: "fenugreek seeds" },
          { quantity: "1 cup", name: "water" }
        ]
      },
      {
        id: 6,
        title: "Besan Chilla",
        image: "../ban.jpg",
        rating: 4.7,
        prepTime: "15 minutes",
        description: "Savory gram flour pancakes with spices and veggies",
        ingredients: [
          { quantity: "1 cup", name: "besan (gram flour)" },
          { quantity: "1/2 teaspoon", name: "turmeric powder" },
          { quantity: "1/2 teaspoon", name: "red chili powder" },
          { quantity: "1/2 teaspoon", name: "salt" },
          { quantity: "1", name: "onion", notes: "chopped" },
          { quantity: "1", name: "tomato", notes: "chopped" },
          { quantity: "1 tablespoon", name: "oil", notes: "for cooking" }
        ]
      }
  ];

  return (
    <div className="breakfast-wrapper">
      {/* Stylish Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Morning Delights</h1>
          <p className="hero-subtitle">Curated breakfast recipes for a perfect start</p>
          <div className="hero-highlights">
            <div className="highlight-box">
              <span className="highlight-number">25+</span>
              <span className="highlight-text">Recipes</span>
            </div>
            <div className="highlight-box">
              <span className="highlight-number">15min</span>
              <span className="highlight-text">Quick Meals</span>
            </div>
            <div className="highlight-box">
              <span className="highlight-number">4.9</span>
              <span className="highlight-text">Avg Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Filter Bar */}
      {/* <div className="filter-bar">
        <div className="search-box">
          <input type="text" placeholder="Search recipes..." />
          <span className="search-icon">🔍</span>
        </div>
        <div className="filter-tags">
          <span className="filter-tag active">All</span>
          <span className="filter-tag">Quick & Easy</span>
          <span className="filter-tag">Indian</span>
          <span className="filter-tag">Healthy</span>
          <span className="filter-tag">Continental</span>
        </div>
      </div> */}

      {/* Recipe Grid */}
      <div className="recipes-showcase">
        {breakfastRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <div className="card-media">
              <img src={recipe.image} alt={recipe.title} />
              <div className="card-badges">
                <span className="time-badge">⏱️ {recipe.prepTime}</span>
                <span className="rating-badge">★ {recipe.rating}</span>
              </div>
              <div className="card-overlay">
                <button 
                  className="view-recipe-btn"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  View Recipe
                </button>
              </div>
            </div>
            <div className="card-content">
              <h3>{recipe.title}</h3>
              <div className="recipe-tags">
                {recipe.tags?.map(tag => (
                  <span key={tag} className="recipe-tag">{tag}</span>
                ))}
              </div>
              <p className="recipe-description">{recipe.description}</p>
              <div className="recipe-footer">
                <span className="servings">🍽️ {recipe.servings} servings</span>
                <span className="difficulty">{recipe.difficulty || 'Easy'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
