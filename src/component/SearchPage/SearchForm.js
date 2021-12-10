import React, {useState, useRef} from 'react';
import ListView from "./View/ListView"; //그리드 뷰, 리스트 뷰, 맵 뷰 컴포넌트
import GridView from './View/GridView';
import MapView from "./View/MapView";
import GridIcon from "../img/grid.png"; //그리드,리스트,맵 아이콘 경로
import ListIcon from "../img/list.png";
import MapIcon from "../img/maps.png";
import styled from 'styled-components'; //css 쓸 수 있게
import Contents from '../../static_data/contents'; //맛집 data 정리 해놓은 파일
import axios from "axios"; //axios
//import Filter from './Filter';

//ViewBtn input 테두리 좀 더 다듬기 & 클릭하면 색깔 변하게
//FilterBtn 

//filter
axios
    .get("https://agile-earth-78577.herokuapp.com/api/tags") //restaurants / tags
    .then((Response) => {
        console.log(Response.data);
    const {data} = Response.data; //Response.data(객체형태임.)
    data.map((item) => {
        if(item.attributes.r_name === '치차티클럽') {
            console.log(item.attributes.r_adress)
        }
    })
    console.log(Response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

const situation = ['혼밥', '모임' , '특별한 날', '회식']
const preference = ['비건' , '육류' , '해산물' ,'국물' , '매운 것' , '반주', '디저트']

//style
const FilterBox = styled.div `
.filterBox {
    border: 1px solid black;
    width: 50%;
    position : fixed;
    background : white;  
    top : 25%;
    left: 25%;
    z-index:1;
}
.offbtn {
    background:white;
}
.onbtn {
    background:gray;
}
@media screen and (max-width:958px) {
    .filterBox {
        top : 25%;
        left: 5%;
        width: 90%;
        padding: 0 10%;
    }
}
`;

const FilterBtn = styled.div `
input {
    border: 1px solid #eeeeee;
    border-radius: 30px;
    outline:none;
}
button {
    width:70px;
}
@media screen and (max-width:958px ) {
    input {
        width: 400px;
    }
}
`;
const ViewBtn = styled.div `
input {
    width:25px;
    padding: 2px;
    margin: 1px 0;
    border: 1px black solid;
    border-radius : 5px;
}
`;

const imgStyle = {
    width:'25px'
}
let FilterList = {
    "btn-혼밥" : 0, "btn-모임":0, "btn-특별한 날":0, "btn-회식":0,
    "btn-비건" :0 , "btn-육류":0, "btn-해산물":0 , "btn-국물":0, "btn-매운 것": 0, "btn-반주": 0, "btn-디저트": 0
}

function FilterBtns({filter}) {
    const Btntoggle = () => {
        const btn = document.getElementById(`btn-${filter}`);
        if(FilterList[btn.id] === 0){
            FilterList = {...FilterList, [btn.id]:1}
            console.log(FilterList)
            btn.style.background = "gray";
        }else{
            FilterList = {...FilterList, [btn.id]:0}
            console.log(FilterList)
            btn.style.background = "white";
        }
    }
    return (
        <button onClick = {Btntoggle} id={`btn-${filter}`} className="offbtn">{filter}</button>
    )
}
//실행 
let checkFilter = [];
function SearchForm() {
    const [ViewBtnText, setViewBtnText] = useState('map');

    const closefilter = () => {
        checkFilter = [];
        const filterbox = document.getElementById("filterTotalBox");
        filterbox.style.display = "none";
        for(const key in FilterList) {
            if(FilterList[key]===1){
                checkFilter.push(key.slice(4,));
            }
        }
        const filterlook = document.getElementById("filterLook");
        filterlook.innerText = checkFilter;
        //console.log(checkFilter);
    }
    const openfilter = () => {
        const filterbox = document.getElementById("filterTotalBox");
        filterbox.style.display = "block";
    }
    
    return (
        <>  
        <FilterBtn>
        <div className={"row justify-content-center"}>
            <input className={"col-md-4 col-xs-5"}/>
            <button className={"col-md-1 col-xs-2"}>검색 </button>
            <button className={"col-md-1 col-xs-2"} onClick={openfilter}>필터 </button>
        </div> </FilterBtn>   
        <div className={'ViewBtnContainer'}>
            <ViewBtn>
            <input type={"image"} src={MapIcon} className={"col-md-1 col-xs-1"} onClick={() => setViewBtnText('map') }/>
            <input type={"image"} src={ListIcon} className={"col-md-1 col-xs-1"} onClick={() => setViewBtnText('list')}/>
            <input type={"image"} src={GridIcon} className={"col-md-1 col-xs-1"} onClick={() => setViewBtnText('grid')}/>
            </ViewBtn>
        </div>

        <div><span>고른 태그: </span><span id="filterLook"></span></div>
        
        {ViewBtnText==='grid'?<GridView contents={Contents}/>:ViewBtnText==="list"?<ListView contents={Contents}/>:<MapView/>}

        <div id="filterTotalBox">
            <center>
                <FilterBox>
                <div className = "filterBox">
                    <br/><p>필터 설정</p>
                    <p>취향 필터</p>
                    {
                        preference.map((filter) => (
                            <FilterBtns filter = {filter}/>
                        ))
                    }<br/><br/>
                    <p>상황 필터</p>
                    {
                        situation.map((filter) => (
                            <FilterBtns filter = {filter} />
                        ))
                    }
                    <br/><br/> <button id={"closeBtn"} onClick={closefilter}>Check</button><br/><br/>
                </div>
            </FilterBox>
            </center>
        </div>

        </>
    );
}
export default SearchForm;