import { Button } from "react-bootstrap";
import React, { useState } from "react";
import SearchTotal from "./SearchPage/SearchTotal";
import ReviewTotal from "./ReviewPage/ReviewTotal";
import styles from "../css/MenuBar.css"; //안됨
import styled from "styled-components"; //css할수있도록
import imgfile from "./img/logo2.png";

//const 이름 = styled.div ''; 형식

const Logo = styled.div`
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

function MenuBar(props) {
  const { restaurants } = props;
  //console.log(restaurants);
  const [view, setView] = useState(true);
  const MenuContainer = {
    margin: "30px 0",
  };
  const SelectBtn = {
    backgroundColor: "white",
    border: "none",
    borderBottom: "3px solid red",
    //borderRadius: '7px',
    marginLeft: "10px",
    marginRight: "10px",
    width: "70px",
    transition: "1s",
    outline: "none",
    fontSize: `20px`,
  };

  const nonSelectBtn = {
    backgroundColor: "white",
    //border: '1px solid black',
    //borderRadius: '7px',
    border: "none",
    borderBottom: "3px solid white",
    marginLeft: "10px",
    marginRight: "10px",
    width: "70px",
    transition: "0.5s",
    outline: "none",
    fontSize: `20px`,
  };
  const border = {
    border: "1px solid black",
  };
  //component 구현하는거
  return (
    <>
      <div className="row" style={MenuContainer}>
        <Logo>
          <img src={imgfile} style={{ height: `50px` }}></img>
        </Logo>
        <div className="MenuBar">
          <br />

          <button
            style={view ? SelectBtn : nonSelectBtn}
            onClick={() => setView(true)}
            value="search"
          >
            검색
          </button>

          <button
            style={view ? nonSelectBtn : SelectBtn}
            onClick={() => setView(false)}
            value="review"
          >
            후기
          </button>
        </div>
      </div>
      {view ? <SearchTotal restaurants={restaurants} /> : <ReviewTotal />}
    </>
  );
}

export default MenuBar;
