/*global kako */
//https://developers.kakao.com/ api받아오기
//https://cotist.tistory.com/3 참고
//https://apis.map.kakao.com/web/sample/addMapCenterChangedEvent/ LatLng이랑 level 알아 올 수 있음
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

// const markerdata = [
//   {
//     title: "클럽에반스",
//     lat: 37.55033897015321,
//     lng: 126.9229336137093,
//   },
//   {
//     title: "치차티클럽",
//     lat: 37.57109940534566,
//     lng: 127.01135026952784,
//   },
//   {
//     title: "TRVR Cafe",
//     lat: 37.53838839800507,
//     lng: 126.99353635603627,
//   },
//   {
//     title: "용용선생",
//     lat: 37.55939806463767,
//     lng: 127.03980732534552,
//   },
// ];

const MapViewStyle = styled.div`
  #map {
    width: 65%;
    height: 450px;
    margin: 0 auto;
  }
  @media screen and (max-width: 958px) {
    #map {
      width: 95%;
    }
  }
`;

function Map({contents}) {
  useEffect(() => {
    mapscript(contents);
  },[]);

  const mapscript = (contents) => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(
        37.56284927225243,
        126.97138694483239
      ),
      level: 8,
    };

    //map
    const map = new window.kakao.maps.Map(container, options);

    contents.map((item) => {
      // 마커를 생성합니다
      //console.log(item)
      const marker = new window.kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new window.kakao.maps.LatLng(item.위도, item.경도),
      
      });
      // allContent 변수를 선언해서 markerdata의 title,tag를 받아옴 맞나? ㅋㅋㅋㅋㅋ
      var allContent = `<div><center><img src="이미지" alt="이미지"/><br/>${item.이름}<br/>${item.주소}<br/>${item.대표음식}</center></div>`;
      // infowindow 선언 content:allContent로 다 띄울 수 있을 듯?
      var infowindow = new window.kakao.maps.InfoWindow({
        content: allContent
      });
      
      //마커에 mouseover, mouseout 이벤트를 등록함
      // 이벤트리스너로 클로저를 만들어줌
      // 안만들어주면 마지막 마커에만 이벤트 등록됨 ㅇㅇ
      window.kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map,marker, infowindow)

      );
      window.kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    });
    // 인포윈도우를 표시하는 클로저를 만드는 함수
    function makeOverListener(map, marker, infowindow) {
      return function() {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  };

  return <div id="map"></div> 
} 
//아니 왜 안됨? 진짜..
function MapView(props) {
  const {contents, Data} = props;
  return (
    <center>
      <MapViewStyle>
        <Map contents={contents} />
      </MapViewStyle>
    </center>
  );
}

export default MapView;

// /*global kako */
// //https://developers.kakao.com/ api받아오기
// //https://cotist.tistory.com/3 참고
// //https://apis.map.kakao.com/web/sample/addMapCenterChangedEvent/ LatLng이랑 level 알아 올 수 있음
// import React, { useRef, useEffect } from "react";
// import styled from "styled-components";

// const markerdata = [
//   {
//     title: "클럽에반스",
//     lat: 37.55033897015321,
//     lng: 126.9229336137093,
//   },
//   {
//     title: "치차티클럽",
//     lat: 37.57109940534566,
//     lng: 127.01135026952784,
//   },
//   {
//     title: "TRVR Cafe",
//     lat: 37.53838839800507,
//     lng: 126.99353635603627,
//   },
//   {
//     title: "용용선생",
//     lat: 37.55939806463767,
//     lng: 127.03980732534552,
//   },
// ];

// const MapViewStyle = styled.div`
//   #map {
//     width: 65%;
//     height: 450px;
//     margin: 0 auto;
//   }
//   @media screen and (max-width: 958px) {
//     #map {
//       width: 95%;
//     }
//   }
// `;

// function Map() {
//   useEffect(() => {
//     mapscript();
//   }, []);

//   const mapscript = () => {
//     let container = document.getElementById("map");
//     let options = {
//       center: new window.kakao.maps.LatLng(
//         37.56284927225243,
//         126.97138694483239
//       ),
//       level: 5,
//     };

//     //map
//     const map = new window.kakao.maps.Map(container, options);

//     markerdata.forEach((el) => {
//       // 마커를 생성합니다
//       new window.kakao.maps.Marker({
//         //마커가 표시 될 지도
//         map: map,
//         //마커가 표시 될 위치
//         position: new window.kakao.maps.LatLng(el.lat, el.lng),
//         //마커에 hover시 나타날 title
//         title: el.title,
//       });
//     });
//   };

//   return <div id="map"></div>;
// }

// function MapView() {
//   return (
//     <center>
//       <MapViewStyle>
//         <Map />
//       </MapViewStyle>
//     </center>
//   );
// }

// export default MapView;
