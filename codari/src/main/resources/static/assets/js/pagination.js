

$(function(){
       		 		$(".paging").click(function(){
       				$.ajax({
       				url : `${window.location.pathname}N`,
       				data:{"pageNum": $(this).text()},
       				success:function(responseText){
       					$("#here").html(responseText);
       				}
       			});
       			 
       		 });
       		  
       	  });
