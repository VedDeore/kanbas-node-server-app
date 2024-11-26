import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    points: Number,
    assignmentGroup: String,
    gradeAs: String,
    submissionType: String,
    onlineEntryOptions: [{ id: String, label: String }],
    dueDate: String,
    availableFrom: String,
    availableUntil: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;
