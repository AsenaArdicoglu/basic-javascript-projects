const button = document.querySelector('#btn');
//const content = document.getElementById('content');

// click = tiklama
//dbclick = cift tiklama
//focus = odaklanma
//blur = odagi kaybetme

const content = document.querySelector(button.dataset.target) 
button.innerText = button.dataset.hide
button.addEventListener('click', () => {
    //console.log('butona tiklama basarili');
    if (
        content.style.display === ' ' ||
        content.style.display === 'block'
    ) {
        //console.log('content sayfada gorunur');
        content.style.display = 'none';

        //butonun text'ini goster olarak ayarlama;
        button.innerText = button.dataset.show
    }else {
        //console.log('content gorunmez');
        content.style.display = 'block'
        button.innerText = button.dataset.hide
    }
})