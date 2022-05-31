import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {


  const selector = useSelector((state) => state.cart);

  return (
    <div className='nav'>
        <div className="left">
        <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" />
        </div>
       
        <div className="right">
          <Link to='/' > <p>Home</p> </Link>  
          <Link to='/cart'> <p>Cart</p> </Link>
            <p style={{"fontWeight":"bold"}}>CART ITEMS: <span>{selector.length}</span></p>
        </div>
    </div>
  )
}

export default Navbar