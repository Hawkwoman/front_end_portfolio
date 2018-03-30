
## Kris Hale: Web Dev

This project is a personal portfolio project submitted as a final project for the Front End Web Development Track of Code Louisville. 

## Description
```
My project utilizes a scroll effect called Parallaxing to add visual depth while the user interacts with the page and scrolls through content. It utilizes bootstrap to deploy a Form and Modal Response feature inviting the user to request freelancework. Bootstrap also powers the Card Deck style grid meant to display eyecatching examples of projects and live websites to display skill in various areas. Parallax scrolling is not mobile friendly, and so The feature must be changed to scroll in smaller viewports, which I have acheived with the help of media queries. A javascript function including a conditional statement alerts the user under certain viewport widths that parallax will be disabled, as the user "resizes" the viewport.

Attached are 2 unused JS Files that are work-in-progress. animate.JS is a program intended to create and animate a heading beneath the opening H1 that scrolls in from right over to left and invited the user to scroll to experience fun parallax effects. modal.js is a program intended to hide the form container after the modal success message has run. Currently there is an error running jquery and a fix is not yet deployed for this live project.

```



## Custom CSS Classes
```
I have created several classes, here I will describe 3 classes utilized to meet project requirements:

1. parallax ( .parallax )
This class fills the background of the title page with an image, creates a parallax effect, sets a text color, and centers the H1 element  titled "Hi, im Kris." by assigning a relative possition.

```.parallax { 
  /* The image used */
  background-image: url("../img/space/aurora.jpg");

  /* Set a specific height */
  height: 100%; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /*Text Styles*/
  color: whitesmoke;

  /*center text*/
  position:relative;
  width:1349px;
  height:100%;
}```

2. introInfo (.introInfo)
This class applie possitioning values in relation to the parent element to center the container on the page. It applies text color, font size, and other dimensional properties.

```.introInfo {
  max-width: 500px;
  margin: auto;
  text-align: left;
  color: rgb(218, 199, 32);
  font-size: 15px;


  /*center text*/
  position:absolute;
  left:50%;
  margin-left:-250px;
  top:50%;
  margin-top:px;
  width:500px;
  height:116px;

}```

3. bar-break (.bar-break)
This class styles the dark grey areas that break up each parallax section and add to the perceived depth of the parallax scrolling divs. This class applies text colors, centers text in the element, and is relative to its child paragraph element.


```.bar-break {
  background-color: #282e34;
  height: 20%;
  position:relative;
  width:1349px;
  height:20%;  
}```

```



## Custom JavaScript Functions
```
The javascript functions I created are:

1. function mobileAlert( mobileAlert() )
This program runs when the user perfroms a window resizing, and is meant to alert mobile users that they can check out the site's parallax features in the web browser. It opens an alert box once the user has resized their screen to a certain level indicative of mobile devices and tablets.


 ```window.addEventListener ("resize", mobileAlert)  //event listener claled on the resizing of the screen triggering the function
    function mobileAlert() {   //call  function
        var windowSize = $(window).width();  //define variable 
        if (windowSize <= 479) {  //conditional statement tests to determine when to display the alert and prevents constant alert box popping up as viewport resizes
    alert("View in browser to see Parallax scrolling effects!\n Parallax is disabled in mobile by default"); //display an alert to the user
    }
}```

```

