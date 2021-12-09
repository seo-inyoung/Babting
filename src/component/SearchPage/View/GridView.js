import { style } from "dom-helpers";
import React from "react";
import styled from 'styled-components';

const GridViewStyle = styled.div`
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

function ContentBox({content}) {
    return (
        
        <div style={ContentBoxStyle}>
            <p>{content.id}</p>
            <p>{content.img}</p>
            <p>{content.title}</p>
            <p>{content.introduce}</p>
        </div>
        
    );
}
//속성으로 받아오는 contents는 contents.js에 있음.
function GridView(props) {
    const {contents} = props;     
    return(
        <GridViewStyle>
        <div className={"row justify-content-center sample"}>
            {contents.map((content) => (
                <ContentBox content={content} key = {content.id}/>
            ))}
        </div>
        </GridViewStyle>
    );
}
export default GridView;