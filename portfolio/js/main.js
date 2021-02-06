let tl = gsap.timeline({defaluts: {ease: 'power2.in'}});


tl.to('.text', {
    y: '0%',
    duration: 1,
    stagger: 0.5
});
tl.to('.slider',{
    y: '-100%',
    duration: 1
});
tl.to('.intro', {
    y: '-100%'
}, '-=0.8');

const logo = document.querySelectorAll('#svg-name path');

setTimeout(function () {
    for(let i = 0; i < logo.length; i++) {
        logo[i].style.strokeWidth = 0;
     }
}, 4000);


const nav = document.querySelector("nav");
const navLogo = document.querySelector("#nav-logo");
const sectionOne = document.querySelector(".top");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        nav.classList.add("nav-scrolled");
        navLogo.innerHTML = 'Suhel';

    } else {
        nav.classList.remove("nav-scrolled");
        navLogo.innerHTML = 'Hello';
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

var card = document.getElementById('card');
var after = CSSRulePlugin.getRule(".card::after");
var before = CSSRulePlugin.getRule(".card::before");
var tl3 = gsap.timeline({defaults: {ease: "power2.inout"}});

tl3.to(before, {
    height: '100%'
});
tl3.to(after, {
    height: '100%'
}, "-=.2");
tl3.to(".card h2", {
    color: 'white'
}, '-=0.3');
tl3.to('.card p', {
    'clipPath': 'circle(160% at 100% 0)',
    'transform': 'translateX(0px)'
});
tl3.to(card, {
    boxShadow: '1px 1px 20px 1px #000'
});
tl3.pause();

card.addEventListener('click', () => {
    tl3.reversed(!tl3.reversed());
});
card.addEventListener('mouseenter', () => {
    tl3.play();
});

var card2 = document.getElementById('card2');
var after2 = CSSRulePlugin.getRule(".card2::after");
var before2 = CSSRulePlugin.getRule(".card2::before");
var tl4 = gsap.timeline({defaults: {ease: "power2.inout"}});

tl4.to(before2, {
    height: '100%'
});
tl4.to(after2, {
    height: '100%'
}, "-=.2");
tl4.to(".card2 h2", {
    color: 'white'
}, '-=0.3');
tl4.to('.card2 p', {
    'clipPath': 'circle(160% at 100% 0)',
    'transform': 'translateX(0px)'
});
tl4.to(card2, {
    boxShadow: '1px 1px 20px 1px #000'
});
tl4.pause();

card2.addEventListener('click', () => {
    tl4.reversed(!tl4.reversed());
});
card2.addEventListener('mouseenter', () => {
    tl4.play();
});


var card3 = document.getElementById('card3');
var after3 = CSSRulePlugin.getRule(".card3::after");
var before3 = CSSRulePlugin.getRule(".card3::before");
var tl5 = gsap.timeline({defaults: {ease: "power2.inout"}});

tl5.to(before3, {
    height: '100%'
});
tl5.to(after3, {
    height: '100%'
}, "-=.2");
tl5.to(".card3 h2", {
    color: 'white'
}, '-=0.3');
tl5.to('.card3 p', {
    'clipPath': 'circle(160% at 100% 0)',
    'transform': 'translateX(0px)'
});
tl5.to(card3, {
    boxShadow: '1px 1px 20px 1px #000'
});
tl5.pause();

card3.addEventListener('click', () => {
    tl5.reversed(!tl5.reversed());
});
card3.addEventListener('mouseenter', () => {
    tl5.play();
});


new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 5,
    draggable: true,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
    });

const plateNumbers = [400, 401, 402, 403, 404, 405];
const plate = document.querySelector('.after-mobile');
const car1 = document.querySelector('.after-car');
const car2 = document.querySelector('#car2');
const car3 = document.querySelector('#crane');
const car3HookLeft = document.querySelector('#crane #hook-1');
const car3HookRight = document.querySelector('#crane #hook-2');
const mobile1 = document.querySelector('#mobile');
const mobile2Left = document.querySelector('#mobile2 #mobile2-left');
const mobile2Right = document.querySelector('#mobile2 #mobile2-right');
const mobile3Left = document.querySelector('#mobile3 #mobile3-left');
const mobile3Right = document.querySelector('#mobile3 #mobile3-right');
const mobile3Circle = document.querySelector('#mobile3 .circle');


