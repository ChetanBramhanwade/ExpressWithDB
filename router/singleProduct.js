const { default: axios } = require('axios');

const singleProductRouter = require('express').Router();

async function getProduct(productId) {
    let url = `https://dummyjson.com/products`;
    if (productId) {
        url = url + `/${productId}`
    }
    const response = await axios.get(url)
    return response.data;
}

singleProductRouter.get("/:prodId", async (req, res) => {
    try {
        const {prodId}= req.params;
        const response =await getProduct(prodId);
        res.json(response)
    } catch (err) {
        console.log(err);
        res.json([])
    }
});

module.exports=singleProductRouter;