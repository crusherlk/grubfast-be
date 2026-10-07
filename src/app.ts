import express, { Request, Response } from "express";
import cors from "cors";

import initRouter from "./routes.ts";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// router initialization
app.use("/", initRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "No route found" });
});

app.listen(PORT, () => {
  console.info(`--- Server is running on port ${PORT} ---`);
});
