import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(cors());

// app.use (function (req, res, next) { 
//   res.header ("Access-Control-Allow-Origin", "http://localhost:3000"); 
//   res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next (); 
// });

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

let port = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb://hk:hk123456789@ac-uqo0ts4-shard-00-00.6x2izdl.mongodb.net:27017,ac-uqo0ts4-shard-00-01.6x2izdl.mongodb.net:27017,ac-uqo0ts4-shard-00-02.6x2izdl.mongodb.net:27017/?ssl=true&replicaSet=atlas-87usgj-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));

  