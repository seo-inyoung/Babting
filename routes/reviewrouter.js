module.exports = function (app, Review) {
  //새로운 식당 만들기
  app.post("/review", function (req, res) {
    let review = new Review();
    review.제목 = req.body.제목;
    review.식당이름 = req.body.식당이름;
    review.내용 = req.body.내용;
    review.이미지 = req.body.이미지;
    review.작성자 = req.body.작성자;

    review.save(function (err) {
      if (err) {
        console.error(err);
        res.json({ message: "생성 실패" });
        return;
      }
      res.json({ message: "생성 완료!" });
    });
  });

  //adress로 해당 유저 찾기
  app.get("/review/:식당이름", function (req, res) {
    Review.find({ 식당이름: req.params.식당이름 }, function (err, review) {
      if (err) return res.status(500).json({ error: err });
      if (!review)
        return res
          .status(404)
          .json({ error: "해당 아이디가 존재하지 않습니다." });
      res.json(restaurant);
    });
  });

  //전체 보여주기
  app.get("/review", function (req, res) {
    Review.find(function (err, review) {
      if (err) return res.status(500).json({ error: err });
      if (!review) return res.status(404).json({ error: "데이터가 없습니다." });
      res.json(review);
    });
  });

  //업데이트
  app.put("/review/update/:제목", function (req, res) {
    Restaurant.find({ 제목: req.params.제목 }, function (err, review) {
      if (err) return res.status(500).json({ error: "Database Failure!" });
      if (!review)
        return res
          .status(404)
          .json({ error: "해당 아이디가 존재하지 않습니다." });

      review.제목 = req.body.제목;
      review.식당이름 = req.body.식당이름;
      review.내용 = req.body.내용;
      review.이미지 = req.body.이미지;

      review.save(function (err) {
        if (err) res.status(500).json({ error: "Failed to update!" });
        res.json({ message: "수정이 완료되었습니다!" });
      });
    });
  });

  //삭제
  app.delete("/review/delete/:제목", function (req, res) {
    Restaurant.remove({ 제목: req.params.제목 }, function (err, restaurant) {
      if (err) return res.status(500).json({ error: "Database Failure!" });
      res.json({ message: "삭제 완료" });
      res.status(204).end();
    });
  });
};
