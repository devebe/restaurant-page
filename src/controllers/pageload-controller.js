import { renderHeader } from "../view/components/header";
import { renderContent } from "./pagecontent-controller";
import { renderFooter } from "../view/components/footer";

export default function buildPage(tabEvent) {
    renderHeader();
    renderContent(tabEvent);
    renderFooter();
};