mobile1.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random()*6);
    car1.innerHTML =  plateNumbers[randomNumber];
    plate.innerHTML = plateNumbers[randomNumber];
});
let x = 0;
mobile2Left.addEventListener('click', () => {
    x = x - 30;
    gsap.to(car2, {
        transform: 'translateX(' + x + 'px)'
    });
});

mobile2Right.addEventListener('click', () => {
    x = x + 30;
    gsap.to(car2, {
        transform: 'translateX(' + x + 'px)'
    });
});
let y = 0;
mobile3Left.addEventListener('click', () => {
    y = y - 30; 
    gsap.to(car3, {
        transform: 'translateX(' + y + 'px)'
    });
});
mobile3Right.addEventListener('click', () => {
    y = y + 30; 
    gsap.to(car3, {
        transform: 'translateX(' + y + 'px)'
    });
});
let toggle = true;
mobile3Circle.addEventListener('click', () => {

    console.log(toggle);
    if (toggle === true){
        gsap.to(mobile3Circle, {
            background: 'red'
        });
        gsap.to(car3HookLeft, {
            transform: 'rotate(20deg)'
        });
        gsap.to(car3HookRight, {
            transform: 'rotate(-20deg)'
        });
    }if(toggle === false) {
        gsap.to(mobile3Circle, {
            background: '#200c61'
        });
        gsap.to(car3HookLeft, {
            transform: 'rotate(0deg)'
        });
        gsap.to(car3HookRight, {
            transform: 'rotate(0deg)'
        });
    }
    toggle = !toggle;
});

const circle1 = document.querySelector('#circle1');
const circle2 = document.querySelector('path#circle2');
const circle3 = document.querySelector('#circle3');
const studiesInfo1 = document.querySelector('.studies-first');
const studiesInfo2 = document.querySelector('.studies-second');
const studiesInfo3 = document.querySelector('.studies-third');
gsap.to(circle1, {
    y: '-20%'
});
gsap.to(studiesInfo2,{
    y: 30, duration: 0.2, ease: 'power2.easeInOut',  opacity: 0
})
gsap.to(studiesInfo3,{
    y: 30, duration: 0.2, ease: 'power2.easeInOut',  opacity: 0
})

circle1.addEventListener('click', () => {
    gsap.fromTo(studiesInfo1,{
        y: 30, duration: 1, ease: 'power2.easeInOut',  opacity: 0
    }, {
        opacity: 1 ,y: 0, ease: 'power2.easeInOut'
    });
    gsap.to(studiesInfo2,{
        y: 30, duration: 0.2, ease: 'power2.easeInOut',  opacity: 0
    })
    gsap.to(studiesInfo3,{
        y: 30, duration: 0.2, ease: 'power2.easeInOut',  opacity: 0
    })

    
    gsap.to(circle2, {
        y: '0', ease: 'power2.easeInOut', fill: '#200c61'
    });
    gsap.to(circle1, {
        y: '-20%', ease: 'power2.easeInOut', fill: '#220085'
    });
    gsap.to(circle3, {
        y: '0', ease: 'power2.easeInOut', fill: '#200c61'
    });
   
});
circle2.addEventListener('click', () => {  
    gsap.fromTo(studiesInfo2,{
        y: 30, duration: 1, ease: 'power2.easeInOut',  opacity: 0
    }, {
        opacity: 1 ,y: 0, ease: 'power2.easeInOut'
    });
    gsap.to(studiesInfo1,{
        y: 30, duration: 0.2, ease: 'power2.easeInOut',  opacity: 0
    })
    gsap.to(studiesInfo3,{
        y: 30, duration: 0.2, ease: 'power2.easeInOut',  opacity: 0
    })
    gsap.to(circle2, {
        y: '-20%', ease: 'power2.easeInOut', fill: '#220085'
    });
    gsap.to(circle1, {
        y: '0', ease: 'power2.easeInOut', fill: '#200c61'
    });
    gsap.to(circle3, {
        y: '0', ease: 'power2.easeInOut', fill: '#200c61'
    });   
});
circle3.addEventListener('click', () => {
    gsap.fromTo(studiesInfo3,{
        y: 30, duration: 1, ease: 'power2.easeInOut', opacity: 0
    },{
        opacity: 1, y: 0, ease: 'power2.easeInOut'
    });
    gsap.to(studiesInfo2,{
        y: 30, duration: 0.2, ease: 'power2.easeInOut',  opacity: 0
    })
    gsap.to(studiesInfo1,{
        y: 30, duration: 0.2, ease: 'power2.easeInOut',  opacity: 0
    })
    gsap.to(circle2, {
        y: '0', ease: 'power2.easeInOut', fill: '#200c61'
    });
    gsap.to(circle1, {
        y: '0', ease: 'power2.easeInOut', fill: '#200c61'
    });
    gsap.to(circle3, {
        y: '-20%', ease: 'power2.easeInOut', fill: '#220085'
    });
});

