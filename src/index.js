import './style.css';
import homepage from './homepage.js';
import info from './info.js';
import menu from './menu.js';

const contentEl = document.querySelector('#content')

const homepageEl = homepage();
const infoPageEl = info();
const menuPageEl = menu();


let currentPage = homepageEl;


function headerElement() {
    const headerEl = document.createElement('div');
    const logoEl = document.createElement('div');
    logoEl.innerText = "Dream.";
    headerEl.appendChild(logoEl);
    headerEl.appendChild(tabsElement());
    headerEl.id = "header";
    logoEl.id = 'logo';
    
    logoEl.addEventListener('click', (e) => {
        contentEl.removeChild(currentPage);
        contentEl.appendChild(homepageEl);
        currentPage = homepageEl;
        logo.innerText = "Dream.";
        infoEl.innerText = "Info";
        menuEl.innerText = "Menu";
    })
    
    return headerEl;
}

function tabsElement() {
    const tabsEl = document.createElement('div');
    const infoEl = document.createElement('div');
    const menuEl = document.createElement('div');

    infoEl.innerText = "Info";
    menuEl.innerText = "Menu";

    infoEl.addEventListener('click', () => {
        contentEl.removeChild(currentPage);
        contentEl.appendChild(infoPageEl);
        currentPage = infoPageEl;
        const logo = document.querySelector('#logo');
        logo.innerText = "Dream.";
        infoEl.innerText = "Info";
        menuEl.innerText = "Menu";
        
    })

    menuEl.addEventListener('click', () => {
        contentEl.removeChild(currentPage);
        contentEl.appendChild(menuPageEl);
        currentPage = menuPageEl;

        const logo = document.querySelector('#logo');
        infoEl.innerText = "♓︎■︎♐︎□︎"
        logo.innerText = "♎︎❒︎♏︎♋︎❍︎."
        menuEl.innerText = "❍︎♏︎■︎◆︎"
        
    })

    tabsEl.id = 'tabs';
    tabsEl.appendChild(infoEl);
    tabsEl.appendChild(menuEl);

    return tabsEl;

}



contentEl.appendChild(headerElement());
contentEl.appendChild(homepageEl);

