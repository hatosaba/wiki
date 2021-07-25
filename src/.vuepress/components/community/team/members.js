import { shuffle } from 'lodash'

const members = [
  {
    name: 'hato810424',
    description: `鯖主でーす、気軽に声かけてね`,
    languages: ['jp'],
    github: 'hato810424',
    twitter: 'hato810424',
    youtube: 'UCIqGVfoI2XKqF5hEFRkLRsQ',
    steam: 'hato810424',
    minecraft_uuid: '6b80409a32964d6e8614da041c5ec185',
    work: {
      role: '鯖主',
      org: 'サーバーインフラ'
    }
  }
].concat(
  shuffle([
    {
      name: 'EndoRe07',
      languages: ['jp', 'en'],
      github: 'Elic0de',
      minecraft_uuid: '9cd931f107f9490ca64e27b6e5644ae8',
      work: {
        role: '開発者',
        org: ['プラグイン','サーバーインフラ']
      }
    },
    {
      name: 'karaagemorimori',
      description: `揚げ物大好きwikiを作れる`,
      languages: ['jp'],
      minecraft_uuid: '83fd8656d10744ebb79a0a8e5d58abd5',
      github: 'karaagemorimori',
      twitter: 'karamori_Micra',
      youtube: 'UC8ILPa6jylLWEXHmnhDAssw',
      steam: '76561198879854511',
      work: {
        role: ['接客', '広報', '建築', 'wiki部'],
        org: '?'
      }
    },
    {
      name: 'Tanisi30',
      languages: ['jp'],
      minecraft_uuid: 'ce9b3c107dd6421caa4e5c0c5eb98bb5',
      work: {
        role: 'コマンド'
      }
    },
    {
      name: 'SHU84',
      languages: ['jp'],
      minecraft_uuid: 'b0f09277201846aeb63c039d6e9be2be',
      work: {
        role: ['接客', '対応'],
        org: '?'
      }
    },
    {
      name: 'frosch_y',
      description: `26%洗剤の人　イベントとかやっている自称アスレ勢`,
      languages: ['jp'],
      youtube: 'UC8pCIVFqNezdRAtitGBLUbg',
      minecraft_uuid: 'e98ec65ea77b40ceb46ba6e9e22f6fd6',
      work: {
        role: ['コマンド', '建築'],
        org: 'イベント'
      }
    },
    {
      name: 'kakiP1107',
      description: `自称プロ建築地の人（無能とか言わんといてね）`,
      languages: ['jp'],
      minecraft_uuid: '4d18bbdf19c34efe9524133e1c11dd09',
      twitter: '7gY0vPUE01MuYjb',
      instagram: 'kakip1107',
      work: {
        role: ['接客', '建築'],
        org: 'ミニゲーム'
      }
    },
    {
      name: 'yohane',
      description: 'ヨハネです。困ったことがありましたら気軽にお声がけください！',
      github: 'Yohane0227',
      twitter: 'Yohane27_',
      steam: 'yohane1636',
      youtube: 'UCSXnjIIX7I1dw5jiQxmdm6w',
      languages: ['jp'],
      minecraft_uuid: '878178de06834b22b50d06088f13efc2',
      work: {
        role: ['接客', 'サポーター'],
        org: '?'
      }
    },
    {
      name: 'doudai',
      description: `なんか運営にされた人暇なときに監視してる悪事をするとお仕置きよ`,
      languages: ['jp'],
      twitter: 'doudai9',
      minecraft_uuid: 'abf88b94efaf4ae093593577be486dc4',
      work: {
        role: 'プラグイン開発者'
      }
    },
    {
      name: 'more5804',
      languages: ['jp'],
      minecraft_uuid: '65d9cc294ea44acb8278b477227cb8e9',
      work: {
        role: '接客'
      }
    },
    {
      name: 'penkun0286',
      languages: ['jp'],
      minecraft_uuid: '265b3a3c23114651b9eb11f21e16d495',
      work: {
        role: ['建築', '接客', 'コマンド'],
        org: '?'
      }
    }
  ])
)

export default members
