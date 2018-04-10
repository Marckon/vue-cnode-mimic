<template>
  <div class="qr">
    <div class="title">客户端二维码</div>
    <img src="https://dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="">
  </div>
</template>

<script>
    export default {
        name: "side-QRcode"
    }
</script>

<style scoped>
.qr{
  margin-top: 20px;
  width:100%;
  height:30%;
  background-color: #fff;
  position: relative;
}
.title{
  background-color: #ccc;
  height:15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:bold;
}
  .qr img{
    height:100%;
    width:100%;
  }
</style>
