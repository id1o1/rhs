var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});
var inx=0, // the button index that must be clicked
    totalButtons = $('.buttons-wrapper').find('div.btn').length; // total number of buttons
var myInterval = setInterval(clickButton, 4000); // name of the function that needs to be triggered, time interval in miliseconds


function clickButton() {
  if (inx >= totalButtons) // check for out of index
     inx = 0;
  $('.buttons-wrapper').find('.btn').eq(inx).find('a').first().trigger('click');
  inx=inx+1; // adding one unit to the index
}