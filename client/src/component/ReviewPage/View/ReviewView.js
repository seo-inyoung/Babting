import React, {useEffect, useRef,useState} from "react";
import styled from 'styled-components';
import axios from 'axios';

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
            <p>{review.식당이름}</p>
            <p>{review.제목}</p>
            <p>{review.내용}</p>
            <p>{review.이미지.data}</p>
        </div>
        
    );
}
let role = [];
function ReviewView(props) {
    const [reviews, setReviews] = useState([]);
    useEffect(
        async() => {
            try{
                const review = await axios.get("/review");
                role = review.data;
                console.log(role);
                setReviews(role);
            }catch(e){console.log(e.message);}
        },[]
    )
    const {title} = props; //const {title} = props;
    const naverUrl = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=';
    return (
        <>
        <p>{title}</p>
        <span><a href={naverUrl+title} target="_blank">{title}</a></span> 
        <ReviewViewStyle>
        <div className={"row justify-content-center sample"}>
            {reviews.map((review) => {
               if(review.식당이름.includes(title)||title==''){return <ContentBox review={review} key = {review.id}/>}
            })}
        </div>
        </ReviewViewStyle>
     </>
    );
}

export default ReviewView;
