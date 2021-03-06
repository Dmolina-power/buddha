import React from "react";
import "./style.css";


function Sidebar(){
    return(
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
            <span class="fs-4"></span>
            </a>
            <hr></hr>
            <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/" class="nav-link" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use href="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="/about" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use href="#speedometer2"></use></svg>
          About
        </a>
      </li>
      <li>
        <a href="/contact" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use href="#table"></use></svg>
         Contact
        </a>
      </li>
      <li>
        <a href="/shoppingCart" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use href="/shoppingCart"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use href="#people-circle"></use></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr></hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
        </div>

    )
}


export default Sidebar;









