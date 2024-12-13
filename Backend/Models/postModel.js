const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  userId: { type: Number, required: [true, 'Must required'] },
  id: { type: Number, required: [true, 'Must required'] },
  title: { type: String },
  body: { type: String }
}, { collection: "PostCollection" });
const postModel = mongoose.model('Post', postSchema);
module.exports = postModel;