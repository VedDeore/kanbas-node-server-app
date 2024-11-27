import mongoose from "mongoose";
const choiceSchema = new mongoose.Schema(
  {
    answer: String,
    correct: Boolean,
  },
  { _id: false }
);
const schema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["MULTIPLE", "TRUEFALSE", "FILLIN"],
    },
    title: { type: String, required: true },
    points: { type: Number, required: true },
    description: String,
    choices: [choiceSchema],
    correct: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  },
  { collection: "questions" }
);
export default schema;
