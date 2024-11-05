import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import './Home.css'; // Import styles for the Home component

// Sample images for the carousel
const carouselImages = [
  'https://avatars.githubusercontent.com/u/86339031?v=4',
  'https://via.placeholder.com/800x300?text=Slide+2',
  'https://via.placeholder.com/800x300?text=Slide+3',
];

function Home() {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Automatically change slides
    autoplaySpeed: 2000, // Change slides every 2 seconds
  };

  return (
    <div className="home">
      <header className="home-carousel">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%',borderRadius: '8px' }} />
            </div>
          ))}
        </Slider>
      </header>
      
      <section className="home-overview">
        <h2>About This App</h2>
        <p>
          This application is designed to showcase the capabilities of React. 
          Here, you can learn about various features of React, including components, 
          state management, and routing.
        </p>
      </section>
      
      <section className="home-features">
        <h2>Features</h2>
        <ul>
          <li>Dynamic Component Rendering</li>
          <li>Client-side Routing with React Router</li>
          <li>State Management with Hooks</li>
          <li>Responsive Design</li>
        </ul>
      </section>
      
      <footer className="home-footer">
        <p>Ready to dive deeper into React?</p>
        <button onClick={() => alert('Let’s get started!')}>Get Started</button>
      </footer>
    </div>
  );
}

export default Home;
