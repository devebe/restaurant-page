import { renderHeader } from "../view/header";
import { renderContent } from "./pagecontent"
import { renderFooter } from "../view/footer";
import { restaurantName } from "../data/common";
import { tabListData } from "../data/header";

export default function buildPage(tabEvent) {
    renderHeader();
    renderContent(tabEvent);
    renderFooter();
};