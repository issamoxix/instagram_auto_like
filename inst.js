//the post pic class "FFVAD"
//the like button 'glyphsSpriteHeart__outline__24__grey_9 u-__7'[1]
//next button "HBoOv coreSpriteRightPaginationArrow"
var x = 0
document.getElementsByClassName('FFVAD')[0].click()
function like(x){
	setTimeout(function(){document.getElementsByClassName('glyphsSpriteHeart__outline__24__grey_9 u-__7')[1].click()},1000)
	console.log("like")
	setTimeout(function(){document.getElementsByClassName('HBoOv coreSpriteRightPaginationArrow')[0].click()},1000)
	console.log("page")
	x++
	console.log(x)
	re(x)
}
function re(x){
	//11 is the number of the posts to like 
	if(x!=11){
		setTimeout(function(){like(x)},3000)
	}else{
		alert('DONE !!!')
	}
}
re(x)