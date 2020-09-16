<template>
  <button class="btn-header">{{ burgerTitle }}</button>
</template>

<script>

export default {
 name: 'ButtonHeader',
 props: {
  burgerTitle: {
    type: String,
    default: 'None title',
  }
 }
};
</script>

<style lang="scss">
.btn-header {
  width: 200px;
  height: 60px;
  border-radius: 5px;
  background-color: #3dc9b3;
  border: none;
  box-shadow: 0px 3px 0px 0px #309383;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 2.25px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: 'Gotham';
  font-weight: bold;
  // transition: All 0.6s ease;
  // &:hover {
  //   background-color: #8bdfd1;
  // }
}
</style>
