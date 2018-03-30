//This program runs when the user perfroms a window resizing, and is meant to alert mobile users that they can check out the site's parallax features in the web browser

window.addEventListener ("resize", mobileAlert)
    function mobileAlert() {
    alert("View in browser to see Parallax scrolling effects!\n Parallax is disabled in mobile by default");
}