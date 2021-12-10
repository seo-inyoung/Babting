/*global kako */
//https://developers.kakao.com/ api받아오기
//https://cotist.tistory.com/3 참고 
//https://apis.map.kakao.com/web/sample/addMapCenterChangedEvent/ LatLng이랑 level 알아 올 수 있음
import React, {useRef,useEffect} from "react";
import styled from 'styled-components';

const markerdata =[
    {
      title: "클럽에반스",
      lat: 37.55033897015321,
     lng: 126.9229336137093, 
    },
    {
      title: "치차티클럽",
      lat: 37.57109940534566,lng: 127.01135026952784, 
    },
    {
      title: "TRVR Cafe",
      lat:37.53838839800507, 
      lng: 126.99353635603627,
    },
    {
      titel:"용용선생",
      lat:37.55939806463767, 
      lng: 127.03980732534552,
    },
  ];
  
const MapViewStyle = styled.div `
#map {
    width: 65%;
    height:500px;
    margin: 0 auto;
}
@media screen and (max-width:958px ) {
    #map {
        width: 95%;
    }
}
`;

function Map() {
    useEffect(() => {
      mapscript();
    }, []);
  
    const mapscript = () => {
      let container = document.getElementById("map");
      let options = {
        center: new window.kakao.maps.LatLng(37.56284927225243, 126.97138694483239),
        level: 5,
      };
  
      //map
      const map = new window.kakao.maps.Map(container, options);
      
      markerdata.forEach((el) => {
        // 마커를 생성합니다
        new window.kakao.maps.Marker({
          //마커가 표시 될 지도
          map: map,
          //마커가 표시 될 위치
          position: new window.kakao.maps.LatLng(el.lat, el.lng),
          //마커에 hover시 나타날 title
          title: el.title,
        });
      });
    };
  
    return <div id="map"></div>;
  }

  function MapView(){
      return(
          <center>
        <MapViewStyle>
        <Map/>
        </MapViewStyle>
        </center>
      );
  }
  
  export default MapView;