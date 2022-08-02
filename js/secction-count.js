const btn = document.querySelectorAll('.btn');
const count = document.querySelector('.count');

let contador = 0;

btn.forEach(element => {
    element.addEventListener('click', () => {
        if(element === btn[1]) {
            contador++;
            count.innerHTML= contador;
        }
        else if (element === btn[0]) {
            contador--;
            if(contador < 0) {
                contador = 0;
            }
            count.innerHTML= contador;
        };
    });
});

const addcart = document.querySelector('.secction__about__selection-addcart');
const cartcounter = document.querySelector('.counter')

let carrito = parseInt(cartcounter.innerHTML);

addcart.addEventListener('click', () => {
    let añadido = parseInt(count.innerHTML);
    if(añadido > 0) {
        carrito = carrito + añadido; 
        cartcounter.innerHTML= carrito
    }; 
    if (cartcounter.innerHTML > 0) {
        cartcounter.style.display = "block"
    }
});
     
window.addEventListener('load', function() {
    if (cartcounter.innerHTML == 0) {
        cartcounter.style.display = "none";
    };
});


// let span = document.createElement('span');
//     let cartcount = count.innerHTML;
//     span.innerHTML = cartcount
//     frag.appendChild(span); 
//     cart.appendChild(frag);

const cart = document.querySelector('.cart');
const cartshow = document.querySelectorAll('.cart-show')

cartshow.forEach(element => {
    element.addEventListener('click', () => {
        cart.classList.toggle('cart-toogle');
    });
});


