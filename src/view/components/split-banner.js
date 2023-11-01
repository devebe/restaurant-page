import Component from "./component-class";

export const renderSplitBanner = (position) => {
    const banner = new Component('splitBanner','div');
    banner.build();

    const left = new Component('left','div');
    left.parent = document.getElementById(banner.id);
    left.build();

    const right = new Component('right','div');
    right.parent = document.getElementById(banner.id);
    right.build();

    const textStack = new Component('textStack', 'div');
    const imgStack = new Component ('imgStack', 'div');

    if (position == 'left'){
        textStack.parent = document.getElementById(left.id);
        imgStack.parent = document.getElementById(right.id);
    }
    else {
        textStack.parent = document.getElementById(right.id);
        imgStack.parent = document.getElementById(left.id);
    };

    textStack.build();
    imgStack.build();

    const title = new Component('bannerTitle','h3');
    title.parent = document.getElementById(textStack.id);
    title.build();
    title.addText('Authentic flavors from farm to table');

    const subtitle = new Component('bannerSubTitle','h4');
    subtitle.parent = document.getElementById(textStack.id);
    subtitle.build();
    subtitle.addText('When local produce results in global flavors');

    const text = new Component('bannerText','p');
    text.parent = document.getElementById(textStack.id);
    text.build();
    text.addText('The best a man can get');

    const button = new Component('learnMoreBtn','button');
    button.parent = document.getElementById(textStack.id);
    button.build();
    button.addText('Learn more');
}