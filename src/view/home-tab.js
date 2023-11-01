import { renderHeroBanner } from "./components/hero-banner";
import { renderSplitBanner } from "./components/split-banner";
import { homePageSplitBanner1, homePageSplitBanner2, heroBanner1 } from "../data/homepage-data";

export const renderHomePage = () => {
    renderHeroBanner(heroBanner1);
    renderSplitBanner('right',homePageSplitBanner1);
    renderSplitBanner('left',homePageSplitBanner2);
}
