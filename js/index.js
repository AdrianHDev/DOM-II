let navLinks = document.querySelectorAll('.nav-link');
let navBar = document.querySelector('.nav');
let body = document.querySelector('body');

body.addEventListener('keypress', (ev)=>{
    if (ev.key === 'r') {  
        body.style.setProperty('transition', '5s');
        document.body.style.setProperty("-webkit-transform", "rotate(-1080deg)", null);
    }
})

body.addEventListener('wheel', () => {
    alert('STOP THAT >:(')   
    body.remove();
})

navLinks.forEach((navLink) => {

    /* Add event listeners */
    navLink.addEventListener('mouseover', () => {
        navLink.style.color = 'aquamarine';
        navBar.style.background = 'gray';
    })
    navLink.addEventListener('mouseout', () => {
        navLink.style.color = '#212529';
        navBar.style.background = '';
    })
});