import { renderHeroBanner } from "./components/hero-banner";
import { renderSplitBanner } from "./components/split-banner";
import { homePageSplitBannerData } from "../../data/homepage-split-banner-data";

export const renderHomePage = () => {
    renderHeroBanner();
    renderSplitBanner('right',homePageSplitBannerData);
}
