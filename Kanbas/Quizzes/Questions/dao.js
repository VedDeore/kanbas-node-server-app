import model from "./model.js";
export function findQuestionsForQuiz(quizId) {
  return model.find({ quizId: quizId });
}
export function createQuestion(question) {
  delete question._id;
  return model.create(question);
}
export function deleteQuestion(questionId) {
  return model.deleteOne({ _id: questionId });
}
export function updateQuiz(questionId, questionUpdates) {
  return model.updateOne({ _id: questionId }, questionUpdates);
}
