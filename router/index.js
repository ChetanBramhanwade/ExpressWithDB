const router = require('express').Router();
const singleProduct = require('./singleProduct')
const AllProduct = require("./allProduct")

// http//:localhost:1920/api/user
router.use("/single", singleProduct);
router.use("/all", AllProduct);

module.exports=router;