module.exports = {
    stories: [
        "../src/stories/*.stories.mdx",
        "../src/stories/*.stories.@(js|jsx|ts|tsx)",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/**/*.stories.mdx",
    ],
    addons: [
        "@storybook/addon-links",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            },
        },
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        "@storybook/addon-viewport",
        "@storybook/addon-knobs",
    ],
};
