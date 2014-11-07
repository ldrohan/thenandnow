$(document).ready(function(){
	$('#ajaxForm').submit(function(e){
		e.preventDefault();

		var postURL = '/photostory/create'
		var postData = $(this).serializeArray();
		var storyName = postData[0].value 
		var address = postData[1].value.split(" ").join("%20");
		var fileImage = postData[2].value

		var $photoDiv = '.row'
		var imgAPI = "https://maps.googleapis.com/maps/api/streetview?size=350x350&fov=120&pitch=10&location="
		var strOne="";
				strOne += "<div id=\"noob\" class=\"photoDiv container col-lg-4 col-md-4 col-sm-4\">";
				strOne += "      <button class=\"dltButton btn btn-danger btn-xs\">";
				strOne += "        <span class=\"glyphicon glyphicon-remove\"><\/span>";
				strOne += "      <\/button>";
				strOne += "      <h2>";
		var strTwo="";
				strTwo += "<\/h2>";
				strTwo += "        <ul class=\"container col-md-12\">";
				strTwo += "          <li class=\"col-md-6\">";
				strTwo += "          <img src=";
		var strThree="";
				strThree += "/><\/li>";
				strThree += "          <li class=\"col-md-6\"><img src=";
		var strFour="";
				strFour += "/><\/li>";
				strFour += "        <\/ul>";
				strFour += "      <footer> <span class=\"glyphicon glyphicon-eye-open\"></span> ";
		var strLast="";
				strLast += "<\/footer>";
				strLast += "    <\/div>  ";
		
		

		ajaxPOST(strOne,strTwo,strThree,strFour,strLast,postURL,storyName,address,imgAPI,fileImage,$photoDiv);
	})

	// Save photostory to DB and append to page on success
	function ajaxPOST(strOne,strTwo,strThree,strFour,strLast,postURL,storyName,address,imgAPI,fileImage,$photoDiv) {
		$("#noStories").fadeOut();
		$.ajax({url:(postURL), method: ('post'), 
				data: {"photoStory": {"name":storyName, "address":address, "apiImage":imgAPI + address, "fileImage":fileImage}}, 
					dataType: "json", success: function(data) {
						$($photoDiv).append(strOne + storyName + strTwo + fileImage + strThree + imgAPI + address + strFour + address.split("%20").join(" ") + strLast);
						$('#newStoryModal').modal('hide');
						$(':input','#ajaxForm').val('');
  
				} 
			});
	}

	$('.glyphicon-eye-open').click(function(){
		var id = $(this).closest('.container').attr('id');
		$('#largePhotoModal' + id).modal('show');
	});


	// Delete Photo Story
	$('.dltButton').on('click', function($noob) {
		var result = confirm("Are you sure you want to delete your photo story?");
		if (result==true) {
			var $container = $(this).closest('.container');
			console.log($container.attr('id'));
			$.ajax({
			  url: "/photostory/" + $container.attr('id'),
			  type: "delete",
			  dataType: "json",
			  data: {"_method":"destroy"},
			  	dataType: "json", success: function(data) {
						$container.fadeOut();
					}				
			});
		}
	});




});