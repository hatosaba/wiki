<template>
  <div class="item-preview">
    <a class="item-preview-img" :href="theme.download_url" rel="sponsored">
      <img :src="theme.icon" :alt="`${theme.name} - ${theme.description}`" loading="lazy" width=100 height=100 onerror="this.src = '//raw.githubusercontent.com/hatosaba/resourcepacks/main/Default.png';">
    </a>
    <div>
      <div class="item-preview-name-container">
        <h3 class="item-preview-name">
          {{theme.name}}
        </h3>
      </div>
      <div class="item-preview-description">{{theme.description}}</div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@theme/styles/_settings.scss";

.item-preview {
  width: 290px;
  margin-bottom: 25px;

  @media screen and (max-width: 1300px) {
    justify-content: center;
    width: 380px;
  }

  &-img {
    transition: .15s box-shadow, .15s transform;
    border-radius: .5rem;
    box-shadow: 0 2rem 1.5rem -1.5rem rgba(33,37,41,.15), 0 0 1.5rem 0.5rem rgba(33,37,41,.05);
    overflow: hidden;
    //display: block;

    &:hover {
      transform: translateY(-0.25rem);
      box-shadow: 0 2.25rem 1.5rem -1.5rem rgba(33,37,41,.2),0 0 1.5rem .5rem rgba(33,37,41,.05);
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: .5rem;
    vertical-align: middle;
    border-style: none;
  }

  &-name-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-name {
    margin-top: 1rem;
    margin-bottom: .3rem;
    font-size: 1rem;
    line-height: 1.5;

    &.free::after {
      content: "FREE";
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      color: #fff;
      background-color: $green;
      line-height: 14px;
      padding: 0 4px;
      border-radius: 3px;
      margin-left: 5px;
      vertical-align: middle;
      position: relative;
      top: -1px;
    }
  }

  &-price {
    margin-top: .7rem
  }

  &-description {
    font-size: .9rem
  }
}

/*
.line {
  width: 98%;
  height: 2px;
  margin-left: auto;
  margin-right: auto;
  background-color: grey;
}
*/
</style>
