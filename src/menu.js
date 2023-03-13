export default function menu() {
    const menuDiv = document.createElement('div');
    const menuContentEl = document.createElement('div');
    const menuContentParaEl = document.createElement('p');

    menuDiv.appendChild(menuContentEl);
    menuContentEl.appendChild(menuContentParaEl);
    menuDiv.id = 'menu';
    menuContentEl.id = 'menu-content';
    menuContentParaEl.id = 'menu-content-p';

    menuContentParaEl.innerText = '♌︎♓︎♑︎ ♎︎❒︎♏︎♋︎❍︎';
    

    return menuDiv;
}