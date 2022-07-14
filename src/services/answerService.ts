import * as repository from "../repositories/answerRepository.js"

export type CreateAnswerData = {
    answer:string;
    questionId:number;
}

export async function create(data:CreateAnswerData) {
    await repository.insert(data)
}