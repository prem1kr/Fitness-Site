import React from 'react';

const AddToCart = ({ cart, onUpdateQuantity, onCheckout }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <div className="quantity-controls">
                <button
                  onClick={() => onUpdateQuantity(item.id, 'decrease')}
                  className="quantity-btn"
                  disabled={item.quantity === 0}
                >
                  -
                </button>
                <span className="item-quantity">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, 'increase')}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          <button onClick={onCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default AddToCart;
