<template>
  <div id="main">
    <Header/>
  </div>
</template>

<script>
import Header from './container/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}


@import '~bootstrap/dist/css/bootstrap.css';
</style>
