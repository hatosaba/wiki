const sidebar = {
  guide: [
    {
      title: '初めての方へ',
      collapsable: false,
      children: [
        '/guide/introduction',
      ]
    }
  ],
  contributing: [
    {
      title: 'Contribute to the Docs',
      collapsable: false,
      children: [
        '/guide/contributing/doc-style-guide'
      ]
    }
  ],
  rule: [
    {
      title: 'ルール',
      collapsable: false,
      children: [
        '/rule/server-rule',
        '/rule/op-rule'
      ]
    }
  ]
}

module.exports = {
  title: 'はと鯖　公式ウィキサイト',
  description: 'はと鯖 - いろいろな遊び見つかる',
  lang: 'ja-jp',
  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
        rel: 'stylesheet'
      }
    ],
    // [
    //   'link',
    //   {
    //     href:
    //       'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    //     rel: 'stylesheet'
    //   }
    // ],
    [
      'link',
      {
        rel: 'icon',
        href: 'https://crafatar.com/renders/head/6b80409a32964d6e8614da041c5ec185'
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        //href: '/images/icons/apple-icon-152x152.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        //content: '/images/icons/ms-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      'script',
      {
        src: 'https://player.vimeo.com/api/player.js'
      }
    ],
    [
      'script',
      {
        src: 'https://extend.vimeocdn.com/ga/72160148.js',
        defer: 'defer'
      }
    ],
    [
      'script',
      {
        src: 'https://kit.fontawesome.com/a8ef6e6b86.js',
        crossorigin: 'anonymous'
      }
    ]
  ],
  themeConfig: {
    //logo: '/logo.png',
    nav: [
      {
        text: 'トップ',
        ariaLabel: 'Documentation Menu',
        items: [
          {
            text: 'ガイド',
            link: '/guide/introduction'
          },
          {
            text: 'ルール',
            link: '/style-guide/'
          },
          {
            text: 'コントリビュート',
            link: '/guide/contributing/doc-style-guide'
          }
        ]
      },
      {
        text: 'ルール',
        link: '/rule/'
      },
      {
        text: 'サーバー一覧',
        link: '/server/'
      },
      {
        text: 'リーダーボード',
        link: '/leaderboards/playerpoints'
      },
      {
        text: '運営チーム',
        link: '/community/team/'
      },
      {
        text: 'テスクチャ',
        link: '/community/textures/'
      },
      {
        text: 'はと鯖を支援する！',
        link: '/support-hatosaba/donations'
      }
    ],
    repo: 'hatosaba/wiki',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'GitHubで編集する!',
    lastUpdated: '最終更新日',
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/guide/contributing/': sidebar.contributing,
      '/rule/': sidebar.rule
    },
    smoothScroll: false,
    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },
    topBanner: false
  },
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/mojang/': {
        target: "https://sessionserver.mojang.com/session/minecraft/profile",
        changeOrigin: true,
        pathRewrite: {'^/mojang/': ''},
      },
      '/api/': {
        target: "https://aiu.hatosaba.f5.si",
        changeOrigin: true,
        pathRewrite: {'^/api/': ''},
      }
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-177902062-1'
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer(timestamp) {
          const date = new Date(timestamp)

          const digits = [
            date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(),
            date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
          ].map(num => String(num).padStart(2, '0'))

          return '{0}-{1}-{2}, {3}:{4}:{5} UTC'.replace(/{(\d)}/g, (_, num) => digits[num])
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '新しいコンテンツがあります。',
            buttonText: '更新する'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
