$(function(){
	getReplyList();
	getAddReply();
});


function getReplyList(){
    $.ajax({
        type: "GET", //get방식으로 자료를 전달한다
        url: "/board/replyList.do", 
        data: {"bid": $("#board_id").val()},
        success: function(data){ 
            $(`#replyList`).html(data);
            $('#replyList').val().replace(/\n/g, "<br>");
        }
    });
}


function getAddReply(){
	$.ajax({
		type: "GET",
		url: "/board/addReply.do",
		data: {"bid" : $("#board_id").val()},
		success: function(data){ 
	         $(`#addReply`).html(data);
	        }
	}); 
	
} 