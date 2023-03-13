export default function homepage(){
    const homePageEl = document.createElement('div');
    const homepageContentEl = document.createElement('div');
    const homepageContentParaElOne = document.createElement('p')

    homePageEl.id = 'homepage';
    homepageContentEl.id = 'homepage-content';
    homepageContentParaElOne.id = 'para-one';
    homepageContentEl.appendChild(homepageContentParaElOne);
    homepageContentParaElOne.innerText = "Let your dreams become a reality";
    homePageEl.appendChild(homepageContentEl);
    
    return homePageEl;
}



