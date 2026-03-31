import React from 'react';

const Cart = ({ cart, setCart }) => {
     console.log(cart);
     return (
          <div>
               {cart.length } 
          </div>
     );
};

export default Cart;