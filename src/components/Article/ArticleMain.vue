<template>
  <h2 class="arrow">{{ arrowArticle }}</h2>
</template>

<script>
export default {
name: 'ArticleMain',
props : {
  'arrowArticle':String,
 }
}
</script>

<style lang="scss">
.arrow {
 font-family: 'Gotham-medium';
 font-size: 15px;
 color: #353535;
 letter-spacing: 1px;
 text-align: center;
 text-transform: uppercase;
 background: url('../../assets/images/h1-bg.png') no-repeat center bottom;
 padding-bottom: 30px;
}
</style>