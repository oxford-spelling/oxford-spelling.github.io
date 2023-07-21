import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
    lang: "en-GB-oxendict",
    title: "Oxford Spelling",
    description: "A homepage for Oxford spelling!",
    pagePatterns: [
        "**/*.md",
        "!**/README.md",
        "!.vuepress/",
        "!node_modules/",
    ],
    theme: defaultTheme({
        // Default theme config
        navbar: [
            {
                text: "Home",
                link: "/"
            }
        ]
    })
});