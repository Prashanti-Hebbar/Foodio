import React from 'react'
import "../navbar.css"
const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/Home">FOODIO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/Home">Home</a>
      </li>

      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dashboard
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/Categories">Categories</a></li>
    <li><a class="dropdown-item" href="/AddRecipe">Add New Recipe</a></li>
    {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
  </ul>
</div>


      <li class="nav-item">
        <a class="nav-link" href="/About">About</a>
      </li>
    </ul>
    <form class="form-inline d-flex align-items-center">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <a class="loginlink" href="/login">Login </a><a class="reglink" href="/register"> Register</a>
    <a class="myprofile" href="/profile"><i class="fas fa-user"></i></a>

  </div>
</nav>
</div>
  )
}

export default Navbar