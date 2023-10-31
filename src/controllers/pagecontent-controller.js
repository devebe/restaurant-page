import { tabListData } from "../data/header-data";
import { restaurantName } from "../data/common-data";
import { renderHomePage } from "../view/home-tab";

export const renderContent = (pageName) => {
    if (!pageName) {
        console.log('One tabevent specified: Homepage is created');
        renderHomePage();
    }
    else if (pageName == tabListData[0].text) {
        console.log('One tabevent specified: Menu page is created');
        setBtnToActive(`tabListBtn ${tabListData[0].id}`);
        // renderMenuPage()
    }
    else if (pageName == tabListData[1].text) {
        console.log('One tabevent specified: Events page is created');
        setBtnToActive(`tabListBtn ${tabListData[1].id}`);
        // renderEventsPage()
    }
    else if (pageName == tabListData[2].text) {
        console.log('One tabevent specified: Contact page is created');
        setBtnToActive(`tabListBtn ${tabListData[2].id}`);
        // renderContactPage()
    }
    else {
        console.log('something weird happens');
    };
};

const setBtnToActive = (id) => {
    let target = document.getElementById(id);
    target.classList.add('active');
};