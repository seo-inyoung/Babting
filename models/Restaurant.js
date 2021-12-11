// 몽구스 모듈 가져오기
const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  width: Number,
  height: Number,
});

// 스키마 생성
const restaurantSchema = mongoose.Schema({
  //필드 작성
  name: {
    type: String,
    maxlength: 50,
    unique: 1, // 똑같은 이름은 못쓰게, 1은 아마도 true
  },
  adress: {
    type: String,
    // trim: true, //문자간 스페이스를 없애주는 역할을 하는게 trim
  },
  wedo: {
    type: String,
    minlength: 50,
  },
  gyungdo: {
    type: String,
    maxlength: 50,
  },
  //   role: {
  //     //롤을 주는 이유는 어떤 유저가 관리자가 될 수도 있고 일반유저가 될 수도 있다. 관리자는 일반유저를 관리할 수 있다. 그래서 롤을 부여한다.
  //     type: Number,
  //     default: 0, // 만약 임의로 롤을 지정하지 않으면, 기본롤값을 0을 부여한다. 만약 유저가 0이면 관리자는 1 이런식으로 지정할 수 있다.
  //   },
  image: imageSchema, //꼭 Object 형태가 아니라 이렇게 바로 적을 수도 있다.
  explanation: {
    type: String,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = { Restaurant };
