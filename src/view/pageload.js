import { renderHeader } from "./header";
import { renderFooter } from "./footer";
import { restaurantName } from "../data/common";
import { tabListData } from "../data/header";

export default function buildPage(tabEvent) {
    renderHeader();
    renderContent(tabEvent);
    renderFooter();
}

const renderContent = (tabEvent) => {
    if (!tabEvent || tabEvent == restaurantName) {
        console.log('One tabevent specified: Homepage is created');
        // renderHomePage()
    };
    if (tabEvent == tabListData[0].text) {
        console.log('One tabevent specified: Menu page is created');
        setBtnToActive(`tabListBtn ${tabListData[0].id}`);
        // renderMenuPage()
    };
    if (tabEvent == tabListData[1].text) {
        console.log('One tabevent specified: Events page is created');
        setBtnToActive(`tabListBtn ${tabListData[1].id}`);
        // renderEventsPage()
    };
    if (tabEvent == tabListData[2].text) {
        console.log('One tabevent specified: Contact page is created');
        setBtnToActive(`tabListBtn ${tabListData[2].id}`);
        // renderContactPage()
    };
};

const setBtnToActive = (id) => {
    let target = document.getElementById(id);
    target.classList.add('active');
};