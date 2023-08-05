import express, { Request, Response } from "express";
import getPromt from "../openai/openai";

const jokeRoute = express.Router();

jokeRoute.post("/", async (req: Request, res: Response) => {
  try {
    const category = req.query.category;
    const prompt = `Tell me a  ${category} joke`;
   const  joke =  await getPromt(prompt);
   res.status(200).json(joke);
  } catch (err: any) {
    res.status(400).json({ error: err?.message });
  }
});

export default jokeRoute;
