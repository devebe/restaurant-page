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
    };
};