// setTimeout(function() {
//     gsap.from('.navigation', {
//         y: 0, opacity: 0, duration: 1, stagger: 0.25}, 
//         { opacity: 1, duration: 1
//     });
// }, 2000);


const about = document.querySelector('.about');
const optionss = { threshold: 0.25 };
const staggerObserver = new IntersectionObserver(function (entriess, staggerObserver) {
    entriess.forEach(entryy => {
        if(entryy.isIntersecting === true){
            staggerObserver.unobserve(entryy.target);
            gsap.fromTo('.stagger', { 
                y: 100, opacity: 0, stagger: 0.2
                }, { y:0, opacity: 1, stagger: 0.2  });
        }else{
            
        }
    });
}, optionss);
staggerObserver.observe(about);

const skills = document.querySelector('.skills');
const staggerObserverCard = new IntersectionObserver(function (entriess, staggerObserverCard) {
    entriess.forEach(entryy => {
        if(entryy.isIntersecting === true){
            staggerObserverCard.unobserve(entryy.target);
            gsap.fromTo('.staggerCard', { 
                y: 100, opacity: 0, stagger: 0.2
                }, { y:0, opacity: 1, stagger: 0.2  });
                console.log('1');
        }else{
            
        }
    });
}, optionss);
staggerObserverCard.observe(skills);

const project = document.querySelector('.projects');
const staggerObserverProjects = new IntersectionObserver(function (entriess, staggerObserverProjects) {
    entriess.forEach(entryy => {
        if(entryy.isIntersecting === true){
            staggerObserverProjects.unobserve(entryy.target);
            gsap.fromTo('.glider', { 
                y: 100, opacity: 0, stagger: 0.2
                }, { y:0, opacity: 1, stagger: 0.2  });
                console.log('1');
        }else{
            
        }
    });
}, optionss);
staggerObserverProjects.observe(project);

const studies = document.querySelector('.studies');
const staggerObserverStudies = new IntersectionObserver(function (entriess, staggerObserverStudies) {
    entriess.forEach(entryy => {
        if(entryy.isIntersecting === true){
            staggerObserverStudies.unobserve(entryy.target);
            gsap.fromTo('#svg-line', { 
                y: 100, opacity: 0, stagger: 0.2
                }, { y:0, opacity: 1, stagger: 0.2  });
            gsap.fromTo('.studies-first', 
                { y: 100, opacity: 0, stagger: 0.2}, 
                { y:0, opacity: 1, stagger: 0.2  });
        }else{
            
        }
    });
}, optionss);
staggerObserverStudies.observe(studies);

const contact = document.querySelector('.contact');
const staggerObserverContact = new IntersectionObserver(function (entriess, staggerObserverContact) {
    entriess.forEach(entryy => {
        if(entryy.isIntersecting === true){
            staggerObserverContact.unobserve(entryy.target);
            gsap.fromTo('.contact-links a', 
                { y: 100, opacity: 0, stagger: 0.1  }, 
                { y: 0, opacity: 1, stagger: 0.1 });
        }else{
            
        }
    });
}, optionss);
staggerObserverContact.observe(contact);