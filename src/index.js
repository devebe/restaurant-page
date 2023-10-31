import './style.css';
import buildPage from './view/pageload';

buildPage();

let tabs = document.getElementById('tabList');
tabs.addEventListener('click',(e) => {
    let content = document.getElementById('content');
    content.replaceChildren();
    buildPage(e.target.firstChild.textContent)
});