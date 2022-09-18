module.exports = {
    content: ["./app/**/*.{html,ejs}"],
    theme: {
        extend: {
            colors: {
                primary: "#E6553B",
                gray: {
                    light: "#F0F0F0",
                    dark: "#808080",
                },
                success: "#53C139",
            },
        },
        container: {
            padding: {
                DEFAULT: ".75rem",
                xl: "4.5rem",
            },
            center: true,
        },
        fontFamily: {
            squareOne: "'Squada One', 'cursive'",
        },
        fontSize: {
            sm: ["14px", "20px"],
            tiny: ["16px", "17px"],
            base: ["16px", "24px"],
            md: ["18px", "19px"],
            lg: ["18px", "26px"],
            xl: ["20px", "29px"],
            "2xl": ["24px", "35px"],
            "3xl": ["32px", "34px"],
            "4xl": ["32px", "46px"],
            "5xl": ["48px", "50px"],
            "6xl": ["48px", "70px"],
            "7xl": ["80px", "85px"],
        },
    },
    plugins: [
        // require("@tailwindcss/forms"),
        // require("@tailwindcss/typography"),
    ],
};
