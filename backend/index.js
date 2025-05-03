import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({})
 import connectDB from "./utils/db.js";
 import userRoute from "./routes/user.routes.js";
 import companyRoute from "./routes/company.routes.js";
 import jobRoute from "./routes/job.route.js";
 import applicationRoute from "./routes/application.routes.js";
 import resumeRoutes from './routes/resumeRoutes.js';

dotenv.config({});
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5175"],
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

 
//api's

 app.use("/api/user", userRoute);
 app.use("/api/company", companyRoute);
 app.use("/api/job", jobRoute);
 app.use("/api/application", applicationRoute);
 app.use('/api/resume', resumeRoutes);

app.listen(PORT, () => {
   connectDB();
  console.log(`Server is running on port ${PORT}`);
});