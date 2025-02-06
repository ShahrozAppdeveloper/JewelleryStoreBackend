// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./dbconnection/connection');
const authRoutes = require('./routes/Auth');
const productRoutes = require('./routes/product'); // Updated naming consistency

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Databases
connectDB();

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); 

// Start the server
app.listen(8000, () => {
    console.log("Server running on port 8000");
});
