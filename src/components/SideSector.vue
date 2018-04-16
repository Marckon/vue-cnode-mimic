<template>
  <div class="side-sector">
    <slot></slot>
    <side-login></side-login>
    <side-QRcode></side-QRcode>
  </div>
</template>

<script>
  import SideLogin from './SideLogin'
  import SideQRcode from './SideQRcode'

  export default {
    name: "side-sector",
    components: {
      SideLogin,
      SideQRcode,
    }
  }

</script>

<style scoped>
  .side-sector {
    grid-area: side-sector;
    width: 100%;
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    align-content: start;
    margin-left: 20px;
  }

  @media screen and (max-width: 980px) {
    .side-sector{
      display: none;
    }
  }
</style>
