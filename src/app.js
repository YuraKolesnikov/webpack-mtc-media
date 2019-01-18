import './sass/main.sass'
import '@babel/polyfill'
const Flickity = require('flickity')
/* Slider */
const slider = new Flickity('.slider__main', {
    initialIndex: 0,
    prevNextButtons: true,
    freeScroll: false,
    wrapAround: true,
    autoPlay: 5000,
    selectedAttraction: 0.05,
    friction: 0.67
})