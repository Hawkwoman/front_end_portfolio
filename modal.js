//This Javascript Program is being used to send form Data from a bootstrap created from, to a modal created in bootsrap, that displays a completed message to the user. This Program helps to demonstrate the functionality of a would-be back end or server side functionality to the form that would store the input data, and return a message of completion


//in .parallax5, we will be adding a click event listener to a form submit button to then toggle the bootsrap modal to appear and display a completed for submission message

    $('#myModal').modal(show);




//the modal will have a click event that causes it to close



//upon closing the modal, the form will dissapear, and the grid view project feed will expand to fill the space

// $(document).on('hidden.bs.modal', '#myModal', function () {
//     $("#formToggle").hide();
//    });

   $(document).ready( function() {
    
    $('#formToggle').on('close', function(){
        $('#formToggle').attr('style', display = "none");
    });
});









// var form = document.querySelector('form');
// form.style.display = "none";

//$("#specific-form-id").remove();




//a possible circular animation to use on footer links

// $("#anything").circulate({

//     speed: 400,                  // Speed of each quarter segment of animation, 1000 = 1 second
//     height: 200,                 // Distance vertically to travel
//     width: 200,                  // Distance horizontally to travel
//     sizeAdjustment: 100,         // Percentage to grow or shrink
//     loop: false,                 // Circulate continuously
//     zIndexValues: [1, 1, 1, 1],  // Sets z-index value at each stop of animation

// });

