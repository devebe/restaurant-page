import './style.css';
import buildPage from './controllers/pageload';

buildPage();

document.addEventListener('click',(e) => {
    let content = document.getElementById('content');
    content.replaceChildren();
    buildPage(e.target.firstChild.textContent);
});
    