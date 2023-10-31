import { renderHeader } from "../view/header";
import { renderContent } from "./pagecontent";
import { renderFooter } from "../view/footer";

export default function buildPage(tabEvent) {
    renderHeader();
    renderContent(tabEvent);
    renderFooter();
};