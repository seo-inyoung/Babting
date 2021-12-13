//import { useSSRSafeId } from '@react-aria/ssr'; //.?
//import userEvent from '@testing-library/user-event';
import React from "react";
import styled from "styled-components";

const contentBoxStyle = styled.div`
  .contentBox:hover {
    background: gray;
    margin: 0 auto;
  }
`;
const ContentBoxStyle = {
  border: "1px solid gray",
  height: "30px",
  float: "none",
  //margin : '0 auto'
};
function ContentBox({ content }) {
  //console.log(content);
  //
  return (
    <div style={ContentBoxStyle} className="col-sm-11 col-md-8 contentBox">
      <p>
      {content.이름} {content.주소} {content.대표음식} {content.간단한설명}{content.태그}
      </p>
    </div>
  );
}
function ListView(props) {
  //console.log(props);
  const { contents, Data } = props;

  return (
    <div className={"row justify-content-center"}>
      <div style={ContentBoxStyle} className="col-sm-11 col-md-8 contentBox"><p>음식점이름 주소 메인메뉴</p></div>
      {contents.map((content) => (
        <ContentBox content={content} key={content.id} />
      ))}
    </div>
  );
}

export default ListView;
