
/***********************************************************
 *
 *  이미지 확대 축소 클릭 이벤트
 *
************************************************************/
        
$(document).ready(function(){

	// 처음 flag값을 false로 초기화함.
	// flag는 현재 사진이 확대되었는지 여부를 참, 거짓으로 알려줌.
	// data()함수는 flag에 값을 false로 초기화 함.

		$("#pic_univ").data("flag","false");

		//flag 값에 따라 스타일을 small과 large를 교환하며 사용
		$("#pic_univ").click(function(){

			// 이미지의 데이타 값(true/false)을 bflag에 저장함.
		   var bflag = $("#pic_univ").data("flag");

			if(bflag == "false"){
				bflag = "true";
				$("#pic_univ").removeClass("small");
				$("#pic_univ").addClass("large");
			}else{
				bflag = "false";
				$("#pic_univ").removeClass("large");
				$("#pic_univ").addClass("small");
			};
			$("#pic_univ").data("flag", bflag);
		});

	// attr() 은 선택자에 의해 선택된 요소들 중에서 제일 처음 요소의 속성값을 가지고 오는 함수 임.
	// 만일 모든 요소들의 속성값을 개별적으로 알고 싶다면, j
	// Query의 .each()함수나 .map() 함수를 사용해야 함.
	// 인자에 따라 2가지로 사용할 수 있음. 하나의 인자만 있다면 속성값을 가져오는 것이고
	// 2개의 인자를 쓰면 속성값을 요소에 부여하는 것.
		var isrc = "../resource/virtual_images/fotorama_images/";
		var rsrc = $(".img_src").attr("src");
		$(".img_src").attr("src", isrc + rsrc);
		//alert(rsrc);


		//img 엘리먼트 순서대로 src값 가져옴.
		$(".fotorama img").each(function(){

			var list = $(this).attr("src");
			//alert(list);
			});



	/*******************************************
	*
	* 지도표시 map2.html 페이지 설정
	*
	*******************************************/

	//초기 위치를 설정 안산 대학교로 설정 위도경도(37.30981 / 126.87560) 영덕(36.4557390,129.4068440)
	var StartLatLng = new google.maps.LatLng(37.261438, 127.048445);
	$("#map_canvas").gmap({"center":StartLatLng, "zoom":16});


	 //현위치 버튼처리
	 $("#current_location").click(function(){
	 $("#map_canvas").gmap("getCurrentPosition", function(position, status){

	 if(status === "OK"){
	 var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
	 //var markerBlue ="http://google-maps-icons.googlecode.com/files/hostel2star.png";
	 var markerBlue = "http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png";
	 $("#map_canvas").gmap("get","map").panTo(latlng);
	 $("#map_canvas").gmap("addMarker", {"position":latlng, "icon":markerBlue});
	 }
	 else {
	 alert("현재위치를 찾을 수 없습니다.");
	 }
	 }); //$("#map_canvas").gmap() 끝
	 }); //$("#current_location").click()끝


	 // 핀 놓기
	  $("#put_pin").click(function(){
	 //집으로 설정
	 var StartLatLng = new google.maps.LatLng(37.261438, 127.048445);
	 var markerRed = "http://google-maps-icons.googlecode.com/files/hostel2star.png";
	 $("#map_canvas").gmap("get", "map").panTo(StartLatLng);
	 $("#map_canvas").gmap("addMarker",{"position":StartLatLng, "icon":markerRed}).click(function(){
	 $("#map_canvas").gmap("openInfoWindow",{"content":"우리집 위치"},this);
	 });//$("#map_canvas").gmap("addMarker")끝
	 });//$("#put_pin").click() 끝








}); // -- .ready() 끝 --