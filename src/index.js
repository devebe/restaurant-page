import './style.css';
import buildPage from './view/pageload';

buildPage();

let tabs = document.getElementById('tabList');
tabs.addEventListener('click',(e) => {
    console.log(e.target.firstChild.textContent);
});