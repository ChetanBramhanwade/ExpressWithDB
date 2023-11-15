const express = require('express')
const { HOST,PORT } = require("./constant")
const productRouter = require('./router')

const bodyParser = require('body-parser')

// create server with http
const app = express();
// we using body-parser to fetch data from req for diff http method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//http://localhost:3000/product
app.use("/product", productRouter)

app.all("*", (req, res) => {
    res.send("INVALID PATH")
})

// running server
app.listen(PORT, HOST, (err) => {
    if (err) console.log(`Error : ${err}`);
    else console.log(`server is running on http://${HOST}:${PORT}`);
});