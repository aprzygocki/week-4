var $carousel = document.querySelector('.carouselbox');
var $next = document.querySelector('.next');
var $prev = document.querySelector('.prev');
$carousel.style.backgroundImage = "url('https://www.picsum.photos/300/200')";
var index = 0;
var images = [
    "https://www.picsum.photos/200/200",
    "https://www.picsum.photos/300/300",
    "https://www.picsum.photos/400/400",
    "https://www.picsum.photos/500/500"
];
var currentImage;
function navigate(direction) {
    event.stopPropagation()
    index = index + direction; 
    if(index < 0) {
        index = images.length - 1;
    } else if(index > images.length - 1) {
        index = 0;
    }
    currentImage = images[index];
    $carousel.style.backgroundImage = `url("${currentImage}")`;
}
$next.addEventListener('click', function(event) {
    event.stopPropagation();
    navigate(1);
});
$prev.onclick = function(event) {
    event.stopPropagation();
    navigate(-1);
}
$carousel.onclick = function() {
    window.location.href = images[index];
}