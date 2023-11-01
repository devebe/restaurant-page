import Component from "./component-class";

export const renderHeroBanner = () => {
    const banner = new Component('banner','div');
    banner.build();

    const bannerTitle = new Component('bannerTitle', 'div');
    bannerTitle.parent = document.getElementById(banner.id);
    bannerTitle.build();

    const heroTitle = new Component('heroTitle','h1');
    heroTitle.parent = document.getElementById(bannerTitle.id);
    heroTitle.build();
    heroTitle.addText('Where Louisiana and Deepak meet');

    const heroSubTitle = new Component('heroSubTitle','h2');
    heroSubTitle.parent = document.getElementById(bannerTitle.id);
    heroSubTitle.build();
    heroSubTitle.addText('Cajun cooking mixed with Surinamese passion');
}