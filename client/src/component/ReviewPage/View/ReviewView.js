import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ReviewViewStyle = styled.div`
  .sample {
    margin: 0 auto;
    p {
      text-align: left;
    }
  }
  @media screen and (min-width: 958px) {
    .sample {
      width: 80%;
    }
  }
`;
// const ContentBoxStyle = styled.div`
//     border:1px solid gray;
//     width:250px;
//     height:250px;
//     margin:25px;
//     float:'none;
// .contentbox {
// }
// `;
const ContentBoxStyle = {
  border: "1px solid gray",
  borderRadius: "5%",
  width: "500px",
  height: "500px",
  margin: "20px",
  float: "none",

  //margin : '0 auto'
};

function ContentBox({ review }) {
  return (
    <div style={ContentBoxStyle}>
      <br />
      <p style={{ textAlign: `center` }}>
        <img width="150px" src={review.이미지} />
      </p>
      <h4>" {review.제목} "</h4>
      <p style={{ textAlign: `right` }}>식당 : {review.식당이름} </p>
      <p style={{ textAlign: `right`, fontSize: `13px`, marginTop: `-15px` }}>
        작성자 : {review.작성자}{" "}
      </p>

      <br />
      <p>
        {" "}
        <b>내용</b>
      </p>
      <p>&emsp;{review.내용}</p>
    </div>
  );
}
let role = [];
function ReviewView(props) {
  const [reviews, setReviews] = useState([]);
  useEffect(async () => {
    try {
      const review = await axios.get("/review");
      role = review.data;
      console.log(role);
      setReviews(role);
    } catch (e) {
      console.log(e.message);
    }
  });
  const { title } = props; //const {title} = props;
  const naverUrl =
    "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=";
  return (
    <>
      <p>{title}</p>
      <span>
        <a href={naverUrl + title} target="_blank">
          {title}
        </a>
      </span>
      <ReviewViewStyle>
        <div className={"row justify-content-left sample"}>
          {reviews.map((review) => {
            if (review.식당이름.includes(title) || title == "") {
              return <ContentBox review={review} key={review.id} />;
            }
          })}
        </div>
      </ReviewViewStyle>
    </>
  );
}

export default ReviewView;
