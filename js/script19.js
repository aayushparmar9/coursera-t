// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("#btn")
      .addEventListener("click", function () {

       var ques=document.getElementById("ques").value;
        
        // Call server to get the name
         if(document.getElementById("btn").value === "Start Test")
        
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = res.Question1;
               document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
               
             });

                          
     }            
              
            
if(document.getElementById("btn").value === "Submit"){      
  $ajaxutils
.sendGetRequest("name.json",
function(res){
var answer=res.answer1;
var response =" ";
if(document.getElementById("answer1").checked){
	      	response = "true"; 
              }else{
		response = "false"; 
	      }
              var message = " "; 
	      if(response == answer){
	      	message = "Your answer is correct!"; 
	      }else{
		 message = "Your answer is wrong!"; 
	      }
		document.querySelector("#content")
                	.innerHTML = "<h2>" + message + "</h2>";
            });
	}
	document.getElementById("btn").value = "Submit";
	


 		
      });
  }
);







