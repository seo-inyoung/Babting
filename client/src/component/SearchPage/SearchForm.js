import React, { useState, useRef, useEffect } from "react";
import ListView from "./View/ListView"; //그리드 뷰, 리스트 뷰, 맵 뷰 컴포넌트
import GridView from "./View/GridView";
import MapView from "./View/MapView";
import GridIcon from "../img/grid.png"; //그리드,리스트,맵 아이콘 경로
import ListIcon from "../img/list.png";
import MapIcon from "../img/maps.png";
import styled from "styled-components"; //css 쓸 수 있게
import Contents from "../../static_data/contents"; //맛집 data 정리 해놓은 파일
import axios from "axios"; //axios

//ViewBtn input 테두리 좀 더 다듬기 & 클릭하면 색깔 변하게
//FilterBtn

//filter
const situation = ["혼밥", "모임", "특별한 날", "회식"];
const preference = [
  "비건",
  "육류",
  "해산물",
  "국물",
  "매운 것",
  "반주",
  "디저트",
];

//style
const FilterBox = styled.div`
  .filterBox {
    width: 50%;
    position: fixed;
    background: white;
    border-radius:15px;
    top: 25%;
    left: 25%;
    z-index: 1;
  }
  .filterTitle {
    padding:15px 0;
    border-bottom: 2px solid red;
  }
  .offbtn {
    background: white;
  }
  .onbtn {
    background: gray;
  }
  @media screen and (max-width: 958px) {
    .filterBox {
      top: 25%;
      left: 5%;
      width: 90%;
      padding: 0 10%;
    }
  }
`;

const FilterBtn = styled.div`
  input {
    border: 1px solid #eeeeee;
    border-radius: 30px;
    outline: none;
  }
  button {
    width: 70px;
  }
  @media screen and (max-width: 958px) {
    input {
      width: 400px;
    }
  }
`;
const ViewBtn = styled.div`
  input {
    width: 25px;
    padding: 2px;
    margin: 1px 0;
    border: 1px black solid;
    border-radius: 5px;
  }
`;

const imgStyle = {
  width: "25px",
};
let FilterList = {
  "btn-혼밥": 0,
  "btn-모임": 0,
  "btn-특별한 날": 0,
  "btn-회식": 0,
  "btn-비건": 0,
  "btn-육류": 0,
  "btn-해산물": 0,
  "btn-국물": 0,
  "btn-매운 것": 0,
  "btn-반주": 0,
  "btn-디저트": 0,
};
function FilterBtns({ filter }) {
  const Btntoggle = () => {
    const btn = document.getElementById(`btn-${filter}`);
    if (FilterList[btn.id] === 0) {
      FilterList = { ...FilterList, [btn.id]: 1 };
      //console.log(FilterList);
      btn.className = "onbtn";
      //btn.style.background = "gray";
    } else {
      FilterList = { ...FilterList, [btn.id]: 0 };
      //console.log(FilterList);
      btn.className = "offbtn";
      //btn.style.background = "white";
    }
  };
  return (
    <button
      onClick={Btntoggle}
      id={`btn-${filter}`}
      className={FilterList[`btn-${filter}`] === 1 ? "onbtn" : "offbtn"}
    >
      {filter}
    </button>
  );
}
function FilterBoxTool(props) {
  const {restaurants} = props;  
  return (
    <FilterBox>
      <div className="filterBox">
        
        <p className="filterTitle">필터 설정</p>
        <p>취향 필터</p>
        {preference.map((filter) => (
          <FilterBtns filter={filter} />
        ))}
        <br />
        <br />
        <p>상황 필터</p>
        {situation.map((filter) => (
          <FilterBtns filter={filter} />
        ))}
        <br />
        <br />{" "}
        <button id={"closeBtn"} onClick={()=>closefilter(restaurants)}>
          Check
        </button>
        <br />
        <br />
      </div>
    </FilterBox>
  );
}

