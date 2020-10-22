<template>
  <div id="main">
    <Header/>
    <Intro/>
    <Features/>
  </div>
</template>

<script>
import Header from './container/Header';
import Intro from './container/Intro';
import Features from './container/Features';

export default {
  name: 'App',
  components: {
    Header,
    Intro,
    Features,
   
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
p, pre {
    margin: 1em 0;
}

@import '~bootstrap/dist/css/bootstrap.css';
</style>
