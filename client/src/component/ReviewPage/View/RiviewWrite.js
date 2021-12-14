import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
const RiviewForm = styled.div`
  table {
    width: 50%;
  }
  .thumbnail {
    margin-left: 70px;
    width: 100px;
    height: 100px;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
  }

  textarea {
    height: 200px;
    resize: none;
  }
`;
let role = [];

function ReviewWrite(props) {
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const restaurantdata = await axios.get("/restaurant");
      role = restaurantdata.data;
      setData(role);
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  const { title } = props;

  const setThumbnail = (event) => {
    var reader = new FileReader();
    reader.onload = function (event) {
      const imageContainer = document.getElementById("img-container");
      var img = document.createElement("img");
      img.setAttribute("id", "reviewimg");
      img.setAttribute("src", event.target.result);
      imageContainer.innerHTML = "";
      imageContainer.appendChild(img);
    };

    reader.readAsDataURL(event.target.files[0]);
  };
  const saveReview = () => {
    const reviewtitle = document.getElementById("reviewTitle");
    const reviewaddress = document.getElementById("reviewAddress");
    const reviewcontent = document.getElementById("reviewContent");
    const reviewimg = document.getElementById("img-container").firstChild;
    const reviewwriter = document.getElementById("reviewWriter");
    console.log(reviewwriter.value);
    console.log(reviewtitle.value);

    console.log(reviewimg.src);
    const send = async () => {
      try {
        const result = await axios.post("/review", {
          제목: reviewtitle.value,
          식당이름: reviewaddress.value,
          내용: reviewcontent.value,
          이미지: `${reviewimg.src}`,
          작성자: reviewwriter.value,
        });
      } catch (e) {
        console.log(e.message);
      }
    };
    send();
  };
  //<form method="post" encType = "" action=""> </form>
  //<input type="submit" className="btn-primary pull-right" value="후기 저장"/>
  return (
    <center>
      <RiviewForm>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>음식점 후기 쓰기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  id={"reviewTitle"}
                  type="text"
                  className="form-control"
                  placeholder="글 제목"
                  name="bbsTitle"
                  maxLength="50"
                />
              </td>
            </tr>

            <tr>
              <td>
                <input
                  id={"reviewAddress"}
                  type="text"
                  list="data"
                  className="form-control"
                  placeholder="주소"
                  name="map"
                  maxLength="50"
                />
                <datalist id="data">
                  {data.map((content) => (
                    <option value={content.이름} />
                  ))}
                </datalist>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  id={"reviewWriter"}
                  type="text"
                  className="form-control"
                  placeholder="작성자"
                  name="bbsWriter"
                  maxLength="50"
                />
              </td>
            </tr>

            <tr>
              <td>
                <textarea
                  id={"reviewContent"}
                  className="form-control"
                  placeholder="글 내용"
                  name="bbsContent"
                  maxLength="2048"
                ></textarea>
                <div id={"img-container"} className="thumbnail"></div>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="file"
                  name="fileName"
                  accept="image/*"
                  onChange={setThumbnail}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={saveReview}>후기 저장</button>
      </RiviewForm>
    </center>
  );
}
export default ReviewWrite;
