<template>
  <div class="language">
    <el-dropdown trigger="click" @command="updateLanguage">
      <div>
        <svg-icon icon-class="language" />
      </div>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item of options"
          :key="item.value"
          :command="item.value"
          :disabled="item.value === language"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { getPageTitle } from '@/utils/page'

export default {
  name: 'Language',
  data() {
    return {
      options: [
        { label: '中文', value: 'zh' },
        { label: 'English', value: 'en' },
      ],
    }
  },
  computed: {
    language() {
      return this.$store.getters.app.language
    },
    title() {
      return this.$route.meta?.title
    },
  },
  methods: {
    updateLanguage(language) {
      this.$i18n.locale = language

      document.title = getPageTitle(this.title)

      this.$store.dispatch('app/updateLanguage', language)
    },
  },
}
</script>

<style lang="scss" scoped>
.language {
  display: inline-block;
}
</style>
