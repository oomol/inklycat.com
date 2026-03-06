// @ts-check

const config = {
  title: 'Inklycat',
  tagline: 'AI Agent for Data Analysis',
  url: 'https://inklycat.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Inklycat',
      items: [
        { href: '/#capabilities', label: 'Capabilities', position: 'left' },
        { href: '/#workflow', label: 'Workflow', position: 'left' },
        { href: '/#scenarios', label: 'Scenarios', position: 'left' },
        { href: '/#faq', label: 'FAQ', position: 'left' },
        {
          href: 'mailto:hello@inklycat.com',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [{ label: 'Overview', to: '/' }],
        },
        {
          title: 'Company',
          items: [{ label: 'Contact', href: 'mailto:hello@inklycat.com' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Inklycat Labs.`,
    },
  },
};

module.exports = config;
