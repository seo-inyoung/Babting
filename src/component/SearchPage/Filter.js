import React, {useState} from "react";
import styled from 'styled-components';
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
function FilterBtn({filter}) {
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
                            <FilterBtn filter = {filter}/>
                        ))
                    }<br/><br/>
                    <p>상황 필터</p>
                    {
                        situation.map((filter) => (
                            <FilterBtn filter = {filter} />
                        ))
                    }
                    <br/><br/> <button id={"closeBtn"} onClick={close}>X</button><br/><br/>
                </div>
            </FilterBox>
            </center>
        </div>
    );
}

export default Filter;