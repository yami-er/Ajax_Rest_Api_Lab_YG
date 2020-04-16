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









