module.exports = {
    siteName: "👋 That's me!",
    siteDescription:
        'Senior Front End Developer, Vue/Nuxt lover, exercise hobbyist, netflix junkie',
    siteUrl: 'https://dsabalete.github.io',
    plugins: [
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: 'UA-1969234-7'
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
