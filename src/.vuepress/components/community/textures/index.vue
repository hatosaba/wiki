<template>
  <div class="themes">
    <!-- <theme-provider v-for="provider in merged" :key="provider.name" :provider="provider" /> -->
    <ThemeItem v-for="theme in merged" :key="theme.name" :theme="theme"/>

    <p>
      あなたのテーマをここで紹介したいですか？
      <a href="mailto:evan@vuejs.org?subject=Theme+affiliation">ご連絡ください！</a>
    </p>
  </div>
</template>

<script>

const textures = async () => {
  let packs = [];
  const response = await fetch(`https://api.github.com/repos/hatosaba/resourcepacks/releases/latest`)
  const data = await response.json()
  
  packs = data.assets.map(asset => {
    const name = asset.name.replace(/\.[^/.]+$/, '');
    return {
      name: name,
      icon: `https://images.weserv.nl/?url=https://raw.githubusercontent.com/hatosaba/resourcepacks/main/${name}/pack.png&w=128&output=webp`,
      download_url: asset.browser_download_url
    };
  });
  packs = await Promise.all(packs.map(async pack => {
    const mcmeta = await (await fetch(`https://raw.githubusercontent.com/hatosaba/resourcepacks/main/${pack.name}/pack.mcmeta`)).json();
    return {
      ...pack,
      description: mcmeta.pack.description,
    };
  }));
  return packs
}


export default {
  components: {
    ThemeItem: () => import('./theme-item.vue'),
    RoundedButton: () => import('@theme/components/ui/RoundedButton.vue'),
  },

  
  data () {
    const dates = {}

    return {
      dates,
    }
  },

  computed: {
    merged () {
      return this.dates
    }
  },

  mounted () {
    this.loadDate()
    this.saveStats()

    let stats = null

    try {
      stats = JSON.parse(sessionStorage.getItem('texture-stats'))
    } catch {
    }
    
    if (!stats) {
      return
    }

    const { dates } = stats

    this.dates = dates
  },

  methods: {
    async load () {
      await this.loadDate()
      this.saveStats()
    },

    async loadDate () {
      this.dates = null

      let date = null

      try {
        date = await textures()
      } catch {
      }
      console.log(date)
      this.dates = date
    },

    saveStats () {
      const data = {
        dates: this.dates
      }

      // limits request rates, so we store the stats in sessionStorage
      sessionStorage.setItem('texture-stats', JSON.stringify(data))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@theme/styles/_settings.scss";

.themes-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    justify-content: center;
  }
}
