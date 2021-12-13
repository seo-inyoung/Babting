import React, {useEffect, useRef,useState} from "react";
import styled from 'styled-components';

//stlye format
// const ReviewBtnStyle = styled.div`
// button{
// background-color : white;
// border-radius: 50%;
// width: 50px;
// height: 50px;
// font-size: 30px;
// }
// `;
const RiviewForm = styled.div `
table {
    width:50%;
}
.thumbnail{
    margin-left: 70px;
    width: 100px;
    height: 100px;
}

.thumbnail img{
    width: 100%;
    height: 100%;
}

textarea{
    height: 200px;
    resize: none;
}
`;
function ReviewWrite() {
    useEffect(()=>{})
    const setThumbnail=(event)=> {
        var reader = new FileReader();
            reader.onload = function(event){
            const imageContainer = document.getElementById('img-container'); 
            var img = document.createElement("img");
            img.setAttribute("src",event.target.result);
            console.log("success");
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        };
    
    reader.readAsDataURL(event.target.files[0]);
    }
    return(
        <center>
        <RiviewForm>
        <form method="post" encType = "" action="">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>음식점 후기 쓰기</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" className="form-control" placeholder="글 제목" name="bbsTitle" maxLength="50"/></td>
                </tr>
                  
                <tr>
                    <td><input type="text" className="form-control" placeholder="주소" name="map" maxLength="50"/></td>
                </tr>
            
                <tr>
                    <td><textarea className="form-control" placeholder="글 내용" name="bbsContent" maxLength="2048"></textarea>
                        <div id ={"img-container"} className="thumbnail" ></div>
                    </td>
                    
                </tr>
                <tr>
                    <td><input type="file" name="fileName" accept="image/*" onChange={setThumbnail}/></td>
                </tr>
            </tbody>
            </table>
                <input type="submit" className="btn-primary pull-right" value="후기 저장"/>
    </form>
    </RiviewForm>
    </center>
    );
}
export default ReviewWrite;