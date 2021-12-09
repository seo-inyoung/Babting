import React from "react";
import styled from 'styled-components';

const ReviewBtnStyle = styled.div`
button{
background-color : white;
border-radius: 50%;
width: 50px;
height: 50px;
font-size: 30px;
}
`;

const ReviewViewStyle = styled.div`
.sample {
    margin: 0 auto;
}
@media screen and (min-width:958px ) {
    .sample {
        width: 80%;
    }
}
`;
const ContentBoxStyle = {
    border:'1px solid gray',
    width:'250px',
    height:'250px',
    margin: '25px',
    float:'none',
    //margin : '0 auto'
}

function ContentBox({review}) {
    return (        
        <div style={ContentBoxStyle}>
            <p>{review.id}</p>
            <p>{review.img}</p>
            <p>{review.title}</p>
            <p>{review.introduce}</p>
        </div>
        
    );
}

function ReviewView(props) {
    const {reviews, title} = props;
    return (
        <> 
        <ReviewBtnStyle>
        <button>+</button>
        </ReviewBtnStyle>
        <p>{title}</p>
        <ReviewViewStyle>
        <div className={"row justify-content-center sample"}>
            {reviews.map((review) => {
               if(title==review.title||title==''){return <ContentBox review={review} key = {review.id}/>}
            })}
        </div>
        </ReviewViewStyle>
     </>
    );
}

export default ReviewView;