module.exports = {
  base: '/v/',
  title: 'Syd',
  description: 'Portofolio',
  head: [
    ['link', { rel: 'icon', href: 'https://vuepress.vuejs.org/logo.png' }]
  ],
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10,
    navbar: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Github', link: 'https://github.com/sydrmdnn' }
    ],
    sidebar: {
      '/blog/': [
        {
          title: 'Blog',
          collapsable: false,
          children: [
            'first-post',
            'how-to-hack',
            'what-is-dotfiles'
          ]
        }
      ]
    },
    sidebarDepth: 0,
    activeHeaderLinks: false,
    // lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: { 
         message: 'New content is available.', 
         buttonText: 'Refresh' 
      }
    }
  }
};
