const colorName = {
    white: "#FFFFFF",
    black: "#000000",
    darkerGrey: "#7E839A",
    BGLightGrey: "#F5F5FA",
    grey: "#E4E6F0",
    lightBlue: "#D6E4FF",
    blue: "#0044CC",
};

const common = {
    breakpoint: {
        smallMax: 640,
        mobileMax: 767,
        largeMax: 1024,
    },
};

export const themeLight = {
    ...common,
    colors: {
        bodyBackground: colorName.BGLightGrey,
        header: {
            content: colorName.white,
            background: colorName.black,
        },
        logo: {
            content: colorName.white,
        },
        navigation: {
            content: colorName.white,
            border: colorName.white,
        },
        search: {
            content: colorName.darkerGrey,
            background: colorName.white,
        },
        title: {
            content: colorName.black,
        },
        peopleList: {
            content: colorName.black,
            background: colorName.white,
        }
    }
};