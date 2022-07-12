// using timeline

const tl = gsap.timeline({defaults:{ease:"power1.out"}});   //creating defaults for animation

// selecting different elements for animation
tl.to(".text" , {y:"0%",duration:1 , stagger : 0.7});   // 1st argument is query selector, next is the object which does all the animations , stagger - if object has multiple things /lines it helps us to set a time delay between them

tl.to("#slider-1",{y:"-100%",duration:0.7,delay:0.7});  // delay - it delay this animation
tl.to("#slider-2",{y:"-100%",duration:1.5,delay:0.5});

tl.to(".intro",{y:"-100%",duration:1},"-=1");  // "-=1" means start moving 1sec faster 

// specifing the from and to both for an element
tl.fromTo("nav",{opacity:0},{opacity:1 , duration:2});    // animating with opacity  1st object is from second object is to object containing duration of animation

tl.fromTo(".appear-text",{opacity:0,y:"100%"},{opacity:1,y:"0%",duration:1,stagger:0.7},"-=1");