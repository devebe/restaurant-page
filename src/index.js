import './style.css';
import buildPage from './controllers/pageload-controller';

buildPage();

document.addEventListener('click',(e) => {
    let content = document.getElementById('content');
    content.replaceChildren();
    buildPage(e.target.firstChild.textContent);
}); 