<template>
  <div class="vuer">
    <div class="avatar">
      <img v-if="profile.imageUrl"
        :src="profile.imageUrl"
        :alt="profile.name" width=80 height=80>
      <img v-else-if="profile.minecraft_uuid"
        :src="`https://crafatar.com/renders/head/${profile.minecraft_uuid}?scale=6&overlay`"
        :alt="profile.name" width=80 height=80>
      <img v-else-if="profile.github"
        :src="`https://github.com/${profile.github}.png`"
        :alt="profile.name" width=80 height=80>
      <img v-else-if="profile.twitter"
        :src="`https://avatars.io/twitter/${profile.twitter}`"
        :alt="profile.name" width=80 height=80>
    </div>

    <div class="profile">
      <h3 v-if="profile.minecraft_uuid" :data-official-title="profile.title">{{ info }}</h3>
      <h3 v-else-if="profile.name" :data-official-title="profile.title">{{ profile.name }}</h3>
      <div v-if="profile.description">{{profile.description}}</div>
      <dl>
        <template v-if="profile.reposOfficial">
          <dt>Core focus</dt>
          <dd>
            <ul>
              <!-- <li v-for="repo in profile.reposOfficial">
                <a :href="generateGithubUrl('vuejs', repo)" target=_blank>{{ repo.name || repo }}</a>
              </li> -->
            </ul>
          </dd>
        </template>
        <template v-if="profile.github && profile.reposPersonal">
          <dt>エコ</dt>
          <dd>
            <ul>
              <!-- <li v-for="repo in profile.reposPersonal">
                <a :href="generateGithubUrl(profile.github, repo)" target=_blank>{{ repo.name || repo }}</a>
              </li> -->
            </ul>
          </dd>
        </template>
        <template v-if="profile.work">
          <dt>
            <i class="fa fa-briefcase"></i>
            <span class="sr-only">Work</span>
          </dt>
          <dd v-html="workHtml"></dd>
        </template>
        <span v-if="profile.distanceInKm" class="distance">
          <dt>
            <i class="fa fa-map-marker"></i>
            <span class="sr-only">Distance</span>
          </dt>
          <dd>
            About
            <span
              v-if="profile.distanceInKm <= 150"
              :title="`${profile.name} is close enough to commute to your location.`"
              class="highlighted"
            >{{ textDistance }} away</span>
            <template v-else>{{ textDistance }} away</template>
            in {{ profile.city }}
          </dd>
        </span>
        <template v-else-if="profile.city">
          <dt>
            <i class="fa fa-map-marker"></i>
            <span class="sr-only">City</span>
          </dt>
          <dd>
            {{ profile.city }}
          </dd>
        </template>
        <template v-if="profile.languages">
          <dt>
            <i class="fa fa-globe"></i>
            <span class="sr-only">Languages</span>
          </dt>
          <dd class="language-list">
            <ul>
              <li
                is="VuerLanguage"
                v-for="code in profile.languages"
                :key="code"
                :code="code"
                :vuerName="profile.name"
              />
            </ul>
          </dd>
        </template>
        <template v-if="profile.links">
          <dt>
            <i class="fa fa-link"></i>
            <span class="sr-only">Links</span>
          </dt>
          <dd>
            <ul>
              <!-- <li v-for="link in profile.links">
                <a :href="link" target=_blank>{{ minimizeLink(link) }}</a>
              </li> -->
            </ul>
          </dd>
        </template>
        <footer v-if="hasSocialLinks" class="social">
          <SocialIcon type="YouTube" v-if="profile.youtube" :link="`https://www.youtube.com/channel/${profile.youtube}`"/>
          <SocialIcon type="GitHub" v-if="profile.github" :link="generateGithubUrl(profile.github)"/>
          <SocialIcon type="Twitter" v-if="profile.twitter" :link="`https://twitter.com/${profile.twitter}`"/>
          <SocialIcon type="Steam" v-if="profile.steam" :link="`https://steamcommunity.com/id/${profile.steam}`"/>
          <SocialIcon type="Instagram" v-if="profile.instagram" :link="`https://www.instagram.com/${profile.instagram}`"/>
          <SocialIcon type="CodePen" v-if="profile.codepen" :link="`https://codepen.io/${profile.codepen}`"/>
          <SocialIcon type="LinkedIn" v-if="profile.linkedin" :link="`https://www.linkedin.com/in/${profile.linkedin}`"/>
        </footer>
      </dl>
    </div>
  </div>
</template>

<script>
import { minimizeLink, generateGithubUrl, kmToMi, roundDistance } from './utils'
import axios from "axios"

export default {
  components: {
    VuerLanguage: () => import('./vuer-language'),
    SocialIcon: () => import('@theme/components/ui/SocialIcon.vue')
  },

  data () {
    return {
      info: null
    }
  },

  mounted () {
    const uuid = this.profile.minecraft_uuid

    if(uuid) {
      axios
      .get(`/mojang?uuid=${uuid}`)
      .then(response => (this.info = response.data.name))
      .catch(this.info = this.profile.name);
    }
    
  },

  props: {
    profile: Object,
    useMiles: Boolean
  },

  computed: {
    workHtml () {
      const work = this.profile.work
      let html = ''

      if (work.orgUrl) {
        html += `<a href="${work.orgUrl}" target="_blank" rel="noopener noreferrer">`

        if (work.org) {
          html += work.org
        } else {
          this.minimizeLink(work.orgUrl)
        }

        html += '</a>'
      } else if (work.org) {
        html += work.org
      }

      if (work.role) {
        if (html.length > 0) {
          html = `${work.role} @ ${html}`
        } else {
          html = work.role
        }
      }

      return html
    },

    textDistance () {
      const distanceInKm = this.profile.distanceInKm || 0

      return this.useMiles ? `${roundDistance(kmToMi(distanceInKm))} miles` : `${roundDistance(distanceInKm)}km`
    },

    hasSocialLinks () {
      return this.profile.youtube || this.profile.github || this.profile.twitter || this.profile.codepen || this.profile.linkedin
    }
  },

  methods: {
    minimizeLink,
    generateGithubUrl
  }
}
</script>

<style lang="scss" scoped>
.vuer {
  display: flex;
  padding: 25px 0;
}

.avatar {
  flex: 0 0 80px;
  
  img {
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.078039));
    border-radius: 50%;
    object-fit: cover; 
  }
}

.profile {
  padding-left: 26px;
  flex: 1;

  h3 {
    margin: 0;
    font-size: 1.3em;
  }

  dl {
    margin: 0.6em 0 0;
  }

  ul, li, dt, dd {
    display: inline;
    padding: 0;
    margin: 0;
    line-height: 1.3;
  }

  dt {
    text-transform: uppercase;
    font-size: 0.84em;
    font-weight: 600;
    min-width: 1.2em;
    margin-right: 0.5em;
    display: inline-block;
  }

  dd::after {
    display: block;
    content: '';
    margin-top: 0.6em;
  }

  li+li::before {
    display: inline-block;
    content: '·';
    margin: 0 0.4em;
  }
  
}

.social {
  a {
    display: inline-block;
    margin-right: 0.3em;
    font-size: 1.3em;
  }
}

.highlighted {
  cursor: help;
  color: #4682b4;

  &::after {
    content: '\f06a';
    font-family: 'FontAwesome';
    font-size: 0.75em;
    vertical-align: super;
    margin-left: 4px;
    margin-right: 2px;
    position: relative;
  }
}
</style>
