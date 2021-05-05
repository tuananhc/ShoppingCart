import React from 'react';
import { Link } from 'react-router-dom';
import './checkout.css'

export default function checkout() {
  return (
    <body className='checkoutBody'>
      <p>Thanks for shopping at shop X</p>
      <Link to="/">Back to main page</Link>
    </body>
  )
}