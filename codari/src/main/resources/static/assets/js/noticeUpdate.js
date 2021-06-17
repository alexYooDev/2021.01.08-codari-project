$(function() {
	$("#fillout2").click(function() {
		$.ajax({
			url : "/notice/noticeUpdateView.do",
			type : "post",
			data : {
				"notice_id" : $("#notice_id").val(),
				"notice_title" : $("#notice_title").val(),
				"notice_content" : $(".notice_content").val()
			},
			success : function(data) {
				alert(data);
				if (data == '수정되었습니다.')
					location.href = "/notice/noticeList.do";
				else
					(data == '수정실패(error)')
			}
		});
	});
});