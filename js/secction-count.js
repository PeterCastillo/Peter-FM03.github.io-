const btn = document.querySelectorAll('.btn');
const count = document.querySelector('.count');
const frag = document.createDocumentFragment();

let contador = 0;

btn.forEach(element => {
    element.addEventListener('click', () => {
        if(element === btn[1]) {
            contador++;
            count.innerHTML= contador;
        }
        else if (element === btn[0]) {
            contador--;
            if(contador ===0) {
                console.log('hola')
            }
            count.innerHTML= contador;
        };
    });
});






