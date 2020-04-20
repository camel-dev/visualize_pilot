// Vanilla JS
document.addEventListener('DOMContentLoaded', function() {
	  // code
	load_movielist();
});

// jQuery
/*$( document ).ready(function() {
    load_movielist();
});*/

function load_movielist() {
	var movieList;
	var html;

	// Vanilla JS
	document.getElementById('load_movieList').addEventListener('click', function() {
	// Jquery 
	// $("#load_movieList").click(function(){  
				
		
				// Vanilla JS
				var url = "/visualize_pilot/restex";

				var beforeSend = function() {
					var wrap = document.getElementById('movieList')
					while (wrap.firstChild)
						wrap.removeChild(wrap.firstChild)
				}

				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							console.log(xhr.responseText);
							movieList = JSON.parse(xhr.responseText);

							for (var i = 0; i < movieList.length; i++) {

								var tr = document.createElement('tr');
								var td1 = document.createElement('td');
								td1.innerHTML = movieList[i].movie_name
								tr.appendChild(td1);

								var td2 = document.createElement('td');
								td2.innerHTML = movieList[i].director;
								tr.appendChild(td2);

								var td3 = document.createElement('td');
								td3.innerHTML = movieList[i].types;
								tr.appendChild(td3);

								document.getElementById('movieList')
										.appendChild(tr);

							}

						} else alert(xhr.responseText);
					}
				}

				xhr.open("POST", url, true);
				xhr.setRequestHeader("Content-Type", "application/json");
				beforeSend();
				xhr.send(null);
				
				
				/*--------------------------------------------------------------------------*/
				// Jquery
				
				/*$.ajax({      
				 	type:"POST",  
				    url:url,      
				   data:params,      
				    success:function(args){
				        movieList = args;
				        for(var i=0;i<args.length;i++){
				            html = "<tr>"
				                    + "<td>" + args[i].movie_name + "</td>" 
				                    + "<td>" + args[i].director + "</td>"
				                    + "<td>" + args[i].types + "</td>"
				                    "</tr>";
				            $("#movieList").append(html);    
				        }
				        
				        
				        console.log(args);
				    },   
				    beforeSend:function(){
				        $("#movieList").empty();  
				    },
				    error:function(e){  
				        alert(e.responseText);  
				    }  
				});  */

	});

}








