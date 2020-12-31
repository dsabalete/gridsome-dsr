module.exports = {
    siteName: "👋 That's me!",
    siteDescription:
        'Senior Front End Developer, Vue/Nuxt lover, exercise hobbyist, netflix junkie',
    siteUrl: 'https://www.davidsabalete.com',
    plugins: [
        {
            // @see: https://gridsome.org/plugins/@gridsome/plugin-google-analytics
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: 'UA-1969234-5'
            }
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                cacheTime: 600000
            }
        }
    ],
    css: {
        loaderOptions: {
            scss: {}
        }
    }
}
