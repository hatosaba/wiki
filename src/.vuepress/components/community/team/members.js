import { shuffle } from 'lodash'

const members = [
  {
    name: 'hato810424',
    description: `ちゃ──ヾ(o'∀'o)ノ──ぉ!!`,
    languages: ['jp'],
    github: 'hato810424',
    twitter: 'hato810424',
    youtube: 'UCIqGVfoI2XKqF5hEFRkLRsQ',
    steam: 'hato810424',
    minecraft_uuid: '6b80409a32964d6e8614da041c5ec185',
    work: {
      role: 'サーバーインフラ',
      org: '鯖主(物理)'
    },
  },
  {
    name: 'OiEii',
    languages: ['jp', 'en'],
    github: 'Elic0de',
    minecraft_uuid: '9cd931f107f9490ca64e27b6e5644ae8',
    work: {
      role: ['<b>［上層部］</b>', 'プラグイン開発', 'サーバーインフラ'],
      org: '上級管理者'
    }
  },
  {
    name: 'kakiP1107',
    description: `自称27683級建築士の人（無能とか言うんじゃねぇぞ絶対だぞ）`,
    languages: ['jp','tai'],
    minecraft_uuid: '4d18bbdf19c34efe9524133e1c11dd09',
    twitter: '7gY0vPUE01MuYjb',
    work: {
      role: ['<b>［上層部］</b>'],
      org: '?'
    }
  },
  {
    name: 'frosch_y',
    description: `26%洗剤の人 自称アスレ勢`,
    languages: ['jp'],
    twitter: 'PF_frosch_y',
    minecraft_uuid: 'e98ec65ea77b40ceb46ba6e9e22f6fd6',
    work: {
      role: ['<b>［上層部］</b>'],
      org: '?'
    }
  },
  {
    name: 'CleanestQuill89',
    languages: ['jp'],
    twitter: 'CleanestQuill89',
    minecraft_uuid: '10df97fbae094e7490f4e7f26b998b12',
    work: {
      role: ['<b>［上層部］</b>'],
      org: '青鬼鯖-鯖主'
    }
  },
  {
      name: 'Supuuu',
      languages: ['jp'],
      twitter: 'Suppppppppppp4',
      minecraft_uuid: 'c2c5071f71574930918473d49e8417bb',
      work: {
        role: ['<b>［上層部］</b>'],
        org: 'FFA鯖-鯖主'
      }
    },
].concat(
  shuffle([
    {
      name: 'Tanisi30',
      languages: ['jp'],
      minecraft_uuid: 'ce9b3c107dd6421caa4e5c0c5eb98bb5',
      work: {
        role: '?'
      }
    },
    {
      name: 'SHU84',
      languages: ['jp'],
      minecraft_uuid: 'b0f09277201846aeb63c039d6e9be2be',
      work: {
        role: '?'
      }
    },
    {
      name: 'yohane',
      description: 'ヨハネです。困ったことがありましたら気軽にお声がけください！',
      twitter: 'yhne_Yohane',
      languages: ['jp'],
      minecraft_uuid: '878178de06834b22b50d06088f13efc2',
      work: {
        role: '?'
      }
    },
    {
      name: 'doudai',
      description: `なんか運営にされた人暇なときに監視してる悪事をするとお仕置きよ`,
      languages: ['jp'],
      twitter: 'doudai9',
      minecraft_uuid: 'abf88b94efaf4ae093593577be486dc4',
      work: {
        role: '?'
      }
    },
    {
      name: 'more5804',
      languages: ['jp'],
      minecraft_uuid: '65d9cc294ea44acb8278b477227cb8e9',
      work: {
        role: '?'
      }
    },
    {
      name: 'reitan234',
      languages: ['jp'],
      twitter: 'lemon_tantan_',
      minecraft_uuid: 'cb446eb6b06f4cc4a2b66a3aa815ff83',
      work: {
        role: '?',
      }
    },
    {
      name: 'rainbowfishzzz',
      languages: ['jp'],
      minecraft_uuid: '8439a93c40c048b5be1d7d4b3dd42f38',
      work: {
        role: '?',
      }
    },
    {
      name: 'Yeahn',
      languages: ['jp'],
      twitter: 'yeahnmc',
      minecraft_uuid: '2d048f12e93340e89dd8a7e9f95007aa',
      work: {
        role: '?',
      }
    },
    {
      name: 'Rui00831',
      languages: ['jp'],
      twitter: 'Rui00831',
      minecraft_uuid: '14965c9af1cf479685279ed30cb19722',
      work: {
        role: '?',
      }
    },
    {
      name: 'ships3ATT',
      languages: ['jp'],
      twitter: 'freedom96718575',
      minecraft_uuid: '39811cfb0fae457995f54f42ffba5363',
      work: {
        role: '?',
      }
    },
    {
      name: 'Sou2014',
      languages: ['jp'],
      twitter: 'minecrafter_so',
      minecraft_uuid: 'ac840433bf8e4c49b473adc8eba84e11',
      work: {
        role: '?',
      }
    },
    {
      name: 'sa10sa10',
      languages: ['jp'],
      twitter: 'Sa10Games',
      minecraft_uuid: '8f374021fc3e41e78e0b0af93548d7e9',
      work: {
        role: '?',
      }
    },
    {
      name: 'MUUTA2334',
      languages: ['jp'],
      twitter: 'muutaKOZUKI2334',
      minecraft_uuid: 'e883c9148f2544769bccae2cb51da054',
      work: {
        role: '?',
      }
    }
  ])
)

export default members
