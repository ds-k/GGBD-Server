require("dotenv").config();
const cors = require("cors");

const express = require("express");
const router = require("./routes");

const app = express();
const port = process.env.NODE_ENV === "production" ? 80 : 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOption = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
  method: ["GET", "POST", "OPTIONS", "PUT", "DELETE", "PATCH"],
};
app.use(cors(corsOption));

app.use("/", router);

app.listen(port, () => {
  if (process.env.NODE_ENV === "production") {
    // eslint-disable-next-line no-console
    console.log("Production Mode");
  } else if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log("Development Mode");
  }
  // eslint-disable-next-line no-console
  console.log(`GGBD server app listening at http://localhost:${port}`);
});
