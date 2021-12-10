import React, {useState, useRef} from 'react';
import ListView from "./View/ListView"; //그리드 뷰, 리스트 뷰, 맵 뷰 컴포넌트
import GridView from './View/GridView';
import MapView from "./View/MapView";
import GridIcon from "../img/grid.png"; //그리드,리스트,맵 아이콘 경로
import ListIcon from "../img/list.png";
import MapIcon from "../img/maps.png";
import styled from 'styled-components'; //css 쓸 수 있게
import Contents from '../../static_data/contents'; //맛집 data 정리 해놓은 파일
//import Filter from './Filter';

//ViewBtn input 테두리 좀 더 다듬기 & 클릭하면 색깔 변하게
//FilterBtn 

//filter
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

function FilterBtns({filter}) {
    return (
        <button>{filter}</button>
    )
}
function Filter(){
    const close = () => {
        const filterbox = document.getElementById("filterTotalBox");
        filterbox.style.display = "none";
    }
    return(
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
                    <br/><br/> <button id={"closeBtn"} onClick={close}>X</button><br/><br/>
                </div>
            </FilterBox>
            </center>
        </div>
    );
}

function SearchForm() {
    const [ViewBtnText, setViewBtnText] = useState('map');
    const [Filter, setFilter] = useState(
        {}
    );
    const closefilter = () => {
        const filterbox = document.getElementById("filterTotalBox");
        filterbox.style.display = "none";
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
        <div></div>
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
                    <br/><br/> <button id={"closeBtn"} onClick={closefilter}>X</button><br/><br/>
                </div>
            </FilterBox>
            </center>
        </div>

        </>
    );
}
export default SearchForm;