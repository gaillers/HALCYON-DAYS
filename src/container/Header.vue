<template>
  <header>
    <section class="hero">
      <b-container>
        <b-row>
          <b-col md="12" class="navicon" >
            <Burger />
          </b-col>
        </b-row>
        <b-row > 
         <b-col md="8 text-center" offset-md="2" class="inner">
          <TitleHeader/>
          <TextHeader/>
         </b-col>
        </b-row>
        <b-row>
          <b-col md="6 text-center"  offset-md="3">
           <ButtonHeader burgerTitle="learn more"/>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </header>
</template>

<script>
import Burger from '../components/Burger';
import TitleHeader from '../components/Article/TitleHeader';
import TextHeader from '../components/Article/TextHeader';
import ButtonHeader from '../components/ButtonHeader';

export default {
  name: 'Header',
  components: {
    Burger,
    TitleHeader,
    TextHeader,
    ButtonHeader
  },
  props: {
    
  }
};
</script>

<style lang="scss">
.hero {
  background: url('../assets/images/hero-bg.png') no-repeat center center;
  background-size: cover;
  padding: 65px 0 300px 0;
  height: auto;
}
.navicon {
  position: relative;
  height: 26px;
}
.inner {
    padding-top: 170px;
}
</style>
