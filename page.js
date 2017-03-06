const $ = require('jquery');
const vjs = require('video.js');

$(document).ready(() => {
    console.log('hello world');

    const text = document.getElementById('text');
    text.innerHTML = 'hello';

    vjs('vid');
});