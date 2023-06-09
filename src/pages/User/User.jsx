import React from 'react';
import { Link } from 'react-router-dom';

import './User.css';

function User() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
          />
        </div>
        <Link to='/success'>
          <button className='btn btn-primary'>Log In</button>
        </Link>
      </form>
    </div>
  );
}

export default User;
