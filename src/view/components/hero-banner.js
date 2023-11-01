import Component from "./component-class";

export const renderHeroBanner = (obj) => {
    const banner = new Component('heroBanner','div');
    banner.build();

    const bannerTitle = new Component('heroBannerTextStack', 'div');
    bannerTitle.parent = document.getElementById(banner.id);
    bannerTitle.build();

    const heroTitle = new Component('heroTitle','h1');
    heroTitle.parent = document.getElementById(bannerTitle.id);
    heroTitle.build();
    heroTitle.addText(obj.title);

    const heroSubTitle = new Component('heroSubTitle','h2');
    heroSubTitle.parent = document.getElementById(bannerTitle.id);
    heroSubTitle.build();
    heroSubTitle.addText(obj.subtitle);

    const reserveButton = new Component('reserveBtn','button');
    reserveButton.parent = document.getElementById(bannerTitle.id);
    reserveButton.build();
    reserveButton.addText(obj.buttonText);
}