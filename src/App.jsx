/* eslint-disable no-unused-vars */
import React from 'react'
import Navbarcomp from "./component/navbar";
import ProductsInPage from "./component/products";
import "./App.css"
import { useState } from "react";
import Cart from "./component/cart";
import { Route , Routes } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x=> x.id === product.id);
    if(exist){
      
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ?{...exist, qty: exist.qty+1}:x));
    }
    else { setCartItems([...cartItems,{...product, qty: 1}])}
  };
  const onRemove=(product)=> {
    const exist = cartItems.find((x)=> x.id === product.id)
    if (exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id!== product.id));
    } else {
      setCartItems(
      cartItems.map((x) => 
      x.id === product.id ?{...exist, qty: exist.qty - 1}:x));
  
    }
  }

  return (
    <>
    <Navbarcomp countCartItems={cartItems.length}/>
    
    <Routes>
    <Route path='/' element={<ProductsInPage onAdd ={onAdd} />}/> 
    <Route path='/cart'element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/> } />
    </Routes>
    </>
  )
}
export default App
