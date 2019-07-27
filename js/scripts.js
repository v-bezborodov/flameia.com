$( document ).ready(function() {
//hover effect at navigation menu
$( ".menu-item-name a" ).mouseover(function() {
	$(this).parent().prev().children().children().addClass("opacity-alpha");
})
.mouseleave(function() {
	$(this).parent().prev().children().children().removeClass("opacity-alpha");})

$( ".menu-item-icon img" ).mouseover(function() {
	$(this).parent().parent().next().children().addClass("menu-items-hovered");
})
.mouseout(function() {
$(this).parent().parent().next().children().removeClass("menu-items-hovered");})

/***********************handling  scrolling inside div by arrows*************/
//scrolling down
 $(".arrow-feed:nth-last-child(2)").on("mousedown",function() {
 	scrollCurrentPosition = $(".article-newsfeed").scrollTop();
 	$(".article-newsfeed").animate({scrollTop:scrollCurrentPosition+40}, 1000);
 	
 });

//scrolling up
$(".arrow-feed:nth-last-child(1)").on('mousedown',function() {
 	scrollCurrentPosition = $(".article-newsfeed").scrollTop();
 	$(".article-newsfeed").animate({scrollTop:scrollCurrentPosition-40}, 1000);
 });
/*****************************handling season changing****************/
$(".town-block img").attr("src","./img/seasonframe/"+GetSeasonImage()+".png");
//console.log(GetSeasonImage());
function GetSeasonImage(){

	 date = new Date();
	 hour = date.getHours();
	 month = date.getMonth()+1;
	 day="";
	 night="";
	 fileNameImage="";
	fileNameImage=(month==1||month==2||month==3||month==11||month==12)&&(hour>=19&&hour<=23||hour>=0&&hour<=5)? "winter-night":
				  (month==1||month==2||month==3)&&(hour<=18&&hour>=6)? "winter-day":
				  (month==4||month==5)&&(hour<=18&&hour>=6)? "spring-day":
				  (month==4||month==5)&&(hour>=19&&hour<=23&&hour>=0&&hour<=5)? "spring-night":
				  (month==6||month==7||month==8)&&(hour<=18&&hour>=6)? "summer-day":
				  (month==6||month==7||month==8)&&(hour>=19&&hour<=23||hour>=0&&hour<=5)? "summer-night":
				  (month==9||month==10)&&(hour<=18&&hour>=6)? "autumn-day":
				  (month==9||month==10)&&(hour>=19&&hour<=23||hour>=0&&hour<=5)? "autumn-night":"summer-day";
	return fileNameImage;

}

})


