// CSP Workflow - Main.JS
// Kasene Clark - City Side Productions

function updateClientUserInfo(FirstName, LastName, AvatarURL){
	
	$("#LoadingModal").modal("show")
	
	$("#User_Name").html(FirstName + " " + LastName);
	$("#User_Avatar").attr("src", AvatarURL);
	
	
	$("#LoadingModal").modal("hide");
		
}


function checklogin(){
	
	//$("#LoadingModal").modal("show");
	
	$.ajax({
		
		url: "http://www.citysideproductions.com/CSPWorkflow/checkLogin.php",
		type: "POST",
		dataType: "json",
		
		success: function(data) {
			
			if (data.loggedin){
			
				//$("#LoadingModal").modal("hide");
				updateClientUserInfo(data.firstname, data.lastname, data.avatarurl);
				
			}else{
			
				$("#LoginModal").modal("show");
				
			}
			
		}
		
	});
	
}

$(document).ready(function() {

	
	checklogin();




	$("#LoginBtn").click(function() {
		
		// Get Files
		var email = $("input[name='email']").val();
		var password = $("input[name='password']").val();
		
		var PostData = "email=" + email + "&password=" + password;
		
		$("#LoginModal").modal("hide");
		$("#LoadingModal").modal("show");
		
		
		$.ajax({
			
			url: "http://www.citysideproductions.com/CSPWorkflow/userLogin.php",
			type: "POST",
			dataType: "json",
			data: PostData,
			
			success: function(data) {
				
				if (data.success){
				
					$("#LoadingModal").modal("hide");
					
				}else{
				
					$("#LoadingModal").modal("hide");
					$("#LoginModal").modal("show");
					$("#LoginAlert").removeClass("hide");
					$("#LoginAlert").html(data.message);
					
				}
				
			}
			
		});
		
		
	});
	


});