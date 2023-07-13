<template>
  <div class="dynamic-table">
    <div class="title">{{ $t('dynamicTable.fixed') }}</div>
    <fixed-thead />

    <div class="title">{{ $t('dynamicTable.unfixed') }}</div>
    <unfixed-thead />
  </div>
</template>

<script>
import FixedThead from './components/FixedThead.vue'
import UnfixedThead from './components/UnfixedThead.vue'

export default {
  name: 'DynamicTable',
  components: { FixedThead, UnfixedThead },
}
</script>

<style lang="scss" scoped>
.dynamic-table {
  padding: 20px;

  .title {
    margin: 10px 0 5px 10px;
  }
}
</style>
