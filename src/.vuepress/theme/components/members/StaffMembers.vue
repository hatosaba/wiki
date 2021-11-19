<template>
  <MembersLayout extra-classes="members__staff">
    <template #heading>愉快な運営メンバー</template>

    <template #content>
      <div class="platinum">
        <a
          v-for="member in members.platinum_members"
          :key="member.name"
        >
          <img :src="`https://crafatar.com/avatars/${member.img}?overlay=true${member.img}`" width="160" :alt="member.name">
        </a>
      </div>
      <div class="gold">
        <a
          v-for="member in members.gold_members"
          :key="member.name"
        >
          <img :src="`https://crafatar.com/avatars/${member.img}?overlay=true`" width="120" :alt="member.name">
        </a>
      </div>
      <RoundedButton url="https://wiki.hatosaba.f5.si/community/team.html">もっと詳しく見る</RoundedButton>

      <!--<RoundedButton url="https://forms.gle/swbHLQBPt5aJoUxq5">運営になります！</RoundedButton>-->
    </template>
  </MembersLayout>
</template>

<script>
import MembersLayout from '@theme/components/members/MembersLayout.vue'
import RoundedButton from '@theme/components/ui/RoundedButton.vue'
export default {
  components: {
    MembersLayout,
    RoundedButton
  },
  props: {
    members: {
      type: Object,
      required: true
    }
  }
}
</script>