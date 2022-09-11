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
                DEFAULT: "1rem",
                md: "2.25rem",
                xl: "4.5rem",
            },
            center: true,
        },
        fontFamily: {
            squareOne: "'Squada One', 'cursive'",
        },
    },
    plugins: [
        // require("@tailwindcss/forms"),
        // require("@tailwindcss/typography"),
    ],
};
