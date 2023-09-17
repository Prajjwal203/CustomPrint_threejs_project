import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config(); // to setup environment variables

const app = express(); // to setup the express application
app.use(cors()); // to setup couple of pieces of middleware and pass cors
app.use(express.json({ limit: "50mb" })); // followed by setting up limit of weight of the payload we can send

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  // to create a demo route
  res.status(200).json({ message: "Hello from DALL.E" });
});

app.listen(8080, () => console.log("Server has started on port 8080")); // to make it listen on port 8080
