// Supposedly how it works with webpack
// Eeh lol it helped even without...
var $ = require("jquery");

$(document).ready(() => {
    console.log('hello world');

    const text = document.getElementById('text');
    text.innerHTML = 'hello';
});