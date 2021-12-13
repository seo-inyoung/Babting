import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Reviews from "../../../static_data/review";

import ReviewView from './ReviewView';

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
function ReviewRead () {
    const [text, setText] = useState('');
    const titleInput = useRef();
    const onClick = () => {
        const title = titleInput.current;
        setText(title.value);
    }
    return(
        <>
        <FilterBtn>
        <div className={"row justify-content-center"}>
            <input ref={titleInput} className={"col-md-4 col-xs-5"} placeholder="후기가 궁금한 음식점을 검색해보세요."/>
            <button className={"col-md-1 col-xs-2"} onClick={onClick}>검색 </button>
        </div> 
     </FilterBtn>
     <ReviewView reviews={Reviews} title={text}></ReviewView>
     </>
    );
}

export default ReviewRead;