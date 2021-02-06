const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const navList = document.querySelector('.nav-list');
let toggle = true;
console.log('running');

menu.addEventListener('click', () => {

    if(toggle){
        navList.style.transform = 'translateY(0px)'
        navigation.classList.remove('close');
        navigation.classList.add('open');
        console.log('open');
    }else{
        navList.style.transform = 'translateY(-500px)'
        navigation.classList.remove('open');
        navigation.classList.add('close');
        console.log('close');
    }
    toggle = !toggle;
});