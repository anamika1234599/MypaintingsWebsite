const hero = document.quereySelector('.hero');
const slider = document.quereySelector('.slider');
const logo = document.quereySelector('#logo');
const headline = document.quereySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(
    hero,
    1,
    {height: "0%"},
    {height: "80%", ease: Power2.easeInOut},
);