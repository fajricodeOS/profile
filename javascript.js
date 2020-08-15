// ----- search box (mobile navigation) -----
function mobileMenu() {
    var x = document.getElementById("navigation");
    if (x.style.height === "320px") {
        x.style.height = "56px";
    } else {
        x.style.height = "320px";
    }
}
// --x-- search box (mobile navigation) --x--

// ----- scroll to top -----
btnTop = document.getElementById("toTop");
window.onscroll = function() {scroll()};
function scroll() {
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}
function gotoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// --x-- scroll to top --x--
