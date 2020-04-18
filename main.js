//Get all posts
$("button#1").click(function(){
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts",function(users){
		var list=$("ul#userList");
		list.empty()
		users.forEach(function(user){
			var li = $("<li></li>");
			li.text(JSON.stringify(user));
			list.append(li)
			
		})
		
	})	
})

//2 Get post with id of 10
$("button#2").click(function(){
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/?id=10",function(users){
		var list=$("ul#userList");
		list.empty()
		users.forEach(function(user){
			var li = $("<li></li>");
			li.text(JSON.stringify(user));
			list.append(li)
			
		})
		
	})	
})

//3 Get the comments from post with id of 12
$("button#3").click(function(){
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=12",function(users){
		var list=$("ul#userList");
		list.empty()
		users.forEach(function(user){
			var li = $("<li></li>");
			//li.text(JSON.stringify(user));
			li.text(user.body)
			list.append(li)
			
		})
		
	})
})

//4 Get all the posts from user with id of 2
$("button#4").click(function(){
	$.get("http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/?userID=2",function(users){
		var list=$("ul#userList");
		list.empty()
		users.forEach(function(user){
			var li = $("<li></li>");
			li.text(JSON.stringify(user));
			list.append(li)
			
		})
		
	})	
}) 
//5 Create a new post and log the id generated for it by the server
$("button#5").click(function(){
	$.post("http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts",{
		userId: 15,
		title: "My first post",
		body: "Life is good"
	}, 	function(data){
		//console.log(data.body)
		var list=$("ul#userList");
		list.empty()
		var li = $("<li></li>");
			li.text(JSON.stringify(data));
			list.append(li)
	})

})
//6 Replace the post with id of 14 and render the responseJSON
$("button#6").click(function(){
$.ajax({
	method: 'PUT',
	url: "http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14",
	data: {
		userId: 1,
		title: "New Post",
		body: "New post added"
	},
	complete: function(response){
		//console.log(response.responseJSON);
		var list=$("ul#userList");
		list.empty()
		var li = $("<li></li>");
			li.text(JSON.stringify(response.responseJSON));
			list.append(li)
		
	}
})
})
//7 Update the title of post with id of 14 and render responseJSON
$("button#7").click(function(){
	$.ajax({
		method: 'PUT',
		url: "http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14",
		data: {
			title: "New Post"
		},
		complete: function(response){
			//console.log(response.responseJSON);
			var list=$("ul#userList");
			list.empty()
			var li = $("<li></li>");
				li.text(JSON.stringify(response.responseJSON));
				list.append(li)
			
		}
	})
	})
	//8 Delete the post with id of 14 and render a success message
	$("button#8").click(function(){
		$.ajax({
			method: 'DELETE',
			url: "http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14",
			
			complete: function(response){
				//console.log(response.responseJSON);
				var list=$("ul#userList");
				list.empty()
				var li = $("<li></li>");
					li.text(JSON.stringify(response.statusText));
					list.append(li)
				
			}
		})
		})
		//9 Display a list of posts.
		$("button#9").click(function(){
			$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts",function(users){
				var list=$("ul#userList");
				list.empty()
				users.forEach(function(user){
					var li = $("<li></li>");
					li.text(JSON.stringify({"postId":user.id,"post":user.body}));
					list.append(li)				
				})
				
			})	
		})

		$(document).on('click','li', function(ev){
			var url = "https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id="
			+JSON.parse($(this).text()).postId
			//alert (url)

			$.get(url,function(users){
					var list=$("ul#userList");
					list.empty()
					users.forEach(function(user){
					var li = $("<li></li>");
					//li.text(JSON.stringify(user));
					li.text(user.body)
					list.append(li)
				})
			})
			
		  });
		
		



 





