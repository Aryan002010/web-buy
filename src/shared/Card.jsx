import React from 'react';

import './Card.css';

function Card({ img, title, price, id }) {
  return (
    <div className='card'>
      <div className='card-logo-container'>
        <img
          src={img}
          alt={title}
          className='card-logo'
        />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>${price}</p>
        <div className='btns'>
          <button className='btn btn-primary'>Add to Cart</button>
          <button className='btn btn-secondary'>Wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
