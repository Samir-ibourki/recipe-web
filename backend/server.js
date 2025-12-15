import express from "express";
import sequelize from "./config/database.js";
import cors from "cors";

const port = 3030;
const app = express();
app.use(cors());
app.use(express.json());

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("databased synced successfully !");
  })
  .catch((err) => {
    console.log("Error databased", err);
  });

app.listen(port, () => {
  console.log(`api gnawa tourne sur http://localhost:${port}`);
});
