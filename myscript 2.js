// JavaScript Document

function listPosts(data) {
	
	var output = '<ul data-role="listview" data-filter="true">';
	$.each(data.posts,function(key,val){
		
		var tempDiv =
		document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a",tempDiv).remove();
		var excerpt = tempDiv.innerHTML;
		output+='<li>';
		output+='<a href="#blog" onclick="showPost(' 
		+ val.id + ')">';
		output+='<h3>' + val.title + '</h3>';
		
		output+=(val.thumbnail) ?
		'<img src="' + val.thumbnail + '" alt="' + val.title + '" />':
		'<img src="../images/iPhone6.jpg" alt="View Source Logo" />';
		
		output+='<p>' + excerpt + '</p>';
		output+='</a>';
		output+='</li>';
	});
	output+='</ul>';
	$('#postlist').html(output);

}// list all the post

function showPost(id){
$.getJSON('http://joecastrobestdealer.weebly.com/store/c1/Featured_Products.html/?json=get_post&post_id=' + id + '&callback=?',
 function(data) {
	var output='';
	output+='<h3>' + data.post.title + '</h3>';
	output+= data.post.content;
	$('#mypost').html(output);
	});	//get JSON Data 

	
}
	
function listVideos(data){
	console.log(data);
	
	var output = '';
	for (var i=0; i<data.feed.entry.lenght; i++) {
		
		var title = data.feed.entry[i].title.$t;
		var thumbnail = data.feed.entry[i].media
		$group.media$thumbnail[0].url;
		
		var blocktype = ((i % 2)===1) ? b : a;
	output += '<div class="ui-block-' + blocktype + '">';
	output += '<h3 class="movietitle">' + title + '</h3>';
	output += '<img src="' + thumbnail + '" alt="' + title + '">';
	output += '</div>';
}
$('#listVideo').html(output);
}
function listTweets(data) {
	console.log(data); 
	var output = '<ul data-role="listview" data-theme="a">';
	$.each(data, function(key, val) {
	var text = data[key].text;
	var thumbnail = data[key].user.profile_image_url;
	var name = data[key].user.name;
	
	output +='<li>' ;
	output += '<img src="' + thumbnail + '" alt="Photo of ' + name + '">';	
	output += '<div>' + text + '</div>';
	output += '</li>';
	});
	output += '</ul>';
	$('#postlist tweetlist').html(output);
		
	
	
}