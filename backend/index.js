// backend/index.js

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import savedLocationRoutes from './routes/savedLocationRoutes.js';
import walletRoutes from './routes/walletRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/savedlocations', savedLocationRoutes);
app.use('/api/wallet', walletRoutes);

// Set up a simple route for the root URL
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define the PORT and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
