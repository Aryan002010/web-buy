import React from 'react';

import Card from './../../shared/Card';
import logo from '../../assets/logo.jpg';

import data from '../../MOCK/data';

import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='products'>
        {data.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
