const colorName = {
    white: "#FFFFFF",
    black: "#000000",
    darkerGrey: "#7E839A",
    BGLightGrey: "#F5F5FA",
    grey: "#E4E6F0",
    lightBlue: "#D6E4FF",
    blue: "#0044CC",
    melrose: "#B3CCFF",
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
        },
        pagination: {
            content: colorName.darkerGrey,
            contentBold: colorName.black,
            contentButton: colorName.black,
            buttonDisabled: colorName.grey,
            button: colorName.lightBlue,
            arrow: colorName.blue,
            arrowDisabled: colorName.darkerGrey,
            hover: colorName.melrose,
            active: colorName.blue,
        }
    }
};