import express from "express";
import cors from "cors";
import connectDB from "./configs/connect_db.js";
import routes from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json([{ message: "success" }]);
});

connectDB();
app.use("/v1", routes);

app.listen(3000, () => {
  console.log("listening on port --> 3000");
});
