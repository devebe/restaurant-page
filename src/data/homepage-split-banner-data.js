class TextStack {
    constructor (title, subtitle, text) {
        this.title = title;
        this.subtitle = subtitle;
        this.text = text;
        this.buttonText;
    }
};


export const homePageSplitBannerData = new TextStack();
homePageSplitBannerData.title = 'From farm to table';
homePageSplitBannerData.subtitle = 'Cajun sweetness';
homePageSplitBannerData.text = 'Lorem ipsum';
homePageSplitBannerData.buttonText = 'Learn more';