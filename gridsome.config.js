module.exports = {
    siteName: 'Gridsome starter resume',
    siteDescription:
        'A starter project for Gridsome with Bootstrap for you to quickly build a resume.',
    siteUrl: 'https://dsabalete.github.io',
    // pathPrefix: "/davidsabaleteLTK.github.io",
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
