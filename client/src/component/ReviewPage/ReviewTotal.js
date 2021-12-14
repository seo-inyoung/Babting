import React, { useRef, useState, createContext } from "react";
import styled from "styled-components";
import ReviewView from "./View/ReviewView";
import ReviewRead from "./View/ReviewRead";
import ReviewWrite from "./View/RiviewWrite";
const ModeSet = React.createContext(true);
//리뷰 읽기/쓰기 모드 왔다 갔다 할 수 있는 버튼
const ReviewBtnStyle = styled.div`
  button {
    background-color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
`;
function ReviewTotal() {
  const [mode, setMode] = useState(true);
  const ReviewModeChange = () => {
    mode ? setMode(false) : setMode(true);
  };
  return (
    <>
      <ReviewBtnStyle>
        <button
          style={{ border: `none`, backgroundColor: `#F4BF5A`, color: `white` }}
          onClick={ReviewModeChange}
        >
          +
        </button>
      </ReviewBtnStyle>
      {mode ? <ReviewRead /> : <ReviewWrite />}
    </>
  );
}

export default ReviewTotal;
