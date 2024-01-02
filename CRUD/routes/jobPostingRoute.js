import express from "express";
import { jobPosting } from "../controllers/jobPostingController.js";


const jobPostRouter = express.Router()



jobPostRouter.post('/job-posting', jobPosting)
// 




export default jobPostRouter