import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"
import blogRoutes from "./routes/blogsRoutes.js"
import connectDB from "./db/db.js";
import "dotenv/config"

const app = express(); // Object

const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser(process.env.SECRET_KEY))

// Database Connection
connectDB()

// Routes
app.use('/blogs' , blogRoutes)
app.use('/users' , userRoutes)

app.get("/", (req, res) => {
  res.status(200).json({
    message: "MERN Blog API is running"
  });
});

app.listen(PORT , '0.0.0.0' ,  () => {
  console.log("Server started at http://localhost:7000/");
});
