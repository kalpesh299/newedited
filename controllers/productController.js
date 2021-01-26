const { Router } = require('express');
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

router.get('/', (req, res) => {
    res.render("product/addOrEdit",{
        viewTitle : "Insert Product"
    });
});
router.post('/', (req, res) => {
    insertRecord(req,res);
         });
 
         function insertRecord(req,res){
            var product = new Product();
            product.ProductId = req.body.ProductId;
            product.ProductName = req.body.ProductName;
            product.CategoryName = req.body.CategoryName;
            product.CategoryId = req.body.CategoryId;
            product.save((err, doc) => {
                if (!err)
                   res.redirect('product/list');
                   
                else {
                    console.log('Error during record insertion : ' + err);
                }   
            });
         }

         router.get('/list', (req, res) => {
             res.json('from list');
         });

module.exports = router;