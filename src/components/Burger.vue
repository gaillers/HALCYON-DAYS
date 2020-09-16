<template>
  <div class="burger">
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Burger',
  props: {},
};
</script>

<style lang="scss">
.burger {
  position: absolute;
  right: 15px;
  top: 0;
  width: 35px;
  height: 26px;
  cursor: pointer;
  div {
    width: 35px;
    height: 5px;
    position: absolute;
    background-color: #372c3c;
    top: 10px;
    &::before {
      content: '';
      height: 5px;
      width: 35px;
      position: absolute;
      background-color: #372c3c;
      top: -10px;
    }
    &::after {
      content: '';
      height: 5px;
      width: 35px;
      position: absolute;
      background-color: #372c3c;
      top: 10px;
    }
  }
}
</style>
