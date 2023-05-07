var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 2700);
        function frame() {
            if (width >= 99) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the id of the <path> element and the length of <path>
    var triangle = document.getElementById("triangle");
    var length = triangle.getTotalLength();
  
    // The start position of the drawing
    triangle.style.strokeDasharray = length;
  
    // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
    triangle.style.strokeDashoffset = length;
    
    // Add the 'visibility: hidden' property to the initial styling of the element
    triangle.style.visibility = "hidden";
  
    // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
    window.addEventListener("scroll", myFunction);
  
    function myFunction() {
      // Show the element when scrolling starts
      triangle.style.visibility = "visible";
  
      var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
      var draw = length * scrollpercent;
  
      // Reverse the drawing (when scrolling upwards)
      triangle.style.strokeDashoffset = length - draw;
    }
  });
  
  
  