import { renderHeader } from "./header";
import { renderFooter } from "./footer";
import { tabListData } from "../data/header";

export default function buildPage(tabEvent) {
    renderHeader();
    renderContent(tabEvent);
    renderFooter();
}

const renderContent = (tabEvent) => {
    if (!tabEvent) {
        console.log('No tabevent specified: Homepage is created');
    };
    if (tabEvent == tabListData[0].text) {
        console.log('One tabevent specified: Menu page is created');
        setBtnToActive(`tabListBtn ${tabListData[0].id}`);
    };
    if (tabEvent == tabListData[1].text) {
        console.log('One tabevent specified: Events page is created');
        setBtnToActive(`tabListBtn ${tabListData[1].id}`);
    };
};

const setBtnToActive = (id) => {
    let target = document.getElementById(id);
    target.classList.add('active');
}