<template>
  <section class="features text-centre section-padding"> 
    <b-container>
     <b-row>
        <b-col md="12">
         <ArticleMain arrowArticle="Love what you do, and you'll do it well"/>
          <FeaturesWrap/>
        </b-col>
     </b-row>
    </b-container>
  </section>
</template>

<script>
import ArticleMain from '../components/Article/ArticleMain';
import FeaturesWrap from '../components/Pr/FeaturesWrap';

export default {
name: 'Features',
components: {
   ArticleMain,
   FeaturesWrap,

 }
}
</script>

<style lang="scss">



</style>