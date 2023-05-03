<template>
  <div>
    <span>{{ +new Date() }}</span>
    <el-button @click="$router.push('/')">首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'ExampleTable',
}
</script>
