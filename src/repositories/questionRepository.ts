import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

export async function findAll() {
    return prisma.questions.findMany();
}

export async function findById(id: number) {
    return prisma.questions.findUnique({
        where: { id },
        include:{
            answers:{
                
            }
        }
    });
}

export async function insert(data:CreateQuestionData) {
    await prisma.questions.create({data})
}