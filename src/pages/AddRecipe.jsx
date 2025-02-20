import React, { useState } from 'react';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    cuisine: '',
    category: 'appetizer',
    ingredients: '',
    instructions: '',
    prepTime: '',
    cookTime: '',
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setRecipe({ ...recipe, image: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRecipe({ ...recipe, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      setRecipe({ ...recipe, imagePreview: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in recipe) {
      formData.append(key, recipe[key]);
    }

    fetch('/submit-recipe', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., redirect, show message)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., show error message)
      });
  };

  return (
    <div>
      <h1>Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipe-name">Recipe Name:</label>
        <input type="text" id="recipe-name" name="name" value={recipe.name} onChange={handleChange} required />

        <label htmlFor="cuisine">Cuisine:</label>
        <input type="text" id="cuisine" name="cuisine" value={recipe.cuisine} onChange={handleChange} required />

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={recipe.category} onChange={handleChange} required>
          <option value="appetizer">Appetizer</option>
          <option value="main-course">Main Course</option>
          <option value="dessert">Dessert</option>
          <option value="beverage">Beverage</option>
          <option value="side-dish">Side Dish</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" value={recipe.ingredients} onChange={handleChange} rows="5" required />

        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" name="instructions" value={recipe.instructions} onChange={handleChange} rows="8" required />

        <label htmlFor="prep-time">Prep Time (minutes):</label>
        <input type="number" id="prep-time" name="prepTime" value={recipe.prepTime} onChange={handleChange} required />

        <label htmlFor="cook-time">Cook Time (minutes):</label>
        <input type="number" id="cook-time" name="cookTime" value={recipe.cookTime} onChange={handleChange} required />

        <label htmlFor="image">Recipe Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
        {recipe.imagePreview && <img src={recipe.imagePreview} alt="Recipe preview" style={{ maxWidth: '200px', marginTop: '10px' }} />}
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;