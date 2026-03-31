import React, { use } from 'react';
import Card from './Card';
import Cart from './Cart';

const Cards = ({ data , products , setProducts }) => {
     const dataPromise = use(data);
     console.log(dataPromise);
     return (
          <div className='container pl-9 mx-auto px-5  md:grid grid-cols-3 gap-3 '>
             {
               products ? dataPromise.map((item) => <Card key={item.id} item={item} />) : <Cart />
             }
          </div>
     );
};

export default Cards;