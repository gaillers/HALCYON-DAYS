<template>
  <p class="hero-p">Stack Vue-Cli + Boostrap source Code, <span>Landing page tutorial </span></p>
</template>

<script>
export default {
  name: 'TextHeader',
};
</script>

<style lang="scss">
.hero-p {
  font-family: 'Gotham-book';
  font-size: 15px;
  letter-spacing: 1px;
  color: #8c9398;
  text-align: center;
  margin-bottom: 65px;
  & span {
     font-family: 'Gotham-medium';
     font-style: italic;
  }
}
</style>
