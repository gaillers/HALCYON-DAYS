<template>
  <section class="intro section-padding">
   <b-container>
      <b-row>
         <b-col md="8" offset-md="2">
            <ArticleMain arrowArticle="a creative portfolio template"/>
             <ArticleText/>
         </b-col>
      </b-row>
   </b-container>
  </section>
</template>

<script>
import ArticleMain from '../components/Article/ArticleMain';
import ArticleText from '../components/Article/ArticleText';

export default {
name: 'Intro',
components: {
   ArticleMain,
   ArticleText,
}

}
</script>

<style lang="scss">
.intro {
   background: #f3f5f8;
   & p {
      margin: 50px 0 0;
   }
}
.section-padding {
   padding: 90px 0 100px;
}
.text-centre {
   text-align: center;
}

</style>