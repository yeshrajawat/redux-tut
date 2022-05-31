import React, { useEffect, useState } from 'react';
import './Products.scss';
import { add } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';
 import { STATUS } from '../../store/productSlice';

const Products = () => {

    const {data:products,status}  = useSelector((state) => state.product);

    const dispatch = useDispatch();
    
    useEffect(()=> {
        //  const fetchProducts = async()=> {
        //     const res = await fetch('https://fakestoreapi.com/products/')
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);

        // }
        // fetchProducts();
        dispatch(fetchProducts());
    },[]);

    const handleAdd = (product) => {

        dispatch(add(product));

    }

    if(status === STATUS.LOADING){
        console.log(status);
        return (
            <h2>Loading.....</h2>
        );
    }
    else if(status === STATUS.ERROR){
        return (
            <h2>Error</h2>
        )
    }
    return (
    <div className='productsWrapper'>

            
        {products.map( (product) =>  {

          return  <div className="card" key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button className='btn' onClick={()=> handleAdd(product)}>Add to Cart</button>
            </div>
        }
            
        )}
    </div>
  )
}

export default Products