import Component from "./builder";
import { restaurantName } from "../data/common-data";
import { tabListData } from "../data/header-data";

export const renderHeader = () => {
    const header = new Component('header','div');
    header.build();

    const logo = new Component('logo','div');
    logo.parent = document.getElementById(header.id);
    logo.build();
    logo.addText(restaurantName);

    const tabList = new Component('tabList','ul');
    tabList.parent = document.getElementById(header.id);
    tabList.build();

    tabListData.forEach((element) => {
        let tabListItem = new Component(`tabListItem ${element.id}`, 'li');
        tabListItem.parent = document.getElementById(tabList.id);
        tabListItem.build();
        let tabListButton = new Component(`tabListBtn ${element.id}`, 'button');
        tabListButton.parent = document.getElementById(tabListItem.id);
        tabListButton.build();
        tabListButton.setClass('tabListButton');
        tabListButton.addText(element.text);
    });

    const reserveButton = new Component('reserveBtn','button');
    reserveButton.parent = document.getElementById(header.id);
    reserveButton.build();
    reserveButton.addText('Reserve a table');
};