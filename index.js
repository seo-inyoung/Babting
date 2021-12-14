const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 443;
// limit: "1mb", extended: false
app.use(bodyParser.urlencoded({ limit: "1mb", extended: false }));
app.use(bodyParser.json({ limit: "1mb" }));

const Restaurant = require("./models/Restaurant");
const Review = require("./models/Review");

const router = require("./routes/router")(app, Restaurant);
const reivewrouter = require("./routes/reviewrouter")(app, Review);

app.listen(port, function () {
  console.log("Express server has started on port " + port);
});

let db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  // 몽고디비 서버에 연결
  console.log("Connected to mongod server");
});
mongoose
  .connect(
    "mongodb+srv://Hyunsoo:qwer1234@hyunsoo.otohm.mongodb.net/data?retryWrites=true&w=majority",
    {
      dbName: "data",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 5000;
// const fs = require("fs");
// const path = require("path");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))
// const mongoose = require("mongoose");
// const { rest } = require("lodash");
// const { ObjectId } = require("bson");
// // mongoose
// //   .connect(
// //     "mongodb+srv://Hyunsoo:qwer1234@hyunsoo.otohm.mongodb.net/data?retryWrites=true&w=majority",
// //     {
// //       dbName: "data",
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     }
// //   )
// //   .then(() => console.log("MongoDB Connected..."))
// //   .catch((err) => console.log(err));

// // //데이터 형태는 {date, title, imgLIst, content}

// // const restaurantSchema = new Schema({
// //   _id: { type: ObjectId },
// //   name: { type: String },
// //   adress: { type: String },
// //   wedo: { type: String },
// //   gyungdo: { type: String },
// //   mainmenu: { type: String },
// // });

// // //위와 같은 모델로 쓰기위해 변수 생성
// // const restaurant = mongoose.model("data", restaurantSchema, "restaurant");

// // console.log(restaurant);
// //다이어리 데이터 모델에 기반하여 저장된 전체 데이터를 불러옴->항목별 보기
// // restaurant.find(function (error, data) {
// //   if (error) {
// //     console.log("error::" + error);
// //   } else {
// //     data.forEach(function (row) {
// //       console.log("data::" + row);
// //     });
// //   }
// // });

// //restaurant.find({ adress: "사당" }, function (error, data) {
// //  if (error) {
// //     console.log("error::" + error);
// //   } else {
// //     console.log("First function call : ", data);
// //   }
// // });

// app.get('/api/restaurants', (req,res) => {
//   res.send([
//     {
//       id: 1,
//       img: "임시이미지주소",
//       title: "이경문",
//       address: "종로",
//       introduce: "모르면 바보",
//     },
//     {
//       id: 2,
//       img: "임시이미지주소",
//       title: "엄찌아고",
//       address: "용산",
//       introduce: "모르면 바보",
//     },
//     {
//       id: 3,
//       img: "임시이미지주소",
//       title: "엄찌아고",
//       address: "용산",
//       introduce: "모르면 바보",
//     },
//     {
//       id: 4,
//       img: "임시이미지주소",
//       title: "이경문",
//       address:'종로',
//       introduce: "모르면 바보",
//     },
//     {
//       id: 5,
//       img: "임시이미지주소",
//       title: "엄찌아고",
//       address: "용산",
//       introduce: "모르면 바보",
//     },
//     {
//       id: 6,
//       img: "임시이미지주소",
//       title: "이경문",
//       address: "종로",
//       introduce: "모르면 바보",
//     },

//   ]);
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
