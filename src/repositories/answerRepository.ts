import { prisma } from "../config/database.js";
import { CreateAnswerData } from "../services/answerService.js";

export async function insert(data:CreateAnswerData) {
    await prisma.answers.create({data})
}