export default function info() {
    const infoEL = document.createElement('div');
    const infoContentEl = document.createElement('div');
    const infoContentParaEl = document.createElement('p');
    
    infoEL.id = 'info';
    infoContentEl.id = 'infobox';
    infoContentParaEl.id = 'infobox-para';
    infoContentParaEl.innerText = "Food for thought"
    infoEL.appendChild(infoContentEl);
    infoContentEl.appendChild(infoContentParaEl);
    


    return infoEL;
}