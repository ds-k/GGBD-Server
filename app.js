require("dotenv").config();
const cors = require("cors");

const express = require("express");
const router = require("./routes");

const app = express();
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
  method: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
};
app.use(cors(corsOption));

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`GGBD server app listening at http://localhost:${port}`);
});
