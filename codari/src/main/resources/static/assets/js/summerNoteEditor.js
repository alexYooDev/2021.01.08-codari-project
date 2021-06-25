$(function() {
	var fonts = [ '맑은 고딕', '돋움', '궁서', '굴림', '굴림체', '궁서체', '나눔 고딕', '바탕',
			'바탕체', '새굴림', 'HY견고딕', 'HY견명조', 'HY궁서B', 'HY그래픽M', 'HY목각파임B',
			'HY신명조', 'HY얕은샘물M', 'HY엽서L', 'HY엽서M', 'HY중고딕', 'HY헤드라인M', '휴먼매직체',
			'휴먼모음T', '휴먼아미체', '휴먼둥근헤드라인', '휴먼편지체', '휴먼옛체' ];
	console.log("페이지 불러왔습니다");
	$('#summernote').summernote(
			{
				height : 300, // set editor height
				minHeight : null, // set minimum height of editor
				maxHeight : null, // set maximum height of editor
				focus : true, // set focus to editable area after initializing
								// summernote
				fontNames : fonts.sort(),
				codemirror : {
					theme : 'pastel-on-dark',
					lineNumbers : true,
					tabSize : "8"
				},
				toolbar : [ [ 'style', [ 'style' ] ],
						[ 'font', [ 'bold', 'underline', 'clear' ] ],
						[ 'fontsize', [ 'fontsize' ] ],
						[ 'fontname', [ 'fontname' ] ],
						[ 'color', [ 'color' ] ],
						[ 'para', [ 'ul', 'ol', 'paragraph' ] ],
						[ 'table', [ 'table' ] ],
						[ 'insert', [ 'link', 'picture', 'video' ] ] ],
			});
});