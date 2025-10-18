import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'tkzwhr\'s Homepage',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.cccx.jp',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/~tkzwhr/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tkzwhr', // Usually your GitHub org/user name.
  projectName: 'www-cccx-jp', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    ['classic',
      {
        docs: {
          path: 'igo',
          routeBasePath: 'igo',
          sidebarPath: './sidebarsIgo.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mahjong',
        path: 'mahjong',
        routeBasePath: 'mahjong',
        sidebarPath: './sidebarsMahjong.ts',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'tkzwhr\'s Homepage',
      logo: {
        alt: 'My Site Logo',
        src: 'https://avatars.githubusercontent.com/u/35017111?v=4',
      },
      items: [
        {
          to: '/igo',
          label: '囲碁',
          position: 'left',
        },
        {
          to: '/mahjong',
          label: '麻雀',
          position: 'left',
        },
        {to: '/blog', label: 'ブログ', position: 'left'},
        {
          href: 'https://zenn.dev/tkzwhr',
          label: 'zenn',
          position: 'left',
          external: true
        },
        {
          href: 'https://github.com/tkzwhr',
          label: 'GitHub',
          position: 'left',
          external: true
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} tkzwhr. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
