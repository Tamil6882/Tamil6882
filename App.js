import React from 'react'
import Card from "./card"
import Carditems from "./carditems"
import './App.js'
import {useState,handleRemoveCart} from 'react'

function App() {
  let product = [
    {
      id: 1,
      name: 'BMW',
      text: 'Nice Car',
      price: '1000',

    },
    {
      id: 2,
      name: 'AUDI',
      price: '3000',
      text: 'Nice Car',

    },
    {
      id: 3,
      name: 'TATA',
      text: 'Nice Car',
      price: '10000',

    },
    {
      id: 4,
      name: 'MAHINDRA',
      text: 'Nice Car',
      price: '3000',

    },
    {
      id: 5,
      name: 'RENAULT',
      text: 'Nice Car',
      price: '20000',

    },
    {
      id: 6,
      name: 'INDICA',
      text: 'Nice Car',
      price: '1500',
    },
    {
      id: 7,
      name: 'MOTO',
      text: 'Nice Car',
      price: '2000',
    },
    {
      id: 8,
      name: 'BENZ',
      text: 'Nice Car',
      price: '1000',
    }
  ]

  const [cartitems,setCartItems]= useState([]);
  const [ total,setTotal]=useState(0);

  let handleCart=(item)=>{
    setCartItems([...cartitems,item]);
    setTotal(total+item.price);
  }
  let handleRemoveCart =(item) =>{
    let itemIndex=cartitems.findIndex(obj => item.id=== obj.id);
    cartitems.splice(itemIndex,1);
    setCartItems([...cartitems])
    setTotal(total-item.price);
  }
  
  
  return (
    <div class="header">
      <div class="container">
        <div class="row">
          <div className='col-lg-9'>
            <div className='row'>
              {product.map((product) => {
                return <Card product={product}  handleCart={handleCart} />
              }
              )}
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='r11' style={{ textAlign: 'center' }}>
              <h2>Cart</h2>
            </div>
            <ol class="list-group list-group-numbered">
             {cartitems.map((item)=>{
               return<Carditems item={item} handleRemoveCart={handleRemoveCart}/>
             })}
            </ol>
            <h2>Total:Rs.{total}</h2>
          </div>
        </div>

      </div>

    </div >
  )
}

export default App