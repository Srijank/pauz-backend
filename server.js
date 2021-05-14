const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(express.json());
app.use(cors());

console.log(process.env.MONGO_URI)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((res) => console.log("Mongo DB connected!"))
  .catch((err) => {
    console.log(err)
    console.log("Failed to connect to MongoDB")
  });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello!",
  });
});

const userRouter = require("./routes/user");

app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});