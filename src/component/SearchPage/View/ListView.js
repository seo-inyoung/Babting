//import { useSSRSafeId } from '@react-aria/ssr'; //.?
//import userEvent from '@testing-library/user-event';
import React from 'react';
import styled from 'styled-components';

const contentBoxStyle = styled.div `
.contentBox:hover {
    background : gray;
    margin: 0 auto;
}
`;
const ContentBoxStyle = {
    border:'1px solid gray',
    height:'30px',
    float:'none',
    //margin : '0 auto'
}   
function ContentBox({content}) {
    return (
        <div style={ContentBoxStyle} className="col-sm-11 col-md-8 contentBox">
            <p>{content.id} {content.title} {content.introduce}</p>
        </div>
    );
}
function ListView(props) {
    const {contents} = props;
    return(
        <div className={"row justify-content-center"}>
            {contents.map((content) => (
                <ContentBox content={content} key = {content.id}/>
            ))}
        </div>
    );
}

export default ListView;