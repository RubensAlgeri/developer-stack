import * as repository from "../repositories/questionRepository.js"

export type CreateQuestionData = {
    question:string;
}

export async function create(question:string) {
    const data={question}
    await repository.insert(data)
}

export async function get() {
    const questions = await repository.findAll()
    return questions;
}

export async function getById(id:number) {
    const questions = await repository.findById(id)
    return questions;
}