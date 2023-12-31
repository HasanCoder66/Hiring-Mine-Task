import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = 6500;
dotenv.config();
const app = express();

const connectDb = () => {
  mongoose
    .connect(
      process.env.MONGO_URI
    )
    .then(() => {
      console.log("Mongodb connect");
    })
    .catch((err) => {
      throw err;
    });
};
app.listen(PORT, () => {
  console.log(`server listen on this ${PORT}`);
  connectDb();
});

// MONGO_URI = 'mongodb+srv://66CoderHasan:c4m1dr0GiwPHLFrB@dummy0.q82kncb.mongodb.net/Dummy0?retryWrites=true&w=majority'
