import React from 'react';
import '../profile.css'; // Import the CSS file

const Profile = () => {
  const userRecipes = [
    { id: 1, title: "Pasta Carbonara", image: "ban.jpg" },
    { id: 2, title: "Chicken Curry", image: "ban.jpg" },
    { id: 3, title: "Berry Smoothie", image: "ban.jpg" },
  ];

  return (
    <div className="profile-page">
      <div className="banner">
        <img src="ban.jpg" alt="Profile Banner" />
      </div>
      
      <div className="profile-content">
        <div className="profile-header">
          <img 
            src="ban.jpg" 
            alt="Profile" 
            className="profile-image"
          />
          <h1 className="username">John Doe</h1>
          {/* <button className="my-recipes-btn">My Recipes</button> */}
        </div>

        <div className="recipes-grid">
          <h2>My Recipes</h2>
          <div className="recipes-container">
            {userRecipes.map(recipe => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                <div className="recipe-info">
                  <h3>{recipe.title}</h3>
                  <div className="recipe-actions">
                    <a className="edit-btn" href="/AddRecipe">Edit</a>
                    <button className="delete-btn">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;