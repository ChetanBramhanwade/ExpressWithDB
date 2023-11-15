const { default: axios } = require('axios');

const allProductRouter = require('express').Router();

async function getProduct(productId) {
    let url = `https://dummyjson.com/products`;
    if (productId) {
        url = url + `/${productId}`
    }
    const response = await axios.get(url)
    return response.data;
}


// http://localhost:1920/allproduct  === HTTP GET
allProductRouter.get("/", async (req, res) => {
    try {
        const response =await getProduct();
        res.json(response.products)
    } catch (err) {
        console.log(err);
        res.json([])
    }
});

module.exports=allProductRouter;