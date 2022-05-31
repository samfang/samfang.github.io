module.exports = {
  dest: 'docs/dist',
  
  themeConfig: {
    repo: 'MetaMask/metamask-docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    logo: '/metamask-fox.svg',
    smoothScroll: true,
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
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
      'common-terms',
      'initializing-dapps',
      'accessing-accounts',
      'sending-transactions',
    ],
  },
  {
    title: 'API Reference',
    collapsable: false,
    children: [
      'ethereum-provider',
      'provider-migration',
      'rpc-api',
      'signing-data',
    ],
  },
  {
    title: 'Best Practices',
    collapsable: false,
    children: [
      'registering-function-names',
      'registering-your-token',
      'defining-your-icon',
      'onboarding-library',
      'metamask-extension-provider',
    ],
  },
  {
    title: 'Mobile',
    collapsable: false,
    children: [
      'mobile-getting-started',
      'site-compatibility-checklist',
      'mobile-best-practices',
    ],
  },
  {
    title: 'Snaps',
    collapsable: false,
    children: [
      'snaps',
      'snaps-development-guide',
      'snaps-rpc-api',
      'snaps-patching-dependencies',
    ],
  },
  {
    title: 'Resources',
    collapsable: false,
    children: ['create-dapp', 'contributors'],
  },
];
