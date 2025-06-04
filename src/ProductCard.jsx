// ProductCard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity,addItem } from './CartSlice';
import './ProductCard.css'
function ProductCard({ name,cost, image,description }) {

   const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  
const handleAddItem = (item) => {
  dispatch(addItem(item)); // Correct usage
  //console.log("Item", item);
};


  const handleDecrement = (item) => {
   
  };

  const handleRemove = (item) => {
  };

  return (
    <div class="product-card">
      <img src={`${image}`} alt={cost} className="product-image" />
      <h3>{cost}</h3>
      {description && <p>{description}</p>}
      <p><strong>{cost}</strong></p>
     
<button onClick={() => handleAddItem({
  name: name,
  cost: cost,
  image: image,
  description: description,
  quantity: 1
})}>
  
  Add to Cart
</button>

    </div>
  );
}
export default ProductCard;
