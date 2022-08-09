//LISTING THE ELEMENTS THAT WOULD BE WORKED ON
const body = document.querySelector('body');
const menu = document.querySelector('header img:nth-child(2)');
const menu_close = document.querySelector('header img:nth-child(3)');
const menu_items = document.querySelector('header ul');
const mini_sections = document.querySelectorAll('main div#main section:nth-child(3) section.mini-section');
const details = document.querySelector('main div#main section:nth-child(2)');
let progressBar = document.querySelector('main div#main section:nth-child(2) div.progress-container div.progress-bar');
let bookmark = document.querySelector('main div#main div p:last-child');
let bookmarkText = document.querySelector('main div#main div p:last-child span');
const pledgeButtons = [document.querySelector('main div#main section:nth-child(1) div p:first-child'), ...document.querySelectorAll('main div#main section:nth-child(3) section.mini-section p:last-child')];
const closeModalButtons = [document.querySelector('aside > section:nth-child(1) p:last-child'), document.querySelector('aside > section:nth-child(2) div img:last-child')];
const pledgingPage = document.querySelector('aside > section:nth-child(2)');
const confirmedButtons = document.querySelectorAll('aside > section:nth-child(2) div p:last-child');
const confirmedPage = document.querySelector('aside > section:nth-child(1)');
const pledgeText = document.querySelectorAll('aside > section:nth-child(2) div p:first-child');
const inputs = document.querySelectorAll("aside > section:nth-child(2) input:first-child[name = 'pledge']");
//DYNAMICALLY CHANGING THE DATA AND VALUES BASED ON VIEWPORTS AND EVENT LISTENERS
progressBar.style.width = '50%';
menu.addEventListener('click', () => {
    menu_items.classList.toggle('show');
    menu_close.classList.toggle('show');
    menu.classList.toggle('hide');
    body.classList.toggle('overflow');
})
pledgeButtons.forEach(element => {
    element.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });
        pledgingPage.classList.add('show');
    })
})
closeModalButtons.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.parentElement.classList.remove('show');
    })
})
inputs.forEach(element => {
    element.addEventListener('click', () => {
        inputs.forEach(element => {
            element.parentElement.lastElementChild.classList.remove('show');
        })
        element.parentElement.lastElementChild.classList.add('show');
    })
})
confirmedButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.parentElement.parentElement.classList.remove('show');
        confirmedPage.classList.add('show');
    })
})
function changeText(){
    if(bookmarkText.textContent = 'Bookmark'){
        bookmarkText.textContent = 'Bookmarked';
    } else{
        console.log(bookmarkText.textContent);
    }
}
bookmark.addEventListener('click', changeText);
if(window.innerWidth > 649){
    menu_items.classList.add('display-flex');
    mini_sections.forEach(element => {
        element.classList.add('display-flex');
    })
    pledgeText.forEach(element => {
        element.classList.remove('align-center');
    })
}
if(window.innerWidth > 899){
    details.classList.add('display-flex');
}