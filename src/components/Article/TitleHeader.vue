<template>
  <h1 class="hero-h">halcyon<span>days</span></h1>
</template>

<script>
export default {
  name: 'TitleHeader',
  props: {},
};
</script>

<style lang="scss">
.hero-h {
  font-family: 'Gotham-book';
  font-size: 40px;
  letter-spacing: 12px;
  color: #353535;
  text-transform: uppercase;
  margin-bottom: 30px;
  text-align: center;
  & span {
    color: #a1a9b0;
    display: inline-block;
  }
}
</style>
