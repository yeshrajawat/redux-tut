import React from 'react'
import Products from '../../component/products/Products'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
        <h2 className='heading'> Welcome to the redux toolkit store</h2>
        <section>
            <h3>Products</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home