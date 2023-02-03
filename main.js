/*console.log('hello world') para verlo poner script en html*/ 

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase-seraphine');
ScrollReveal().reveal('.showcase-integrantes');
ScrollReveal().reveal('.main-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-zero', {delay: 500});
ScrollReveal().reveal('.title-cards-banner', {delay: 500});
ScrollReveal().reveal('.title-cards-banner-2', {delay: 500});
ScrollReveal().reveal('.cards', {delay: 500});
ScrollReveal().reveal('.cards-2', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
ScrollReveal().reveal('.cards-banner-two-2', {delay: 500});

/*
const express = require('express')

const app = express()

const port = 3000



app.get('/', (req, res) => {

    res.send('Hello World!')

})



app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)

})*/