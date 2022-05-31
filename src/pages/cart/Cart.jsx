import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.scss'
import { remove } from '../../store/cartSlice'

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    console.log(id);
    console.log(products);
      dispatch(remove(id));      
  }

  return (
    <div className='cart'>
      <h3>Cart</h3>

      <div className='cartWrapper'>

        {
        products.map((product) =>{
          return <div className="cartCard" key={product.id}>
                    <img src={product.image} alt="" />
                    <h5>{product.title}</h5>
                    <h5 style={{"color":"gray"}}>{product.price}</h5>
                    <button className='btn' onClick={()=> removeProduct(product.id)}>Remove</button>
                </div>
        })
        }

      </div>

    </div>
    
  )
}

export default Cart