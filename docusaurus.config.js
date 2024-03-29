// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
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
        /*docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/16jalayt/16jalayt.github.io/tree/master/',
        },*/
        docs: false, // Optional: disable the docs plugin
        blog: {
          //TODO:/tags goes to tag list. /archive
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: false,
          blogSidebarCount: 'ALL',
          postsPerPage: 5,
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
          //{ to: '/blog', label: 'Blog', position: 'left' },
          { to: '/archive', label: 'Blog Posts', position: 'left' },
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
          /*{
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },*/
          {
            title: 'Blog',
            items: [
              {
                label: 'Archive',
                to: '/archive',
              },
              {
                label: 'Tags',
                to: '/tags',
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
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              /*{
                html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify" id="test">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                </a>
                    <script>
                    const element = document.getElementById("test");
                    element.href = "www.google.com"
                    </script>
                  `,
              },*/
              {
                label: 'Contact me at: sapphireforge238@gmail.com',
                href: 'mailto:sapphireforge238@gmail.com',
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
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['batch', 'c', 'csharp', 'cpp', 'java', 'bash', 'diff', 'json'],
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
