import React from 'react'
import "../App.css"
const Home = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../carousel1.jpg" class="d-block w-100" alt="Delicious Dish"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Delicious Dishes</h5>
        <p>Explore the best recipes curated just for you.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../carousel2.jpg" class="d-block w-100" alt="Healthy Meals"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Healthy & Nutritious</h5>
        <p>Cook meals that are both tasty and good for you.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../carousel3.jpg" class="d-block w-100" alt="Quick Recipes"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Quick & Easy Recipes</h5>
        <p>Save time with our simple and quick meal ideas.</p>
      </div>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/ban.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Veg Recipes</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/ban.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/ban.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/ban.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
