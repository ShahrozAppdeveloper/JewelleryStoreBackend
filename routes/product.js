const express = require('express');
const Product = require('../model/productmodel');
const Category = require('../model/categorymodel');
const router = express.Router();

// Add a product
router.post('/addproduct', async (req, res) => {
    try {
        const { title, price, imageurl, description, category } = req.body;

        // Validate that all required fields are provided
        if (!title || !price || !imageurl || !description || !category) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Check if the category exists
        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
            return res.status(400).json({
                success: false,
                message: 'Invalid category'
            });
        }

        // Create a new product
        const newProduct = new Product({
            title,
            price,
            imageurl,
            description,
            category
        });

        // Save the new product to the database
        await newProduct.save();

        // Return success response with the product data
        res.status(201).json({
            success: true,
            message: 'Product added successfully',
            product: newProduct
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// Add a product category
router.post('/productcategory', async (req, res) => {
    try {
        const { title } = req.body;

        // Check if the title is provided
        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Title is required'
            });
        }

        // Check if the category already exists
        const existingCategory = await Category.findOne({ title });
        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: 'Category with this title already exists'
            });
        }

        // Create a new category
        const newCategory = new Category({ title });
        await newCategory.save(); // Ensure you await the save operation

        res.status(201).json({
            success: true,
            message: 'New category added successfully',
            category: newCategory
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

module.exports = router;
