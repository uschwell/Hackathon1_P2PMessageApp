<<<<<<< HEAD
=======
<<<<<<< Updated upstream
=======
>>>>>>> messagingStart
/*!
* Start Bootstrap - Simple Sidebar v6.0.2 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
<<<<<<< HEAD
=======

/* 
Create array with responses
Create div for each box (which includes avatar, textbox and name)
append div for every new message (each message = 1 div)

<<<<<<< Updated upstream
<<<<<<< Updated upstream
*/
>>>>>>> Stashed changes
=======
*/
>>>>>>> Stashed changes
=======
*/
>>>>>>> Stashed changes
>>>>>>> messagingStart
