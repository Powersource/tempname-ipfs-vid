const $ = require('jquery');
const vjs = require('video.js');
const IPFS = require('ipfs');
const electron = require('electron');

$(document).ready(() => {
    const node = new IPFS();
    
    console.log('hello world');

    const text = document.getElementById('text');
    text.innerHTML = 'hello';

    vjs('vid');
});