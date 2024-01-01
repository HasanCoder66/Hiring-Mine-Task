import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jobPostRouter from "./routes/jobPostingRoute.js";
// import cors from 'cors'


const PORT = 6500;

dotenv.config();



const app = express();


// app.cors()
app.use(express.json())

app.use('/job', jobPostRouter)






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
