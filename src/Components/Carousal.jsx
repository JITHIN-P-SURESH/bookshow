import React from 'react'
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"

function Carousal() {
  return (
    
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} alt="" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src={img2} alt="" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src={img3} alt="" className="d-block w-100"/>
    </div>
  </div>

  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
  )
}

export default Carousal
