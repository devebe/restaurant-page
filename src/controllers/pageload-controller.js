import { renderHeader } from "../view/components/header";
import { renderContent } from "./pagecontent-controller";
import { renderFooter } from "../view/components/footer";

export function buildPage(pageName) {
    renderHeader();
    renderContent(pageName);
    renderFooter();
};

export function resetPage() {
    let content = document.getElementById('content');
    content.replaceChildren();
}