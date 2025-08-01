const colorName = {
    white: "#FFFFFF",
    black: "#000000",
    darkerGrey: "#7E839A",
    BGLightGrey: "#F5F5FA",
    grey: "#E4E6F0",
    lightBlue: "#D6E4FF",
    blue: "#0044CC",
    blueRibbon: "#004de6",
    melrose: "#B3CCFF",
    stormGray: "#74788B",
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
            role: colorName.darkerGrey,
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
        },
        error: {
            content: colorName.black,
            linkBackground: colorName.blue,
            linkContent: colorName.white,
            linkBackgroundHover: colorName.blueRibbon,
            activeLink: colorName.melrose,
        },
        tileDetails: {
            content: colorName.black,
            info: colorName.stormGray,
            infoValue: colorName.black,
            background: colorName.white,
        },
        genres: {
            content: colorName.black,
            background: colorName.grey,
        },
        vote: {
            content: colorName.black,
            subContent: colorName.darkerGrey,
            contentInBackdrop: colorName.white,
        },
        tileMovie: {
            content: colorName.black,
            subContent: colorName.darkerGrey,
            background: colorName.white,
        },
        backdrop: {
            content: colorName.white,
            background: colorName.black,
        }
    }
};