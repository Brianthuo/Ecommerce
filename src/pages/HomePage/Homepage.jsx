import React, { useEffect, useState } from 'react'
import './Homepage.scss'
import Navbar from '../../Components/Navbar/Navbar'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import femaleWear from '../../Assets/Female wear/F10.jpg'
import malewear from '../../Assets/Malewear.jpg'


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
    fetch('http://localhost:3000/sneakers')
    .then(res => res.json())
    .then((sneakers)=>{
        setProducts(sneakers)
        // console.log(data.products)
    });

},[])

console.log(products)

  return (
    <div className='homepage'>
        <Navbar/>
        <div className="home-container">
          <div className="landing-page">
            <div className="landing-content">
              <h1>Welcome to our shoe store</h1>
              <h4> We offer a wide selection of high-quality shoes from popular brands.</h4>
            </div>
          </div>

          
          <div className="product-type">
            <h1>Types of footwear</h1>
            <div className="images">
            <div className="malewear">
              <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <h2>Nike</h2>
              <div className="overlay">
              </div>
            </div>
            <div className="femalewear">
              <img src="https://i.pinimg.com/564x/5c/d9/bb/5cd9bbed2db46ab677e4902e8152476e.jpg" alt="" />
              <div className="overlay">
                <h2>Addidas</h2>
              </div>
            </div>
            <div className="femalewear">
              <img src="https://i.pinimg.com/736x/dc/46/63/dc4663bc2e4896b2159f31d1f297a9ed.jpg" alt="" />
              <div className="overlay">
                <h2>Yeezy</h2>
              </div>
            </div>
            <div className="femalewear">
              <img src="https://i.pinimg.com/564x/a4/a8/e7/a4a8e722ad23ee2cea9ffe4fdfeedba3.jpg" alt="" />
              <div className="overlay">
                <h2>Under armour</h2>
              </div>
            </div>
            </div>
          </div>
          

        {
            products.map((products)=>{
                return(
                    <div className='product-card'>
                    <Link className='link' to={`/Product/${products&&products.id}`}>
                    <img src={products&&products.img} alt="" />
                    
                    <div className="card-content">
                    <h4>{products&&products.brand}</h4>
                    <h2>{products&&products.title}</h2>
                    <h3>Ksh {products&&products.price}</h3>
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