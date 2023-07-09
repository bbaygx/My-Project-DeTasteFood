import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import restaurantRouter from "./src/routes/restaurant.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/restaurant", restaurantRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
