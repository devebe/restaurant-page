import Component from "./builder";
import { tabListData, footerListData, restaurantName } from "../data/data";

export const renderFooter = () => {
    const footer = new Component('footer','div');
    footer.build();

    const footerList = new Component('footerList', 'div');
    footerList.parent = document.getElementById('footer');
    footerList.build();

    footerListData.forEach((element) => {
        const footerListItem = new Component (`footerListItem ${element.id}`,'a');
        footerListItem.parent = document.getElementById('footerList');
        footerListItem.build();
        footerListItem.addText(element.text);
        const linkUrl = document.getElementById(`footerListItem ${element.id}`);
        linkUrl.setAttribute('href', element.href);
    });

    const copyright = new Component ('copyright', 'div');
    copyright.parent = document.getElementById('footer');
    copyright.build();
    copyright.addText('© 2023 ' + restaurantName +'. All rights reserved');
};