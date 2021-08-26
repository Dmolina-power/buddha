import React from "react";
import "./style.css";


function Card(){
    return(
        <div class="card text-center">
        <div class="card-header">
          Featured items on sale Today!
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Shop Now</a>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
    )
}


export default Card;