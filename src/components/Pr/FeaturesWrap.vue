<template>
  <div class="features-wrapper">
    <FuaturesItem
      v-for="item of FeaturesItems"
      :key="item.article"
      :FeaturesItem_data="item"
    />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import FuaturesItem from './FuaturesItem';

export default {
  name: 'FeatureWrap',
  components: {
    FuaturesItem,
  },
  data() {
    return {
      FeaturesItems: [
        {
          article: 'P1',
          icon: 'laptop',
          name: 'digital design',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        },
        {
          article: 'P2',
          icon: 'code',
          name: 'web development',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        },
        {
          article: 'P3',
          icon: 'heart',
          name: 'creative direction',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.features-wrapper {
  margin: 70px 0 0;
  display: flex;
}
@media (max-width: 767px){
  .features-wrapper{
    display: block;
  }
}
</style>
