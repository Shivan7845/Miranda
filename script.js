const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to(".page1",{
    y:"-20vh",
    scale:0.6,
    duraion:0
})
tl.to(".page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duraion:0.8,
})

