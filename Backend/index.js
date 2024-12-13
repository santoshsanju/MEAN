const exp = require('express');
const app = exp();
const env = require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const postApp = require("./Api/postApi");
app.use(cors());
app.use('/posts', postApp);
const mongoose = require("mongoose");
mongoose.connect(process.env.DB)
  .then(() => console.log('Database connected successfully...'))
  .catch(err => console.log(err));
app.listen(PORT, () => console.log(`Service is running ${PORT}`));