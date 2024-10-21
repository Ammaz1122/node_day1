const express = require('express')
const { addData, getData, updateData, deleteData } = require('../Controllers/product_controller')

const product_router = express.Router()
product_router.get('/show-data',getData)
product_router.post("/add-product",addData)


// Put method
product_router.put("/update-data/:id",updateData)

product_router.delete("/delete-data/:id",deleteData)


module.exports = product_router