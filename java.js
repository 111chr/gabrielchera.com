const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle)
    const nav = document.getElementById(navbarId)


    if (headerToggle && navbarId) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle("active")
        })
    }
}
showMenu('header-toggle', 'navbar')


// const expandImage = document.querySelector('.expand-image');

// expandImage.addEventListener('click', () => {
//     expandImage.classList.toggle('expand-image-fullscreen');
// });