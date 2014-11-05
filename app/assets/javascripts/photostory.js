$(document).ready(function(){
	$('#ajaxForm').submit(function(e){
		e.preventDefault();

		var postURL = '/photostory/create'
		var postData = $(this).serializeArray();
		var storyName = postData[0].value 
		var address = postData[1].value.split(" ").join("%20");
		var fileImage = postData[2].value
		var $photoDiv = '#photoDiv'
		var imgAPI = "https://maps.googleapis.com/maps/api/streetview?size=120x120&fov=120&pitch=10&location="

		ajaxPOST(postURL,storyName,address,imgAPI,fileImage,$photoDiv);
	})


	function ajaxPOST(postURL,storyName,address,imgAPI,fileImage,$photoDiv) {
		$.ajax({url:(postURL), method: ('post'), 
				data: {"photoStory": {"name":storyName, "address":address, "apiImage":imgAPI + address, "fileImage":fileImage}}, 
					dataType: "json", success: function(data) {
						console.log("success");
						$($photoDiv).append("<h2>" + storyName + "</h2><ul><li><img src=" + imgAPI + address + "/></li><li><img src=" + fileImage + "/><li></ul>");
						$('#newStoryModal').modal('hide');
				} 
			});
	}

});