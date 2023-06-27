const express = require("express");
const cors = require("cors");
const Pizza = require("./models/pizzaModel");

const app = express();
const db = require("./db.js");
app.use(express.json());
app.use(cors());
const path = require("path");
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas", pizzasRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", ordersRoute);
console.log("Here", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port port ${port}`));
