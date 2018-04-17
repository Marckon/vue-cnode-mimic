<template>
  <div class="qr">
    <div class="title">客户端二维码</div>
    <img src="https://dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="" width="60%">
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.title{
  background-color: #f6f6f6;
  height:15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:bold;
  position: absolute;
  top:0;
  left:0;
  right:0;
}
  .qr img{

  }
</style>
