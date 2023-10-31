import './style.css';
import { buildPage, resetPage } from './controllers/pageload-controller';
import { restaurantName } from './data/common-data';
import { tabListData } from './data/header-data';

buildPage();

document.addEventListener('click', (e) => {
    let list = [];
    tabListData.forEach((element) => {
        list.push(element.text);
    });

    if (e.target.firstChild.textContent == restaurantName) {
        resetPage();
        buildPage(restaurantName);
    }
    if (list.includes(e.target.firstChild.textContent)) {
        resetPage();
        buildPage(e.target.firstChild.textContent);
    }
});