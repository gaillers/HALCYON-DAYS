<template>
  <p>
    Sed a lorem quis neque interdum <a href="/">consequat ut sed sem.</a> Duis
    quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in
    faucibus. Praesent id tempor ipsum. Fusce at massa ac nunc porta fringilla
    sed eget neque. Quisque quis pretium nulla. Fusce eget bibendum neque, vel
    volutpat augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Interdum et malesuada fames ac ante ipsum primis in faucibus.
  </p>
</template>

<script>
export default {
  name: 'ArticleText',
};
</script>

<style lang="scss">
p {
  text-align: center;
  font-family: 'Gotham-book';
  color: #8c9398;
  word-spacing: 1px;
  line-height: 25px;
  font-size: 14px;
  & a {
    color: #353535;
    transition: all 0.5s;
    &:hover {
      color: #3dc9b3;
      text-decoration: none;
    }
  }
}
</style>
