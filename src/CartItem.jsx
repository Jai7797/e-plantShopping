import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();


  // Calculate total amount for all products in the cart
 
const calculateTotalAmount = () => {
  return cart.reduce((total, item) => {
    const cost = parseFloat(item.cost.replace('$', ''));
    return total + cost * item.quantity;
  }, 0).toFixed(2);
};
  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
  const cost = parseFloat(item.cost.replace('$', ''));
  return (cost * item.quantity).toFixed(2);
};
// const totalCost = calculateTotalCost(item);
  const handleContinueShopping = (e) => {
   onContinueShopping(e)
  };



  const handleIncrement = (item) => {
  dispatch(addItem({...item,quantity:1}));
  };

  const handleDecrement = (item) => {
     dispatch(removeItem({...item,quantity:1}));
  };

  const handleRemove = (item) => {
      dispatch(removeItem(item));
  };
const [isComingSoon,setisComingSoon]=useState(false);
 const handleCheckOut = () => {
      setisComingSoon(!isComingSoon);
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
     {cart.map(item => {
  const totalCost = calculateTotalCost(item);
  return (
    <div className="cart-item" key={item.name}>
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-cost">{item.cost}</div>
        <div className="cart-item-quantity">
          <button onClick={() => handleDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>
        </div>
        <div className="cart-item-total">Total: ${totalCost}</div>
        <button onClick={() => handleRemove(item)}>Delete</button>
      </div>
    </div>
  );
})}

      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckOut}>Checkout</button>
      

      {isComingSoon && <span className="coming-soon">Coming Soon..</span>}

      </div>
    </div>
  );
};

export default CartItem;


