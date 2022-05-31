import React from 'react'
import './Navbar.scss';
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="left">
        <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" />
        </div>
       
        <div className="right">
            <p>Home</p>
            <p>Cart</p>
            <p style={{"fontWeight":"bold"}}>CART ITEMS: <span>0</span></p>
        </div>
    </div>
  )
}

export default Navbar