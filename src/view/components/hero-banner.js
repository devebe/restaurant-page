import Component from "./component-class";

export const renderHeroBanner = () => {
    const banner = new Component('banner','div');
    banner.build();

    const heroTitle = new Component('heroTitle','h1');
    heroTitle.parent = document.getElementById(banner.id);
    heroTitle.build();
    heroTitle.addText('Where Louisiana and The Netherlands meet');

    const heroSubTitle = new Component('heroSubTitle','h2');
    heroSubTitle.parent = document.getElementById(banner.id);
    heroSubTitle.build();
    heroSubTitle.addText('Authentic Cajun cooking mixed with Dutch Design');
}