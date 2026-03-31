import React, { use } from 'react';
import Card from './Card';
import Cart from './Cart';

const Cards = ({ data , products , setProducts, cart, setCart }) => {
     const dataPromise = use(data);
     console.log(dataPromise);
     return (
          <div className='container pl-9 mx-auto px-5  md:grid grid-cols-3 gap-3 '>
             {
               products ? dataPromise.map((item) => <Card key={item.id} cart={cart} setCart={setCart} item={item} />) : <Cart cart={cart} setCart={setCart} />
             }
          </div>
     );
};

export default Cards;