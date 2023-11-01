import { renderHeroBanner } from "./components/hero-banner";
import { renderSplitBanner } from "./components/split-banner";

export const renderHomePage = () => {
    renderHeroBanner();
    renderSplitBanner(right);
}
