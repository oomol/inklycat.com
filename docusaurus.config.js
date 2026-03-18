// @ts-check

const config = {
  title: 'Inkly Cat',
  tagline: 'Turn scientific data into publishable results.',
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
    metadata: [
      {
        name: 'description',
        content:
          'Inkly Cat is a results-oriented workspace for scientific and high-rigor analysis, connecting data processing, scripts, charts, and structured deliverables.',
      },
      {
        name: 'keywords',
        content:
          'Inkly Cat, scientific analysis agent, research workflow, publishable charts, statistical analysis, chart editor, data processing, OOMOL',
      },
    ],
    headTags: [
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Inkly Cat',
          tagline: 'Turn scientific data into publishable results.',
          url: 'https://inklycat.com',
        }),
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Inkly Cat',
      logo: {
        alt: 'Inkly Cat Logo',
        src: 'img/inklycat-logo.svg',
      },
      items: [
        {
          label: '工作台',
          position: 'left',
          to: '/#showcase',
          'data-noBrokenLinkCheck': true,
        },
        {
          label: '模板',
          position: 'left',
          to: '/#templates',
          'data-noBrokenLinkCheck': true,
        },
        {
          label: '复用',
          position: 'left',
          to: '/#reusable',
          'data-noBrokenLinkCheck': true,
        },
        {
          label: '开始使用',
          position: 'right',
          to: '/#contact',
          'data-noBrokenLinkCheck': true,
          className: 'navbar__cta',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '产品',
          items: [
            {
              label: '工作界面',
              to: '/#showcase',
              'data-noBrokenLinkCheck': true,
            },
            {
              label: '工作流',
              to: '/#workflow',
              'data-noBrokenLinkCheck': true,
            },
            {
              label: '复用方法',
              to: '/#reusable',
              'data-noBrokenLinkCheck': true,
            },
          ],
        },
        {
          title: '科研分析',
          items: [
            {
              label: '研究场景',
              to: '/#use-cases',
              'data-noBrokenLinkCheck': true,
            },
            {
              label: '图表编辑',
              to: '/#showcase',
              'data-noBrokenLinkCheck': true,
            },
            {
              label: '结构化工作流',
              to: '/#workflow',
              'data-noBrokenLinkCheck': true,
            },
          ],
        },
        {
          title: '获取方式',
          items: [
            {
              label: '打开 Web 版',
              href: 'https://app.oomol.com/',
            },
            {
              label: 'iOS App Store',
              href: 'https://apps.apple.com/cn/app/%E5%B0%8F%E5%A2%A8-oomol-ai/id6749377154',
            },
            {
              label: '联系邮箱',
              href: 'mailto:hello@inklycat.com',
            },
            {
              label: '回到顶部',
              to: '/#top',
              'data-noBrokenLinkCheck': true,
            },
            {
              label: '下载入口',
              to: '/#contact',
              'data-noBrokenLinkCheck': true,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Inkly Cat.`,
    },
  },
};

module.exports = config;
