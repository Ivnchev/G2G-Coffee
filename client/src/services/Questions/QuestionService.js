import fetchData from "../../utils/utilityFunctions"

function getQuestions() {
    return fetchData('question-and-answers', 'GET')
}

function postQuestion(data) {
    return fetchData('question-and-answers', 'POST', data)
}

function updateQuestion(id, data) {
    return fetchData('question-and-answers/' + id, 'PUT', data)
}

function deleteQuestion(id) {
    return fetchData('question-and-answers/' + id , 'DELETE')
}

function getOneQuestion(id) {
    return fetchData('question-and-answers/' + id, 'GET')
}

const qustionService = {
    getQuestions,
    postQuestion,
    updateQuestion,
    deleteQuestion,
    getOneQuestion
}

export default qustionService

