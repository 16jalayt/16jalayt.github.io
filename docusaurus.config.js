// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const githubUserLink = 'https://github.com/16jalayt/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sapphire Forge',
  tagline: 'Random tech documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://16jalayt.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '16jalayt', // Usually your GitHub org/user name.
  projectName: '16jalayt.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/16jalayt/16jalayt.github.io/tree/master/',
        },
        blog: {
          showReadingTime: false,
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx,md,mdx}',
            '**/__tests__/**',
          ],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/16jalayt/16jalayt.github.io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Sapphire Forge',
        logo: {
          alt: 'Sapphire Forge Logo',
          src: 'img/logo.svg',
        },
        items: [
          //{
          //  type: 'doc',
          //  docId: 'intro',
          //  position: 'left',
          //  label: 'Docs',
          //},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: githubUserLink,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
          //{
          //  title: 'Community',
          //  items: [
          //    {
          //      label: 'Stack Overflow',
          //      href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //    },
          //    {
          //      label: 'Discord',
          //      href: 'https://discordapp.com/invite/docusaurus',
          //    },
          //    {
          //      label: 'Twitter',
          //      href: 'https://twitter.com/docusaurus',
          //    },
          //  ],
          //},
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: githubUserLink,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sapphire Forge, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['batch', 'c', 'csharp', 'cpp', 'java'],
      },
      sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    }),
};

module.exports = config;
