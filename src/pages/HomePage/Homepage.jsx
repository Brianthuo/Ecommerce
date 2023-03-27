import React, { useEffect, useState } from 'react'
import './Homepage.scss'
import Navbar from '../../Components/Navbar/Navbar'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Homepage = () => {

    const [products, setProducts]= useState([])

    //auth and token

  fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
// .then(console.log);

//get all prooducts 

useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=>{
        setProducts(data.products)
        // console.log(data.products)
    });

},[])

console.log(products)

  return (
    <div className='homepage'>
        <Navbar/>
        <div className="home-container">
        {
            products.map((products)=>{
                return(
                    <div className='product-card'>
                    <Link className='link' to={`/Product/${products&&products.id}`}>
                    <img src={products&&products.thumbnail} alt="" />
                    
                    <div className="card-content">
                    <h4>{products&&products.brand}</h4>
                    <h2>{products&&products.title}</h2>
                    <h3>$ {products&&products.price}</h3>
                    </div>
                  </Link>
                    <div className="card-button">
                    <button><AiOutlinePlus className='icon'/>Add to cart</button>
                        
                    </div>
                    
                </div>

                )
            })

        }

        </div>
    </div>
  )
}

export default Homepage