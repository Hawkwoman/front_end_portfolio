//This program runs when the user perfroms a window resizing, and is meant to alert mobile users that they can check out the site's parallax features in the web browser.

window.addEventListener ("resize", mobileAlert)  //event listener claled on the resizing of the screen triggering the function
    function mobileAlert() {   //call  function
        var windowSize = $(window).width();  //define variable 
        if (windowSize <= 479) {  //conditional statement tests to determine when to display the alert and prevents constant alert box popping up as viewport resizes
    alert("View in browser to see Parallax scrolling effects!\n Parallax is disabled in mobile by default"); //display an alert to the user
    }
}