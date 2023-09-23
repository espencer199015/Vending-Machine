import React from 'react';
import { Link } from 'react-router-dom';
import './Snack.css';  // Import CSS file

const Snack3 = () => {
  return (
    <div className="snack-container">
      <h2>Granola Bars</h2>
      <img src="https://banner2.cleanpng.com/20180616/gs/kisspng-granola-clif-bar-company-food-snack-nut-granola-bar-5b2565f21635e3.684294761529177586091.jpg" alt="Granola Bars" /> {/* Replace with actual image URL */}
      <p>Granola bars are a nutritious and convenient snack, usually made with oats, nuts, and dried fruits.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack3;