import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';
import path from 'path';

import { homepage, name } from '../package.json';

import { featuresZh } from './config/features';

const isProd = process.env.NODE_ENV === 'production';

const themeConfig: SiteThemeConfig = {
  name: '晓寒的无聊bb站',
  logo: 'https://f003.backblazeb2.com/file/pic-pan/1681579785696.jpg',

  hero: {
    'zh-CN': {
      description: '一个偶尔写写教程和bb的网站',
      actions: [
        {
          type: 'primary',
          text: 'start',
          link: '/web',
        },
        {
          text: 'bb',
          link: '/bb',
          openExternal: true,
        },
      ],
      features: featuresZh,
    },
    'en-US': {
      description: 'An occasional thanks tutorial and bb site',
      actions: [
        {
          type: 'primary',
          text: 'Start',
          link: '/web',
        },
        {
          text: 'bb',
          link: '/bb',
        },
      ],
    },
  },
  socialLinks: { github: 'https://github.com/Dreamkaka'},
  apiHeader: {
    pkg: name,
    sourceUrl: `{github}/tree/master/src/components/{atomId}/index.tsx`,
    docUrl: `{github}/tree/master/example/docs/components/{atomId}.{locale}.md`,
  },
  footer: '无论你身处哪个次元，提瓦特的星空总有你的位置|©2023 幻梦晓寒kaka',
};

export default defineConfig({
  themeConfig,

  favicons: [
    'https://f003.backblazeb2.com/file/pic-pan/1681579785696.jpg',
  ],
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' },
  ],
  alias: {
    'dumi-theme-antd-style': path.join(__dirname, '../src'),
  },
  mfsu: false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #0E1116; }
  }`,
  ],
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  // @ts-ignore
  ssr: isProd ? {} : false,
});
