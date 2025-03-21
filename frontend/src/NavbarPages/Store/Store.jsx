import React, { useState, useEffect } from 'react';
import './Store.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import for navigation
import AddToCart from '../../Pages/AddToCart/AddToCart.jsx';

const Store = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State to track cart items
  const [error, setError] = useState(null);
  const [showCart, setShowCart] = useState(false); // State for cart popup
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products', {
          credentials: 'include', // Include credentials for CORS if needed
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle adding products to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to handle quantity increase or decrease
  const updateQuantity = (id, action) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          if (action === 'increase') {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === 'decrease') {
            // Decrease quantity, and remove the item if quantity is 0
            if (item.quantity === 1) {
              return null; // Mark the item for removal
            }
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      }).filter(item => item !== null); // Remove items marked as null

      return updatedCart;
    });
  };

  // Function to toggle the cart popup
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Handle checkout button
  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setCart([]); // Clear the cart after successful checkout
        navigate('/checkout'); // Navigate to checkout page
      } else {
        alert('Error placing order');
      }
    } catch (err) {
      alert('Failed to process the checkout.');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="store-container">
      <h1 className="store-heading">Products</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '200px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      {/* Button to toggle cart */}
      <button onClick={toggleCart} className="view-cart-btn">
        View Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
      </button>

      {/* Cart Popup */}
      {showCart && (
        <div className="cart-popup">
          <AddToCart
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onCheckout={handleCheckout}
          />
        </div>
      )}
    </div>
  );
};

export default Store;
