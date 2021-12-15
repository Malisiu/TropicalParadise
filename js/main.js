const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const navLink = document.querySelectorAll('.nav__item');


const handleNav = () => {
    nav.classList.toggle('nav--active')
    
    navLink.forEach(item =>{
        item.addEventListener('click',()=>{
            nav.classList.remove('nav--active')
        })
    })


    handleNavItemsAnimation() ;
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;


    navLink.forEach(item =>{
        item.classList.toggle('nav-items-animation')

        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}


navBtn.addEventListener('click' , handleNav)
