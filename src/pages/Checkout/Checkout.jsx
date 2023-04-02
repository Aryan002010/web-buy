import React from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div>
      <h1>Address Form</h1>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
          />
        </div>
        <div>
          <label htmlFor='address1'>Address Line 1:</label>
          <input
            type='text'
            id='address1'
          />
        </div>
        <div>
          <label htmlFor='address2'>Address Line 2:</label>
          <input
            type='text'
            id='address2'
          />
        </div>
        <div>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            id='city'
          />
        </div>
        <div>
          <label htmlFor='state'>State:</label>
          <input
            type='text'
            id='state'
          />
        </div>
        <div>
          <label htmlFor='zip'>Zip Code:</label>
          <input
            type='text'
            id='zip'
          />
        </div>
        <Link to='/confirmed'>
          <button className='btn btn-primary'>Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default Checkout;
