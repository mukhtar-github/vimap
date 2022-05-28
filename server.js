import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import morgan from "morgan";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import vehiclesRouter from "./routes/vehiclesRoutes.js";

// Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();

dotenv.config();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/vehicles", vehiclesRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
