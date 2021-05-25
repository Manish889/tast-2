"use strict";

AOS.init({
  duration: 1500,
});

const redPack = document.getElementById("parallax-img1");

let parallax1 = new Parallax(redPack);

// second image

const bluePack = document.getElementById("parallax-img2");

let parallax2 = new Parallax(bluePack);

// 3rd image

const redSmall = document.getElementById("parallax-img3");
let parallax3 = new Parallax(redSmall);

const blueSmall = document.getElementById("parallax-img4");
let parallax4 = new Parallax(blueSmall);

// bowls

const bowlContainer = document.getElementById("tilt");

const tilt = $('.js-tilt').tilt();
tilt.on('change', callback); 

