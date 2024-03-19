/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ProductsInPage(props){
      const { onAdd } =props
      const [isAddedToCart, setIsAddedToCart] = useState(false)
      const changeButton = (product)=>{
        product.setIsAddedToCart(!isAddedToCart)
      }
      
const products = 
[
 {
   id: 1,
   name: "Naruto Uzumaki Figurine",
   description: "This detailed figure depicts Naruto Uzumaki in his iconic ninja attire, ready for battle.",
   imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yGlcRqH-EKmtLZROguSeGZ65QLJwg6YRDhrZDQpUnWAsbI4NdLzAUzPy97NeweTA5A0&usqp=CA" ,
   price: 29.99
 },
 {
   id: 2,
   name: "Sailor Moon Figurine",
   description: "A beautiful figurine featuring Sailor Moon in her signature pose with her magical wand.",
   imageurl: "https://img.amiami.com/images/product/review/144/FIGURE-009399_23.jpg",
   price: 34.99
 },
 {
   id: 3,
   name: "Goku Super Saiyan Figurine",
   description: "Experience the power of Goku as a Super Saiyan with this dynamic and action-packed figure.",
   imageurl: "https://nerdarena.in/cdn/shop/products/dragon-ball-z-shfiguarts-goku-a-saiyan-raised-on-earth-955421.jpg?v=1571242410",
   price: 39.99
 },
 {
   id: 4,
   name: "Mikasa Ackerman Figurine",
   description: "A stunning statue capturing the strength and beauty of Mikasa Ackerman from Attack on Titan.",
   imageurl: "https://midorigifts.com/cdn/shop/files/0715eb3a7415855c4b27f0401fb6c3f1.jpg",
   price: 49.99
 },
 {
   id: 5,
   name: "Luffy Action Figurine",
   description: "Join the adventure with this dynamic action figure of Monkey D. Luffy from One Piece.",
   imageurl: "https://www.impericon.com/432x624x90/media/catalog/product/a/b/abyfig008_lg.jpg" ,
   price: 27.99,
 },
 {
   id: 6,
   name: "Zero Two PVC Figurine",
   description: "An adorable PVC figure of Zero Two from Darling in the Franxx, capturing her playful demeanor.",
   imageurl: "https://images-cdn.ubuy.co.in/633fcbe3174ea60f373c7fe5-sega-darling-in-the-franxx-zero-two.jpg",
   price: 44.99
 },
 {
   id: 7,
   name: "Sasuke Uchiha Figurine",
   description: "Display the brooding Sasuke Uchiha in your collection with this finely detailed figurine.",
   imageurl: "https://rukminim2.flixcart.com/image/850/1000/kw85bww0/action-figure/p/k/k/6-naruto-anime-sasuke-uchiha-c-action-figure-20-cm-for-home-original-imag8ygv3gxcvgyk.jpeg",
   price: 32.99
 },
 
 {
   id: 9,
   name: "Levi Ackerman Figurine",
   description: "Capture the intensity of Levi Ackerman from Attack on Titan with this captivating statue.",
   imageurl: "https://thegroovygaijin.com/cdn/shop/files/S8ad4e1dc7dd2490ab51d9a4be36fd5b7u_028b5eb9-547c-4dbc-8578-672ae70cd504_1800x1800.webp?",
   price: 47.99
 },
 {
   id: 10,
   name: "Asuna Action Figurine",
   description: "Asuna from Sword Art Online comes to life in this action-packed figure, ready for battle.",
   imageurl: "https://i.pinimg.com/564x/60/e1/d5/60e1d5da55b1ea20220b3454b18e9adf.jpg",
   price: 38.99
 }
];

         
    return(
        <>
        
        <div className="header">
          <h1>Shop in style</h1>
          <p className="subtitle">with this shop homepage template</p>
        </div>
        <div className="container">
        { products.map( (product)=>
        <div key={product.id}>
            <Card style={{width: "18rem", height:"min-content"}}> 
            <Card.Img className='image' variant="top" src={product.imageurl} style={{height:'200px'}}  />
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                <p>{product.description}</p>
                <h5> PRICE: ${product.price}</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{onAdd(product);changeButton(product);}} >{isAddedToCart? 'Remove from Cart': 'Add to Cart'}</Button>
      </Card.Body>
    </Card>
    </div>
    
    
        ) }
        </div>
    </>
    )
}
export default ProductsInPage;