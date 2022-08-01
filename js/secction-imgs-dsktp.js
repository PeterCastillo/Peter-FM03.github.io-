const imgsmall = document.querySelectorAll('.secction__product--small--element');
const imgbig = document.querySelector('.secction__product--big')



const noblur = () => { 
    imgsmall.forEach(element => {
        element.style.border = "solid 2px transparent";
        element.style.opacity = "1";
    });
};


imgsmall.forEach(element => {
    element.addEventListener('click', () => {
     noblur();
     element.style.border = "solid 3px var(--Orange)";
     element.style.opacity = "0.5";
     let smallimg = element.firstElementChild;
     let bigimgnew = smallimg.cloneNode();
     let bigimg = imgbig.firstElementChild;
     imgbig.replaceChild(bigimgnew,bigimg);
    });
});


