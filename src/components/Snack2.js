import React from 'react';
import { Link } from 'react-router-dom';
import './Snack2.css';  // Import CSS file

const Snack2 = () => {
  return (
    <div className="snack-container">
      <h2>Mandarin Oranges</h2>
      <img src="https://png.pngtree.com/png-clipart/20191119/ourmid/pngtree-group-of-fresh-mandarin-orange-isolated-on-transparent-png-image_1952965.jpg" alt="Mandarin Oranges" /> {/* Replace with actual image URL */}
      <p>Mandarin oranges are small, sweet citrus fruits that are easy to peel and a great snack option.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack2;