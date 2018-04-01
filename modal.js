//This Javascript Program is being used to send form Data from a bootstrap created from, to a modal created in bootsrap, that displays a completed message to the user. This Program helps to demonstrate the functionality of a would-be back end or server side functionality to the form that would store the input data, and return a message of completion


//in .parallax5, we will be adding a click event listener to a form submit button to then toggle the bootsrap modal to appear and display a completed for submission message

//upon closing the modal, the form will dissapear, and the grid view project feed will expand to fill the space. this feature is currently not working correctly.
     


     $(window).on('load', function() { 
         $('#myModal').on('hidden.bs.modal', function(){
             $("#formToggle").attr('style', "display:none"); 
         });

     });


    // var form = document.querySelector('form');
//  form.style.display = "none";




