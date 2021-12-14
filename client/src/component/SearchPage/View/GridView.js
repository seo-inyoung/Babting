import { style } from "dom-helpers";
import React from "react";
import styled from "styled-components";

const GridViewStyle = styled.div`
  .sample {
    margin: 0 auto;
  }
  @media screen and (min-width: 958px) {
    .sample {
      width: 80%;
    }
  }
`;
const ContentBoxStyle = {
  border: "1px solid gray",
  borderRadius: "5%",
  width: "250px",
  height: "250px",
  margin: "25px",
  float: "none",
  //margin : '0 auto'
};

function ContentBox({ content }) {
  return (
    <div style={ContentBoxStyle}>
      <p>{content.img}</p>
      <h5>
        <b>{content.이름}</b>
      </h5>
      <hr />
      <p style={{ textAlign: `left`, fontSize: `13px`, marginLeft: `115px` }}>
        &emsp;&emsp;위치 | {content.주소}
      </p>
      <p
        style={{
          textAlign: `left`,
          fontSize: `13px`,
          marginTop: `-15px`,
          marginLeft: `115px`,
        }}
      >
        &nbsp;대표메뉴 | {content.대표음식}
      </p>
      <br />
      <p style={{ textAlign: `left  `, fontSize: `14px`, marginLeft: `4px` }}>
        {content.간단한설명}
      </p>
      <p style={{ textAlign: `right`, fontSize: `14px` }}>
        #{content.태그.replace(",", " #")}
      </p>
    </div>
  );
}
//속성으로 받아오는 contents는 contents.js에 있음.
function GridView(props) {
  const { contents, Data } = props;
  return (
    <GridViewStyle>
      <div className={"row justify-content-center sample"}>
        {contents.map((content) => (
          <ContentBox content={content} key={content.id} />
        ))}
      </div>
    </GridViewStyle>
  );
}
export default GridView;
