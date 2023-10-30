import Component from "./builder";
import { footerListData, copyrightText } from "../data/data";

export const renderFooter = () => {
    const footer = new Component('footer','div');
    footer.build();

    const footerList = new Component('footerList', 'ul');
    footerList.parent = document.getElementById(footer.id);
    footerList.build();

    footerListData.forEach((element) => {
        const footerListItem = new Component (`footerListItem ${element.id}`,'li');
        footerListItem.parent = document.getElementById(footerList.id);
        footerListItem.build();
        const footerListLink = new Component ('footerListLink', 'a');
        footerListLink.parent = document.getElementById(footerListItem.id);
        footerListLink.build();
        footerListLink.addText(element.text);
        footerListLink.setUrl(element.href);
    });

    const copyright = new Component ('copyright', 'div');
    copyright.parent = document.getElementById(footer.id);
    copyright.build();
    copyright.addText(copyrightText);
};