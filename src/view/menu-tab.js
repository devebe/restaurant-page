import { renderHeroBanner } from "./components/hero-banner";
import { renderSplitBanner } from "./components/split-banner";
import { menuPageHeroBanner1 } from "../data/menupage-data";

export const renderMenuPage = () => {
    renderHeroBanner(menuPageHeroBanner1);
}