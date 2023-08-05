import express, { Request, Response } from "express";
import jokeRoute from "./route/joke.route";
const cors = require('cors')

const app = express();

      app.use(express.json())

      app.use(cors())

app.use("/shayari", jokeRoute);

app.get("/", async (req:Request, res:Response) => {
  try {
    res
      .status(200)
      .json({ message: "Welcome to joke API by Sumat Mallick" });
  } catch (err:any) {
    res.status(400).json({ error: err?.message });

  }
});

app.listen(8080, async () => {
  try {
    console.log("Server is running at 8080");
  } catch (err) {
    console.log(err);
  }
});