const menubtn = document.querySelector('.nav__logo--img--menu')
const menu = document.querySelector('.nav__list')
const client = document.querySelector('.nav__client')
const black = document.querySelector('.nav__logo')
const menuclosebtn = document.querySelectorAll('.back')
const shadow = document.querySelector('.black')

const hola = document.querySelector('.nav__logo')

const toggle = () => {
    menu.classList.toggle('nav__list-toggle')
    if(menu.classList.contains('nav__list-toggle')) {
        client.classList.add('nav__client-out');
        hola.classList.add('nav__logo-black');
        shadow.classList.add('black-show');

    }
    else {
        shadow.classList.remove('black-show');
        hola.classList.remove('nav__logo-black');
        client.classList.remove('nav__client-out');
    }
}

menubtn.addEventListener('click', toggle)

menuclosebtn.forEach(element => {
    element.addEventListener('click', toggle)
});







// const toggle = () => {  
//     if(menu.style.display === 'none'){
//         menu.style.display = 'block';
//         client.style.display = 'none';
//         shadow.style.display= 'block';
//     }
//     else {
//         menu.style.display = 'none'
//         client.style.removeProperty('display');
//         shadow.style.display= 'none';
//     }
// };

// menubtn.addEvenstListener('click', toggle)

// menuclosebtn.forEach(element => {
//     element.addEventListener('click', toggle);
// });