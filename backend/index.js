import express from 'express';
import { connectDB } from './db/connectDB.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Use 'import' for ES Modules
import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';
import checkoutRoutes from './routes/checkout.js'; // Use import instead of require

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const products = [
  { id: 1, name: "Laptop", price: 999.99, image: "https://cdn.mos.cms.futurecdn.net/gnG2Z6pK7CTBJmw4pRUy8i.jpg" },
  { id: 2, name: "Headphones", price: 199.99, image: "https://cdn.mos.cms.futurecdn.net/gnG2Z6pK7CTBJmw4pRUy8i.jpg" },
  { id: 3, name: "Smartphone", price: 599.99, image: "https://cdn.mos.cms.futurecdn.net/gnG2Z6pK7CTBJmw4pRUy8i.jpg" },
  { id: 4, name: "Laptop", price: 999.99, image: "https://cdn.mos.cms.futurecdn.net/gnG2Z6pK7CTBJmw4pRUy8i.jpg" },
  { id: 5, name: "Headphones", price: 199.99, image: "https://cdn.mos.cms.futurecdn.net/gnG2Z6pK7CTBJmw4pRUy8i.jpg" },
  { id: 6, name: "Smartphone", price: 599.99, image: "https://cdn.mos.cms.futurecdn.net/gnG2Z6pK7CTBJmw4pRUy8i.jpg" },
  { id: 7, name: "Laptop", price: 999.99, image: "https://cdn.mos.cms.futurecdn.net/gnG2Z6pK7CTBJmw4pRUy8i.jpg" },
  { id: 8, name: "Headphones", price: 199.99, image: "https://cdn.mos.cms.futurecdn.net/gnG2Z6pK7CTBJmw4pRUy8i.jpg" },
  { id: 9, name: "Smartphone", price: 599.99, image: "https://cdn.mos.cms.futurecdn.net/gnG2Z6pK7CTBJmw4pRUy8i.jpg" },
];

// Configure CORS middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow requests from this frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    credentials: true, // Allow credentials (cookies, sessions)
  })
);

// Middleware
app.use(express.json()); // Parse JSON payloads
app.use(cookieParser()); // Parse cookies

// Products API
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Register routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes); // Register checkout route

// Auth routes
app.use('/api/auth', authRoutes);

// Start the server
const startServer = async () => {
  try {
    await connectDB(); // Connect to the database
    const server = app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

    // Gracefully handle port conflicts
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please use a different port.`);
        process.exit(1);
      } else {
        console.error('Server error:', error);
        process.exit(1);
      }
    });
  } catch (error) {
    console.error('Failed to start the server:', error.message);
    process.exit(1); // Exit process on failure
  }
};

startServer();