//태그 창 열고 닫는 거
const closefilter = (props) => {
  checkFilter = [];
  //isTagData = [];
  const filterbox = document.getElementById("filterTotalBox");
  filterbox.style.display = "none";
  for (const key in FilterList) {
    if (FilterList[key] === 1) {
      checkFilter.push(key.slice(4));
    }
  }
  const filterlook = document.getElementById("filterLook");
  filterlook.innerText = checkFilter;
  
  // if(checkFilter.length!==0){
  //   props.map((content) => {
  //     for(var i in checkFilter){
  //       if(content.태그!=undefined){
  //         if(content.태그.includes(checkFilter[i])){
  //           if(!isTagData.includes(content)){
  //             isTagData.push(content);
  //           }              
  //         }
  //       }
  //     }
  //   })
  // }else{
  //   props.map((content) => {
  //     isTagData.push(content);
  //   })
  // }  
  };
const openfilter = () => {
  const filterbox = document.getElementById("filterTotalBox");
  filterbox.style.display = "block";
};

//실행
let checkFilter = [];
let isTagData = [];
function SearchForm(props) {
  useEffect(()=> {
    const box = document.getElementById('filterTotalBox');
    const checkFilterText = document.getElementById('filterLook');
    let filterText ='';
    if(checkFilter.length !== 0){
      box.style.display = "none";
      checkFilter.map((f) => {
        filterText += f + ',';
      })
    }
    checkFilterText.innerText = filterText;
    //searchData();
  },[]);
  const {restaurants} = props;  
  const dataInput = useRef();
  const [data, setData] = useState({
    View: "map",
    result: [],
  });
  let resultData = [];
  const searchData = () => {
    const dataInfo = dataInput.current;
    resultData = [];
    isTagData = [];
    if(checkFilter.length!==0){
      restaurants.map((content) => {
        for(var i in checkFilter){
          if(content.태그!=undefined){
            if(content.태그.includes(checkFilter[i])){
              if(!isTagData.includes(content)){
                isTagData.push(content);
              }              
            }
          }
        }
      })
    }else{
      restaurants.map((content) => {
        isTagData.push(content);
      })
    }
    console.log(isTagData);
    isTagData.map((content) => {
      if (content.이름.includes(dataInfo.value)||
          content.주소.includes(dataInfo.value)||
          content.대표음식.includes(dataInfo.value)||
          content.간단한설명.includes(dataInfo.value)
      //dataInfo.value == content.name ||
      //dataInfo.value == content.adress ||
      //dataInfo.value == content.mainmenu
      ) {
        resultData.push(content);
      } 
      else if(dataInfo.value==""){
        resultData.push(content);
      } 
      // else if (dataInfo.value === ""&&checkFilter.length==0) {
      //   resultData.push(content);
      // }
    });
    setData({ ...data, result: resultData });
  };
  return (
    <>
      <FilterBtn>
        <div className={"row justify-content-center"}>
          <input
            ref={dataInput}
            className={"col-md-4 col-xs-5"}
            placeholder="음식점 이름/먹고 싶은 메뉴를 입력해 보세요"
          />
          <button className={"col-md-1 col-xs-2"} onClick={searchData}>
            검색{" "}
          </button>
          <button className={"col-md-1 col-xs-2"} onClick={openfilter}>
            필터{" "}
          </button>
        </div>{" "}
      </FilterBtn>
      <div className={"ViewBtnContainer"}>
        <ViewBtn>
          <input
            type={"image"}
            src={MapIcon}
            className={"col-md-1 col-xs-1"}
            onClick={() => setData({ ...data, View: "map" })}
          />
          <input
            type={"image"}
            src={ListIcon}
            className={"col-md-1 col-xs-1"}
            onClick={() => setData({ ...data, View: "list" })}
          />
          <input
            type={"image"}
            src={GridIcon}
            className={"col-md-1 col-xs-1"}
            onClick={() => setData({ ...data, View: "grid" })}
          />
        </ViewBtn>
      </div>
      <div>
        <span>고른 태그: </span>
        <span id="filterLook"></span>
      </div>
      {data.View === "grid" ? (
        <GridView contents={data.result} Data={data.ResultWord} />
      ) : data.View === "list" ? (
        <ListView contents={data.result} Data={data.ResultWord} />
      ) : (
        <MapView contents={data.result} Data={data.ResultWord} />
      )}

      <div id="filterTotalBox">
        <center>
          <FilterBoxTool restaurants={restaurants}/>
        </center>
      </div>
    </>
  );
}
export default SearchForm;
