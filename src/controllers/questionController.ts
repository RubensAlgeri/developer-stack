import { Request, Response } from "express";
import * as answerService from "../services/answerService.js";
import * as questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
    const {question} = req.body;
    await questionService.create(question)
    res.sendStatus(200)
}

export async function answer(req: Request, res: Response) {
    const {answer}:{answer:string} = req.body;
    const id = +req.params.id;
    const data = {answer, questionId:id}
    await answerService.create(data)
    res.sendStatus(200)
}

export async function get(req: Request, res: Response) {
    const questions = await questionService.get();
    res.send({questions})
} 

export async function getById(req: Request, res: Response) {
  const id = +req.params.id;
  const questions = await questionService.getById(id)
  res.send(questions)
}
