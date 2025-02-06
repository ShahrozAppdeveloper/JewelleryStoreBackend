const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./dbconnection/connection');
const authRoutes = require('./routes/Auth'); // Corrected Import

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Use Routes
app.use('/api/auth', authRoutes);

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
