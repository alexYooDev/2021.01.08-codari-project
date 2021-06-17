$(function() {
	$("#fillout").click(function() {
		$.ajax({
			url : "/notice/noticeInsert2.do",
			type : "post",
			data : {
				"user_id" : $("#user_id").val(),
				"notice_title" : $("#notice_title").val(),
				"notice_content" : $(".notice_content").val(),
				"notice_view" : $("#notice_view").val(),
				"user_nickname" : $("#user_nickname").val()
			},
			success : function(data) {
				alert(data);
				if (data == '작성되었습니다.')
					location.href = "/notice/noticeList.do";
				else
					(data == '입력실패(error)')
			}
		});
	});
});