<template>
  <div class="page-404">
    <div class="page-404-bg">
      <img class="bg" src="@/assets/error/404.png" alt="" />
      <img class="cloud left" src="@/assets/error/cloud.png" alt="" />
      <img class="cloud middle" src="@/assets/error/cloud.png" alt="" />
      <img class="cloud right" src="@/assets/error/cloud.png" alt="" />
    </div>

    <div class="page-404-explain">
      <div class="oops">{{ $t('errorPage404.oops') }}</div>
      <div class="right">
        {{ $t('errorPage404.right') }}
        <el-link type="primary" href="https://wallstreetcn.com" target="_blank">wallstreetcn</el-link>
      </div>
      <div class="title">{{ $t('errorPage404.title') }}</div>
      <div class="desc">{{ $t('errorPage404.desc') }}</div>

      <router-link to="/">
        <el-button type="primary" round>{{ $t('errorPage404.back') }}</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
}
</script>

<style lang="scss" scoped>
.page-404 {
  width: 1200px;
  padding: 0 50px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}

.page-404-bg {
  width: 600px;
  float: left;
  position: relative;

  img {
    width: 100%;
    vertical-align: bottom;
  }

  .cloud {
    opacity: 0;
    position: absolute;

    &.left {
      width: 80px;
      top: 17px;
      left: 220px;
      animation: cloudLeft 2s linear 1s forwards;
    }

    &.middle {
      width: 46px;
      top: 10px;
      left: 420px;
      animation: cloudMiddle 2s linear 1.2s forwards;
    }

    &.right {
      width: 62px;
      top: 100px;
      left: 500px;
      animation: cloudRight 2s linear 1s forwards;
    }
  }
}

.page-404-explain {
  width: 300px;
  padding: 30px 0;
  float: left;

  .oops {
    font-size: 32px;
    color: #409eff;
    line-height: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    opacity: 0;
    animation: slideUp 0.5s forwards;
  }

  .right,
  .desc {
    font-size: 13px;
    color: grey;
    line-height: 21px;
    margin-bottom: 30px;
    opacity: 0;
    animation: slideUp 0.5s 0.2s forwards;
  }

  .title {
    font-size: 20px;
    color: #222;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    opacity: 0;
    animation: slideUp 0.5s 0.1s forwards;
  }

  .el-button {
    opacity: 0;
    animation: slideUp 0.5s 0.3s forwards;
  }

  .el-link {
    font-size: 13px;
    vertical-align: bottom;
  }
}

@keyframes cloudLeft {
  0% {
    top: 17px;
    left: 220px;
    opacity: 0;
  }
  20% {
    top: 33px;
    left: 188px;
    opacity: 1;
  }
  80% {
    top: 81px;
    left: 92px;
    opacity: 1;
  }
  100% {
    top: 97px;
    left: 60px;
    opacity: 0;
  }
}

@keyframes cloudMiddle {
  0% {
    top: 10px;
    left: 420px;
    opacity: 0;
  }
  20% {
    top: 40px;
    left: 360px;
    opacity: 1;
  }
  70% {
    top: 130px;
    left: 180px;
    opacity: 1;
  }
  100% {
    top: 160px;
    left: 120px;
    opacity: 0;
  }
}

@keyframes cloudRight {
  0% {
    top: 100px;
    left: 500px;
    opacity: 0;
  }
  20% {
    top: 120px;
    left: 460px;
    opacity: 1;
  }
  80% {
    top: 180px;
    left: 340px;
    opacity: 1;
  }
  100% {
    top: 200px;
    left: 300px;
    opacity: 0;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
