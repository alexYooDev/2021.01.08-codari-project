$(function() {
	$(`#btn1`).click(getTag);
	getCovidInfo();
});

function getCovidInfo() {
	$.ajax({
		type : "GET",
		url : "/covid/covidInfo",
		async : false,
		success : function(data) {
			$(`#covidInfo`).html(data);
		}
	});
}
function getTag() {
	var s = $(this).val();
	if (s == "숨기기") {
		$(this).val("보여주기").removeClass("hide").addClass("show");
		$(`div.wordCloud1`).html("");
	} else {
		$(this).val("숨기기").removeClass("show").addClass("hide");
		$(`#desc`).append(
				"<p>실시간 뉴스 태그를 받아오는 중입니다.. <br>(예상 소요 시간 : 약 45초)</p>");
		setTimeout(function() {
			$.when(responseJSOUP()).done(function() {
				$(`div#desc>p`).remove();
				console.log("index.html 끝났습니다.");
			});
		}, 1000);
	}
}

function responseJSOUP() {
	$.ajax({
		type : 'GET',
		dataType : 'html',
		async : false,
		url : '/word-cloud/jsoupData',
		success : function(data) {
			var jsons = JSON.parse(data);
			$(`#wordCloud`).html(data);
			wordCloudStart(jsons)
		},
		error : function(e) {
			console.log("데이터를 불러오지 못하였습니다.");
		}
	});
}
var color = d3.scale.linear().domain([ 0, 1, 2, 3, 4, 5, 6, 10, 15, 20, 100 ])
		.range(
				[ "#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777",
						"#666", "#555", "#444", "#333", "#222" ]);
function wordCloudStart(data) {
	d3.layout.cloud().size([ 800, 300 ]).words(data).padding(1).rotate(
			function() {
				return 0;
			}).fontSize(function(d) {
		return d.size;
	}).on("end", draw).start();
	console.log("워드 클라우드 불러옵니다.");
}
function draw(words) {
	d3.select("#wordCloud2").append("svg").attr("width", 850).attr("height",
			350).attr("class", "wordcloud").append("g").attr("transform",
			"translate(320,200)").selectAll("text").data(words).enter().append(
			"text").style("font-size", function(d) {
		return (d.size) + "px";
	}).style("fill", function(d, i) {
		return color(i);
	}).attr("transform", function(d) {
		return "translate(" + [ d.x, d.y ] + ")rotate(" + d.rotate + ")";
	}).text(function(d) {
		return d.text;
	});
}