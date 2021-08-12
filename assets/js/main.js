const toggleNav = document.querySelector('.toggle-nav');
const nav = document.querySelector('.navigation');
const darkedbackground = document.querySelector('#black-background');
const input = document.querySelector('.search-nav');
const ulTransition = document.querySelector('#transition-nav');
const textBox = document.querySelector('#text-box');



window.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('toggle-nav')){
        ulTransition.classList.add('transition-ul')
        setTimeout(() => { 
            nav.classList.add('search-nav')
            darkedbackground.classList.add('search-curtain');
            setTimeout(() => { input.focus(); }, 1500);
            document.body.classList.add('top-fixed')
            textBox.classList.add('text-box')
            }, 500);
        

    } else if(!el.classList.contains('toggle') && !el.classList.contains('search-nav')){
        nav.classList.remove('search-nav')
        darkedbackground.classList.remove('search-curtain')
        document.body.classList.remove('top-fixed')
        textBox.classList.remove('text-box')
        input.value = '';
        setTimeout(() => {
            ulTransition.classList.remove('transition-ul')
        }, 50)
    }  
})

/* FOOTER MOBILE */

const toggle = document.querySelectorAll('.toggle')

for(const element of toggle){
    element.addEventListener('click', function() {
        const p = element.querySelector('.toggle-footer')
        if(element.classList.contains('toggle-ul-footer')){
            element.classList.remove('toggle-ul-footer')
            element.classList.remove('animation')
            p.innerHTML = '+';
        } else {
            element.classList.add('toggle-ul-footer')
            setTimeout(()=> {
                element.classList.add('animation')
            }, 100)
            p.innerHTML = 'x';
        }
    })
}

const iconNavicon = document.querySelector('.show-nav');
const icon = document.querySelector('.show-nav i');
iconNavicon.addEventListener('click', () => {
    if(nav.classList.contains('show')){
        nav.classList.add('show-fixed-back')
        setTimeout(() => {
            nav.classList.remove('show')
            nav.classList.remove('show-fixed')
            icon.classList.remove('icon-clear')
            icon.classList.add('icon-navicon')
            nav.classList.remove('show-fixed-back')
        }, 800);
    } else {
        nav.classList.add('show');
        setTimeout(() => {
            nav.classList.add('show-fixed')
        }, 800)
        icon.classList.remove('icon-navicon')
        icon.classList.add('icon-clear')
    }
    
})
