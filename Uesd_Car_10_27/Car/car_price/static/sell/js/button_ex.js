$(function(){
	$('#showbtn').click(function(){
		if($("#noneDiv").css("display") == "none"){
		$('#noneDiv').show();}
		else if($("#noneDiv").css("display") != "none"){
		$('#noneDiv').hide();}
	   });
});

