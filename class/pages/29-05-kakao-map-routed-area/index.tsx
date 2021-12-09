import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=56f2f6456a4bc97487f111ba4669797c";
    document.head.appendChild(script); // head에 script를 넣음

    // https://apis.map.kakao.com/web/documentation/#load
    // query string: 위 사이트에서 autoload=false를 넣으라고 했는데 뒤에 appkey도 넣어야 하기에 중간에 &을 넣어 합쳐준다.

    // script가 로드 된 후 실행
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.48481, 126.89663), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // 마커가 표시될 위치입니다

        const polygonPath = [
          new window.kakao.maps.LatLng(33.450965145649576, 126.57020280169624),
          new window.kakao.maps.LatLng(33.450958085478554, 126.57011679275952),
          new window.kakao.maps.LatLng(33.45098043867851, 126.57006290510864),
          new window.kakao.maps.LatLng(33.45097328515681, 126.56995000794919),
          new window.kakao.maps.LatLng(33.450990859851004, 126.56981816664641),
          new window.kakao.maps.LatLng(33.45101296099739, 126.5696916806749),
          new window.kakao.maps.LatLng(33.45098334215462, 126.56960040542974),
          new window.kakao.maps.LatLng(33.450985176064975, 126.56947939729541),
          new window.kakao.maps.LatLng(33.450917277011726, 126.56939906680272),
          new window.kakao.maps.LatLng(33.45086322853736, 126.56941277823229),
          new window.kakao.maps.LatLng(33.45081577388131, 126.56937805752437),
          new window.kakao.maps.LatLng(33.450779813154405, 126.56940781273165),
          new window.kakao.maps.LatLng(33.45081633405741, 126.56953938654304),
          new window.kakao.maps.LatLng(33.45080569884398, 126.56972228175628),
          new window.kakao.maps.LatLng(33.450752219367345, 126.56990001069012),
          new window.kakao.maps.LatLng(33.45065801908533, 126.57003491859678),
          new window.kakao.maps.LatLng(33.45063139100987, 126.57015604858434),
          new window.kakao.maps.LatLng(33.45064506393239, 126.5701990028593),
        ];

        // 지도에 표시할 다각형을 생성합니다
        const polygon = new window.kakao.maps.Polygon({
          path: polygonPath, // 그려질 다각형의 좌표 배열입니다
          strokeWeight: 3, // 선의 두께입니다
          strokeColor: "#39DE2A", // 선의 색깔입니다
          strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid", // 선의 스타일입니다
          fillColor: "#A2FF99", // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        });

        // 지도에 다각형을 표시합니다
        polygon.setMap(map);

        // 다각형에 마우스오버 이벤트가 발생했을 때 변경할 채우기 옵션입니다
        const mouseoverOption = {
          fillColor: "#EFFFED", // 채우기 색깔입니다
          fillOpacity: 0.8, // 채우기 불투명도 입니다
        };

        // 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
        const mouseoutOption = {
          fillColor: "#A2FF99", // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        };

        // 다각형에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(polygon, "mouseover", function () {
          // 다각형의 채우기 옵션을 변경합니다
          polygon.setOptions(mouseoverOption);
        });

        window.kakao.maps.event.addListener(polygon, "mouseout", function () {
          // 다각형의 채우기 옵션을 변경합니다
          polygon.setOptions(mouseoutOption);
        });

        // 다각형에 마우스다운 이벤트를 등록합니다
        // var downCount = 0;
        // kakao.maps.event.addListener(polygon, 'mousedown', function() {
        //     console.log(event);
        //     var resultDiv = document.getElementById('result');
        //     resultDiv.innerHTML = '다각형에 mousedown 이벤트가 발생했습니다!' + (++downCount);
        // });
      });
    };
  }, []);
  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
