<template>
  <div>
    <h1>{{ $t('el.datepicker.now') }}</h1>
    <span>{{ +new Date() }}</span>
    <el-button @click="$router.push('/')">首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'ExampleTable',
}
</script>
