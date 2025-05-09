const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));
const data = [
  {
    id: 1,
    name: "iphone 14",
    price: 3000,
    isActive: true,
    image: "img1.jpg",
  },
  {
    id: 2,
    name: "samsung s20",
    price: 2000,
    isActive: false,
    image: "img1.jpg",
  },
  {
    id: 3,
    name: "xiamo 11",
    price: 1000,
    isActive: true,
    image: "img1.jpg",
  },
];
// routes
app.use("/products/:id", function (req, res) {
  const urun = data.find((u) => u.id == req.params.id);
  res.render("product-details", urun);
});
app.use("/products", function (req, res) {
  res.render("products", { liste: data });
});
app.use("/", function (req, res) {
  res.render("index");
});
app.listen(3000, () => {
  console.log("node.js server at port 3000");
});
