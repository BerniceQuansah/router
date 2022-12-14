const express = require("express");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");

const app = express();

app.use("/users", userRouter);
app.use("/products", productRouter);


app.listen(4000, (err) => {
    console.log(" Server is running on http://localhost:4000");
});