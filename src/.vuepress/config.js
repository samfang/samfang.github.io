module.exports = {
  dest: 'docs/dist',
  
  themeConfig: {
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: {
          '/guide/': guideSidebar,
        },
      },
    },
  },  
}

const guideSidebar = [
  {
    title: 'Guide',
    collapsable: false,
    children: [
      '',
      'getting-started',
    ],
  },
  {
    title: 'Resources',
    collapsable: false,
    children: ['create-dapp', 'contributors'],
  },
];
