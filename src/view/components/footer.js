import Component from "./component-class";
import { footerListData, copyrightText } from "../../data/footer-data";

export const renderFooter = () => {
    const footer = new Component('footer','div');
    footer.build();

    const footerList = new Component('footerList', 'ul');
    footerList.parent = document.getElementById(footer.id);
    footerList.build();

    footerListData.forEach((element) => {
        const footerListItem = new Component (`footerListLink ${element.id}`,'li');
        footerListItem.parent = document.getElementById(footerList.id);
        footerListItem.build();

        const footerListLink = new Component (`footerListLink ${element.id}`, 'a');
        footerListLink.parent = document.getElementById(footerListItem.id);
        footerListLink.build();
        footerListLink.setClass('footerListLink');
        footerListLink.setUrl(element.href);
        footerListLink.addText(element.text);
    });

    const copyright = new Component ('copyright', 'div');
    copyright.parent = document.getElementById(footer.id);
    copyright.build();
    copyright.addText(copyrightText);
};