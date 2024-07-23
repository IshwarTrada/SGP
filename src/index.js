import dotenv from "dotenv";

import connectDB from "./db/index.js";
import app from "./app.js";

// Load env variables using import module
dotenv.config({
  path: "./.env",
});

// Connect to MongoDB
connectDB()
  .then(() => {
    // error handle befor start server
    app.on("error", (error) => {
      console.log("Error : ", error);
      throw error;
    });

    // server start
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  })
  // DB connection error
  .catch((error) => {
    console.log("MongoDB connection error: ", error);
  });
