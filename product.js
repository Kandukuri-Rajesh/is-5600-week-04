const express = require("express");
const api = require("./api");
// Require the middleware module
const middleware = require("./middleware");
// Add body parser middleware
const bodyParser = require("body-parser");

// Set the port
const port = process.env.PORT || 3000;
// Boot the app
const app = express();
// Register the public directory
app.use(express.static(__dirname + "/public"));
// register the routes
app.use(middleware.cors);
app.use(bodyParser.json());
app.get("/", api.handleRoot);
app.get("/products", api.listProducts);
app.get("/products/:id", api.getProduct);
app.post("/products", api.createProduct);
app.delete("/products/:id", api.deleteProduct);
app.put("/products/:id", api.updateProduct);
app.use(middleware.notFound);
app.use(middleware.handleError);
// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`));