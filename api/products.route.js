const express = require('express');
const productRoutes = express.Router();

// Require Business model in our routes module
let Product = require('./products.model');

// Defined store route
productRoutes.route('/add').post(function (req, res) {
    let product = new Product(req.body);
    
    product.save()
        .then(product => {
            res.status(200).json({'product': 'Thêm sản phẩm thành công!'});
        })
        .catch(err => {
            res.status(400).send("Không thể lưu vào cơ sở dữ liệu");
        });
});

// Defined get data(index or listing) route
productRoutes.route('/').get(function (req, res) {
    Product.find(function(err, products){
        if(err){
            console.log(err);
        }
        else {
            res.json(products);
        }
    });
});

// Defined edit route
productRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Product.findById(id, function (err, business){
        res.json(business);
    });
});

//  Defined update route

productRoutes.route('/update/:id').post(function (req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (!product)
            res.status(404).send("Không tì thấy data");
        else {
            console.log(product);
           
            product.name = req.body.name;
            product.detail = req.body.detail;
            product.cost = req.body.cost;
            product.unit = req.body.unit;
            product.classify = req.body.classify;
            product.amount = req.body.amount;
            // product.available_quantity = req.body.available_quantity;

            product.save().then(business => {
                res.json('Sửa thành công!');
            })
                .catch(err => {
                    res.status(400).send("sửa lỗi");
                });
        }
    });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req, res) {
    	
        Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Đã xóa thành công!');
    });
});

module.exports = productRoutes;