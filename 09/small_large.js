
/***********************************************************
**  이미지 확대 축소 클릭 이벤트 
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
// 인자에 따라 2가지로 사용할 수 있음. 
// 하나의 인자만 있다면 속성값을 가져오는 것이고 
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
			
}); // -- .read() 끝 --