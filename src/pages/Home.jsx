import React from 'react'
import "../App.css"
import "./recipes";

const Home = () => {
    const recipes = {
      topRated: [
          { id: 1, title: 'Delicious Pasta', image: '../pasta.jpg', rating: 4.5 },
          { id: 2, title: 'Spicy Tacos', image: '../tacos.jpg', rating: 4.2 },
          { id: 3, title: 'Pumpkin Cupcakes', image: '../cakes.jpg', rating: 4.5 },
          { id: 4, title: 'Apple Pie', image: '../pie.jpg', rating: 4.2 },
          { id: 5, title: 'Best Lasagna', image: '../lasagna.jpg', rating: 4.5 },
          { id: 6, title: 'Harira', image: '../harira.jpg', rating: 4.2 }
      ],
      trending: [
          { id: 7, title: 'Vegan Curry', image: '../curry.jpg', rating: 4.8 },
          { id: 8, title: 'Chocolate Cake', image: '../choco.jpg', rating: 4.7 },
          { id: 9, title: 'corn fritters', image: '../corn.jpg', rating: 4.8 },
          { id: 10, title: 'Bread Cheese Lollipop', image: '../lollipop.jpg', rating: 4.7 },
          { id: 11, title: 'Sweet Potato Boats', image: '../boats.jpg', rating: 4.8 },
          { id: 12, title: 'Walnut Chikki', image: '../chikki.jpg', rating: 4.7 }
      ],
      newest: [
          { id: 13, title: 'Summer Salad', image: '../salad.jpg', rating: 4.0 },
          { id: 14, title: 'Grilled Salmon', image: '../salmon.jpg', rating: 4.3 },
          { id: 15, title: 'Loco Moco', image: '../loco.jpg', rating: 4.0 },
          { id: 16, title: 'Cinnamon Roll Casserole', image: '../toast.jpg', rating: 4.3 },
          { id: 17, title: 'Frikadellen', image: '../Frikadellen.jpg', rating: 4.0 },
          { id: 18, title: 'coffe jelly', image: '../jelly.jpg', rating: 4.3 }
      ],
    };

    const renderRecipes = (recipeType) => (
      <div className="d-flex flex-nowrap overflow-auto">
          {recipes[recipeType].map((recipe) => (
              <div key={recipe.id} className="col-md-3 mb-4 me-4">
                  <div className="card">
                      <img
                          src={recipe.image}
                          className="card-img-top"
                          alt={recipe.title}
                      />
                      <div className="card-body">
                          <h5 className="card-title">{recipe.title}</h5>
                          <p className="card-text">Rating: {recipe.rating}</p>
                          <a href={`/ViewRecipe?id=${recipe.id}`} className="btn btn-primary">
                            View Recipe
                          </a>
                      </div>
                  </div>
              </div>
          ))}
      </div>
  );

    return (
      <div>
        <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../carousel1.jpg" className="d-block w-100" alt="Recipe 1" style={{objectFit:"cover", height:"500px"}}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Delicious Dishes</h5>
                <p>Explore a world of culinary delights.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../carousel2.jpg" className="d-block w-100" alt="Recipe 2" style={{objectFit:"cover", height:"500px"}}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Healthy & Nutritious</h5>
                <p>Discover recipes that nourish your body and soul.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../carousel3.jpg" className="d-block w-100" alt="Recipe 3" style={{objectFit:"cover", height:"500px"}}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Quick & Easy</h5>
                <p>Whip up delicious meals in minutes.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#recipeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#recipeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container mt-4">
                <h2><b>Top Rated Recipes</b></h2>
                {renderRecipes('topRated')}

                <h2><b>Trending Recipes</b></h2>
                {renderRecipes('trending')}

                <h2><b>Newest Recipes</b></h2>
                {renderRecipes('newest')}
        </div>
        <footer className="bg-dark text-light mt-5 py-4">
    <div className="container">
        <div className="row">
            <div className="col-md-4 mb-3">
                <h5>About Foodio</h5>
                <p>A collaborative recipe sharing platform designed to make cooking a social experience. Join our community of culinary enthusiasts!</p>
            </div>
            <div className="col-md-4 mb-3">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#" className="text-light text-decoration-none">Top Rated</a></li>
                    <li><a href="#" className="text-light text-decoration-none">Trending</a></li>
                    <li><a href="#" className="text-light text-decoration-none">Submit Recipe</a></li>
                    <li><a href="#" className="text-light text-decoration-none">Community</a></li>
                </ul>
            </div>
            <div className="col-md-4 mb-3">
                <h5>Connect With Us</h5>
                <div className="d-flex gap-3">
                    <a href="#" className="text-light"><i className="bi bi-facebook fs-4"></i></a>
                    <a href="#" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
                    <a href="#" className="text-light"><i className="bi bi-twitter fs-4"></i></a>
                    <a href="#" className="text-light"><i className="bi bi-pinterest fs-4"></i></a>
                </div>
            </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
            <p className="mb-0">© 2024 Foodio. All rights reserved.</p>
        </div>
    </div>
</footer>

      </div>
    );
};

export default Home
