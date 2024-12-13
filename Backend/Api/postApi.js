const exp = require("express");
const expressAsyncHandler = require("express-async-handler");
const postApi = exp.Router();
const postModel = require("../Models/postModel");
postApi.use(exp.json());
postApi.get('/all', expressAsyncHandler(async (req, res) => {
  const data = await postModel.find().exec();
  res.status(200).send({ result: data });
}));
postApi.post('/add', expressAsyncHandler(async (req, res) => {
  const doc = await postModel.create(req.body);
  await doc.save();
  res.status(200).send({ message: "success" });
}));
postApi.post('/addAll', expressAsyncHandler(async (req, res) => {
  await postModel.insertMany(req.body);
  res.status(200).send({ message: "success" });
}));
postApi.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
postApi.use((req, res, next) => {
  res.status(403).send({ message: "Path not found" });
});
module.exports = postApi;