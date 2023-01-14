import React from 'react'
import "./Home.css";

function Home() {
  return (
    <div>
<body>
<div class="containerDesktop">
  <img src="https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg" alt="car1" style="width:100%;"> </img>
    <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy" alt="car2" style="width:100%;"> </img>
  <img src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg" alt="car3" style="width:100%;"> </img>
</div>

<div class="containerMobile">
<h2>Carousel Example</h2>  
<div id="myCarousel" class="carousel slide" data-ride="carousel">

  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>

  <div class="carousel-inner">
    <div class="item active">
      <img src="https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg" alt="car1" style="width:100%;"> </img>
    </div>

    <div class="item">
      <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy" alt="car2" style="width:100%;">
      </img>
    </div>

    <div class="item">
      <img src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg" alt="car3" style="width:100%;">
      </img>
    </div>

  <div class="item">
      <img src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg" alt="car4" style="width:100%;">
      </img>
    </div>
  </div>

  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>
</div>

<main>
    <article>
        <h1> Mi visión </h1>
        <p> Mi propósito es ayudarte a crear tu mejor versión: con practicas de yoga adecuadas a tus tiempos y adaptadas a lo que necesites, combinadas con técnicas de cuidados corporales amables.</p>
    </article>
</main>
</body>
    </div>
  )
}

export default Home