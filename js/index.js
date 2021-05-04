let navLinks = document.querySelectorAll('.nav-link');
let navBar = document.querySelector('.nav');

navLinks.forEach((navLink) => {

    /* Add event listeners */
    navLink.addEventListener('mouseover', () => {
        navLink.style.color = 'red';
        navBar.style.background = 'gray';
    })
    navLink.addEventListener('mouseout', () => {
        navLink.style.color = '#212529';
        navBar.style.background = '';
    })
});
console.log('yes');