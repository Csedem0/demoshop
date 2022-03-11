const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");
//const querystring = require("querystring");
//const { Curl } = require("node-libcurl");
//const terminate = curlTest.close.bind(curlTest);

//const curlTest = new Curl();

//curlTest.setOpt(Curl.option.URL, "http://localhost:5000/api/auth/login");
//curlTest.setOpt(Curl.option.POST, true);


dotenv.config();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"]}));
app.use(express.json()); 


mongoose
 .connect(process.env.MONGO_URL)
 .then(() => console.log("DB Connection Successfull!"))
 .catch((err) => {
     console.log(err);
 });


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
//app.get("api/products?category=men", productRoute);

//app.get('/user/:id', function (req, res, next) {
 //   res.json({user: 'CORS enabled'})
 //})

//app.get("/", function(req, res) {
   // calling request function
   // request("https://www.google.com", function(error, response, body) {
     // if (!error && response.statusCode == 200) {
        // writing the response to a file named data.html
      //  fs.writeFileSync("data.html", body);
     // })
   //});

app.listen(process.env.PORT || 5000, () => {
   console.log("Backend server is running");
});