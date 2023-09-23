import React from 'react';
import { Link } from 'react-router-dom';
import './Snack1.css';  // Import CSS file

const Snack1 = () => {
  return (
    <div className="snack-container">
      <h2>Oreos</h2>
      <img src="https://png.pngtree.com/png-clipart/20210724/ourmid/pngtree-oreo-cookies-png-image_3720601.jpg" alt="Oreos" /> {/* Replace with actual image URL */}
      <p>Oreos are delicious sandwich cookies consisting of two chocolate wafers with a sweet cream filling.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack1;