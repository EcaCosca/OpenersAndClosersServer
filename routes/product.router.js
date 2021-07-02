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


// POST '/exit/exitpoint'
router.post('/exitpoint', (req, res, next) => {
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
    
    // Create a new exit point
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
    .then((createdExit) => {
        res
        .status(201) // Created
        .json(createdExit); // res.send() 
    })
    .catch((err) => {
        next(createError(err));  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
    });
})


// GET '/exit/exitpoint'
router.get('/exitpoint', (req, res, next) => {
    
    
    Product.find()
    .populate('users')
    .then((allExits) => {
        res
        .status(200) // Found
        .json(allExits); // res.send()
    })
    .catch((err) => {
        res
        .status(500)
        .jason(err)
    })
})

// GET '/exit/exitpoint'
router.get('/exitpoint/:id', (req, res, next) => {
    const exitId = req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(exitId)) {
        res
        .status(400) //  Bad Request
        .json({ message: "Specified id is not valid" });
        return;
    }
    
    Product.findById(exitId)
    
    .then((exit) => {
        
        res
        .status(200) // Found
        .json(exit); // res.send()
    })
    .catch((err) => {
        res
        .status(500)
        .jason(err)
    })
})


// PUT '/exit/exitpoint'
router.put('/exitpoint/:id', (req, res, next) => {
    const exitId = req.params.id;
    console.log('exitId', exitId)
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
    // Create a new exit point
    Product.findByIdAndUpdate(exitId, {
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
    
    .then((updatedExit) => {
        console.log('updatedExit', updatedExit)
            res
            .status(200)
            .json(updatedExit);
            
        })
        .catch((err) => {
            next(createError(err));  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
        });
        
        
        
        
    })
    
    router.delete('/exitpoint/:id', (req, res, next) => {
        const exitId = req.params.id;
        
        Product.findByIdAndRemove(exitId)
        .then( () => {
            res
            .status(200) // Found
            .json(`Document ${exitId} was removed successfully.`) // res.send()
        }
        )
        .catch((err) => {
            res
            .status(500)
            .jason(err)
        })
        
        
    })
    
    
    
    
    
    module.exports = router;