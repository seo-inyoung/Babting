import {Button} from "react-bootstrap";
import React, {useState} from "react";
import SearchTotal from "./SearchPage/SearchTotal";
import ReviewTotal from "./ReviewPage/ReviewTotal";
import styles from '../css/MenuBar.css'; //안됨
import styled from 'styled-components'; //css할수있도록
//const 이름 = styled.div ''; 형식 

const Logo = styled.div`
@media screen and (max-width:550px ) {
    display:none;
}
`; 

function MenuBar() {
    const [view, setView] = useState(true);
    const MenuContainer = {
        margin:'30px 0',
    }
    const SelectBtn = {
        backgroundColor: "yellow",
        border: '1px solid black',
        borderRadius: '7px',
        marginLeft: "10px",
        width: "70px",
        transition: "1s",
        
    }

    const nonSelectBtn = {
        backgroundColor: "white",
        border: '1px solid black',
        borderRadius: '7px',
        marginLeft: "10px",
        width: "70px",
        transition: "0.5s"
    }
    const border = {
        border: '1px solid black'
    }
    //component 구현하는거
    return(
        <>
        <div className="row" style={MenuContainer}>
            <Logo><span >logo</span></Logo>
            <div className="MenuBar" >
                <button style={view?SelectBtn:nonSelectBtn} 
                onClick={() => setView(true)} 
                value="search">검색</button>

                <button style={view?nonSelectBtn:SelectBtn} 
                onClick={() => setView(false)} 
                value="review">후기</button>
            </div>
        </div>
        {view ? <SearchTotal/> : <ReviewTotal/>}
        </>
    );
}

export default MenuBar;