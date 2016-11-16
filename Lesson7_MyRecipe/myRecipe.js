
$("img").click(display2).after("<center>ENJOY  &#x263B</center>");

//displays the next element after the current target
function display(event) {
    
$(event.currentTarget).next().fadeIn("slow");    
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
//$("h3").click(display);

//displays and animates the next element after the current target
function display2(event) {
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
    
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
       $(this).css("background-color", "yellow");
       }, function(){
       $(this).css("background-color", "orange");
});

//$(document).ready(function(){
  //  $("h2").animate({fontSize: '30px'}, "slow");

//});
$(document).ready(function(){
    $("h2").hover(function(){
    
      
    
       $(this).css('color', 'red');
  $("h2").animate({fontSize: '28px'}, "slow");
  $("h2").animate({right: '10px'}, "slow");
$("h2").animate({left: '10px'}, "slow");

    });
});
$("h2").animate({
    right: 50,
    top: 50
}, "slow", function () { $(this).removeAttr('style'); });