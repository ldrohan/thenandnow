$(document).ready(function(){
	$('#ajaxForm').submit(function(e){
		e.preventDefault();
		
		var postURL = 'photostory/create'
		var postData = $(this).serializeArray();
		var storyName = postData[0].value
		var address = postData[1].value.split(" ").join("%20");
		var fileImage = postData[2].value
		var $photoDiv = '#photoDiv'
		var imgAPI = "<img src=https://maps.googleapis.com/maps/api/streetview?size=75x75&fov=120&pitch=10&location="
		console.log(postData);
		// <h2><%= story.name  %></h2>
  //       <ul>
  //         <li><%= image_tag story.photoone, {height: 75} %></li>
  //         <li><%= image_tag story.phototwo, {height: 75} %></li>
  //       </ul>

		$($photoDiv).append("<h2>" + storyName + "</h2><ul><li>" + imgAPI + address + "/></li><li><img src=" + fileImage + "/><li></ul>");
		
		$('#newStoryModal').modal('hide');
		





		// $.ajax(
  //   {
  //       url : postURL,
  //       type: "POST",
  //       data : postData,
  //       success:function(data, textStatus, jqXHR) 
  //       {
  //           //data: return data from server
  //       },
  //       error: function(jqXHR, textStatus, errorThrown) 
  //       {
  //           //if fails      
  //       }
  //   });
	})
});


