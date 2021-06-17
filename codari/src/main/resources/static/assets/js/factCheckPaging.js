var page = 1;
$(function() {
	console.log(page + " 번쨰 페이지");
	console.log("페이지 불러왔습니다");
    page++;
});
var ajaxSwitch = false;
$(window).scroll(function(){
	if(Math.ceil($(window).scrollTop()) >= $(document).height() - $(window).height()) {
		if (ajaxSwitch == false) {
			ajaxSwitch = true;
			$(`div#loading`).after(`<img id="removeImg" alt="하이요" style="display: block; margin:0 auto !important;" src="/img/viewLoading.gif" /><br><strong><p style="text-align: center" id="removeImg">손 씻기에 동참해주세요!</p></strong>`)	
			setTimeout(function() {
				console.log(page + " 번쨰 페이지");
				getList(page);
				page++;
				console.log("페이지를 불러왔습니다.");
				$(`#removeImg`).remove();
				$(`#removeImg`).remove();
				ajaxSwitch = false;
			}, 1000);
		} else {
			console.log("기다리세요");
		}
    } else {
    }
});

function getLoadingBar() {
	$.ajax({
		type	: 'GET',
		dataType: 'html',
		async	: false,
		url		: '/fact/loadingBar',
		success	: function(data) {
			$(`#sections`).html(data);
		},
		error	: function(e) {
			console.log("오류가 나왔습니다.");
		}
	});
}
function getList(page){
   $.ajax({
       type		: 'POST',  
       dataType : 'html',
       data		: {"page": page},
       async	: false,
       url		: '/fact/factCheckTest',
       success	: function(returnData) {
    	   var lastPage =  $(`#sections`).html();
    	   console.log("data 가져오기 성공");
    	   $(`#sections`).html(lastPage + returnData);
      },
      error : function(e){
          if(e.status==300){
              alert("데이터를 가져오는데 실패하였습니다.");
          };
      }
   }); 
}
