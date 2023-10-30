import Component from "./builder";
import { tabListData, restaurantName } from "../data/data";

export const renderHeader = () => {
    const header = new Component('header','div');
    header.build();

    const logo = new Component('logo','div');
    logo.parent = document.getElementById('header');
    logo.build();
    logo.addText(restaurantName);

    const tabList = new Component('tabList','ul');
    tabList.parent = document.getElementById('header');
    tabList.build();

    tabListData.forEach((element) => {
        let tabListItem = new Component('tabListItem', 'li');
        tabListItem.parent = document.getElementById('tabList');
        tabListItem.build();
        tabListItem.addText(element);
    });

    const reserveButton = new Component('reserveBtn','button');
    reserveButton.parent = document.getElementById('header');
    reserveButton.build();
    reserveButton.addText('Reserve a table');
};