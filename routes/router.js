module.exports = function (app, Restaurant) {
    //새로운 식당 만들기
    app.post("/restaurant", function (req, res) {
      let restaurant = new Restaurant();
      restaurant.name = req.body.name;
      restaurant.adress = req.body.adress;
      restaurant.save(function (err) {
        if (err) {
          console.error(err);
          res.json({ message: "생성 실패" });
          return;
        }
        res.json({ message: "생성 완료!" });
      });
    });
  
    //adress로 해당 유저 찾기
    app.get("/restaurant/:adress", function (req, res) {
      Restaurant.find({ adress: req.params.adress }, function (err, restaurant) {
        if (err) return res.status(500).json({ error: err });
        if (!restaurant)
          return res
            .status(404)
            .json({ error: "해당 아이디가 존재하지 않습니다." });
        res.json(restaurant);
      });
    });
  
    //전체 보여주기
    app.get("/restaurant", function (req, res) {
      Restaurant.find(function (err, restaurant) {
        if (err) return res.status(500).json({ error: err });
        if (!restaurant)
          return res.status(404).json({ error: "데이터가 없습니다." });
        res.json(restaurant);
      });
    });
  
    //업데이트
    app.put("/restaurant/update/:name", function (req, res) {
      Restaurant.find({ name: req.params.name }, function (err, restaurant) {
        if (err) return res.status(500).json({ error: "Database Failure!" });
        if (!restaurant)
          return res
            .status(404)
            .json({ error: "해당 아이디가 존재하지 않습니다." });
  
        restaurant.name = req.body.name;
        restaurant.adress = req.body.adress;
        restaurant.save(function (err) {
          if (err) res.status(500).json({ error: "Failed to update!" });
          res.json({ message: "수정이 완료되었습니다!" });
        });
      });
    });
  
    //삭제
    app.delete("/restaurant/delete/:name", function (req, res) {
      Restaurant.remove({ name: req.params.name }, function (err, restaurant) {
        if (err) return res.status(500).json({ error: "Database Failure!" });
        res.json({ message: "삭제 완료" });
        res.status(204).end();
      });
    });
  };