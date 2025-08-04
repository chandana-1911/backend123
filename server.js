const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const PORT = 9000;
const path = require("path");
app.use(cors());


// Import routes
const videoUploadRoute = require("./routes/videoupload");

// Serve the uploads folder statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use routes
app.use("/api", videoUploadRoute);


// Middleware to parse JSON
app.use(express.json());

// Static folder for image access
app.use("/uploads",express.static("uploads"));

// Replace with your actual MongoDB URI
const mongoURL ="mongodb+srv://chandanachalikwar:mau@cluster0.xn5xiyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Connect to MongoDB (modern syntax)
mongoose.connect(mongoURL)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });
// Image upload route
const uploadRoute = require("./routes/upload");
// import upload route 
app.use("/api",uploadRoute);
// mount it on/ api/upload

const authRoute = require("./routes/auth");
app.use("/api",authRoute);



// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express and MongoDB!');
});
const userRoutes =require("./routes/userRoutes");
app.use("/api",userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});