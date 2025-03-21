// routes/cart.js
import express from 'express';
import Cart from '../models/cart.js'; // Update with correct path to your Cart model

const router = express.Router();

// Define routes for cart functionality
router.get('/', async (req, res) => {
  try {
    const cart = await Cart.find();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const newCartItem = new Cart(req.body);
  try {
    const savedCartItem = await newCartItem.save();
    res.status(201).json(savedCartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
