<template>
  <b-col md="4 wp2">
    <div class="icon">
    <fa-icon :icon="FeaturesItem_data.icon"/>
    </div>
    <h2 class="arrow-ar">{{ FeaturesItem_data.name }}</h2>
    <p>
      {{ FeaturesItem_data.text }}
    </p>
  </b-col>
</template>

<script>
export default {
  name: 'FuaturesItem',
  props: {
    FeaturesItem_data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.icon {
  height: 175px;
  width: 175px;
  line-height: 175px;
  max-width: 100%;
  background: #3dc9b3;
  border-radius: 50%;
  -o-border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  display: block;
  color: #fff;
  font-size: 55px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  margin: 0 auto 50px;
}
.arrow-ar {
  font-family: 'Gotham-medium';
  font-size: 15px;
  color: #353535;
  text-transform: uppercase;
  &::after {
    content: ' ';
    border: solid 2px #3dc9b3;
    display: block;
    width: 35px;
    margin: 25px auto;
  }
}
</style>
