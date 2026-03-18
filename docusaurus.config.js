// @ts-check

const config = {
  title: 'Inkly Cat',
  tagline: 'A focused workspace for data analysis work.',
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
          'Inkly Cat is a focused workspace for data analysis work, connecting table processing, scripts, chart editing, and structured results.',
      },
      {
        name: 'keywords',
        content:
          'Inkly Cat, data analysis agent, data analysis workspace, chart editor, table processing, scripts, workflow, OOMOL',
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
          tagline: 'A focused workspace for data analysis work.',
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
          label: '工作界面',
          position: 'left',
          to: '/#showcase',
          'data-noBrokenLinkCheck': true,
        },
        {
          label: '工作流',
          position: 'left',
          to: '/#workflow',
          'data-noBrokenLinkCheck': true,
        },
        {
          label: '适用场景',
          position: 'left',
          to: '/#use-cases',
          'data-noBrokenLinkCheck': true,
        },
        {
          label: '复用方法',
          position: 'left',
          to: '/#reusable',
          'data-noBrokenLinkCheck': true,
        },
        {
          label: '打开产品',
          position: 'right',
          to: '/#contact',
          'data-noBrokenLinkCheck': true,
        },
        {
          label: 'Web 版',
          position: 'right',
          href: 'https://app.oomol.com/',
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
          title: '数据分析',
          items: [
            {
              label: '适用场景',
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
