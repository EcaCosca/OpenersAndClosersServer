const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user.model");
const Product = require("../models/product.model");
const mongoose = require("mongoose");
const uploader = require("./../config/cloudinary-setup");



router.post("/upload", uploader.single("img"), (req, res, next) => {
    console.log("file is: ", req.file);
  
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    // get secure_url from the file object and save it in the
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    res.json({ secure_url: req.file.secure_url });
  });


// POST '/product'
router.post('/product', (req, res, next) => {
    // const userId = req.session.currentUser._id;
    const {
        category,
        series,
        model,
        descripcion,
        imgProducto,
        imgTecnica,
        manualInstructivo,
        ancho,
        largo,
        alto
    } = req.body;
    
    // Create a new product
    Product.create({
        category,
        series,
        model,
        descripcion,
        imgProducto,
        imgTecnica,
        manualInstructivo,
        ancho,
        largo,
        alto
    })
    .then((createdProduct) => {
        res
        .status(201) // Created
        .json(createdProduct); // res.send() 
    })
    .catch((err) => {
        next(createError(err));  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
    });
})


// GET '/product'
router.get('/product', (req, res, next) => {
    
    
    Product.find()
    .populate('users')
    .then((allProducts) => {
        res
        .status(200) // Found
        .json(allProducts); // res.send()
    })
    .catch((err) => {
        res
        .status(500)
        .jason(err)
    })
})

// GET '/product'
router.get('/product/:id', (req, res, next) => {
    const productId = req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        res
        .status(400) //  Bad Request
        .json({ message: "Specified id is not valid" });
        return;
    }
    
    Product.findById(productId)
    
    .then((product) => {
        
        res
        .status(200) // Found
        .json(product); // res.send()
    })
    .catch((err) => {
        res
        .status(500)
        .jason(err)
    })
})


// PUT '/product'
router.put('/product/:id', (req, res, next) => {
    const exitId = req.params.id;
    console.log('productId', productId)
    const {
        category,
        series,
        model,
        descripcion,
        imgProducto,
        imgTecnica,
        manualInstructivo,
        ancho,
        largo,
        alto
    } = req.body;
    console.log('req.body', req.body)
    // Create a new product
    Product.findByIdAndUpdate(productId, {
        category,
        series,
        model,
        descripcion,
        imgProducto,
        imgTecnica,
        manualInstructivo,
        ancho,
        largo,
        alto
    }, {new:true} )
    
    .then((updatedProduct) => {
        console.log('updatedProduct', updatedProduct)
            res
            .status(200)
            .json(updatedProduct);
            
        })
        .catch((err) => {
            next(createError(err));  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        });
        
        
        
        
    })
    
    router.delete('/product/:id', (req, res, next) => {
        const exitId = req.params.id;
        
        Product.findByIdAndRemove(productId)
        .then( () => {
            res
            .status(200) // Found
            .json(`Document ${productId} was removed successfully.`) // res.send()
        }
        )
        .catch((err) => {
            res
            .status(500)
            .jason(err)
        })
        
        
    })
    
    
    
    
    
    module.exports = router;