/*global kako */
//https://developers.kakao.com/ api받아오기
//https://cotist.tistory.com/3 참고 
//https://apis.map.kakao.com/web/sample/addMapCenterChangedEvent/ LatLng이랑 level 알아 올 수 있음
import React, {useRef,useEffect} from "react";
import styled from 'styled-components';

const MapViewStyle = styled.div `
.map {
    width: 65%;
    height:500px;
    margin: 0 auto;
}
@media screen and (max-width:958px ) {
    .map {
        width: 95%;
    }
}
`;
const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(37.56284927225243, 126.97138694483239), //지도의 중심좌표.
    level: 6, //지도의 레벨(확대, 축소 정도)
  };

function MapView () {
    const container = useRef(null);
    useEffect(() => {
        new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
        return () => {};
      }, []);
    return (
        <MapViewStyle>
            <div className="map" ref={container}>
            </div>
        </MapViewStyle>
        
    );
}

export default MapView;