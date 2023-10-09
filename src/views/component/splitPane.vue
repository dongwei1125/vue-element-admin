<template>
  <div class="split-pane">
    <i18n path="componentPage.splitPane" tag="p" class="tips">
      <template slot="link">
        <el-link href="https://github.com/PanJiaChen/vue-split-pane" type="primary" target="_blank">
          vue-split-pane
        </el-link>
      </template>
    </i18n>

    <div>
      <vue-splitpane split="vertical" @resize="resize">
        <template slot="paneL">
          <div class="left-pane" />
        </template>

        <template slot="paneR">
          <vue-splitpane split="horizontal">
            <template slot="paneL">
              <div class="top-pane" />
            </template>

            <template slot="paneR">
              <div class="bottom-pane" />
            </template>
          </vue-splitpane>
        </template>
      </vue-splitpane>
    </div>
  </div>
</template>

<script>
import VueSplitpane from 'vue-splitpane'

export default {
  name: 'SplitPane',
  components: { VueSplitpane },
  methods: {
    resize() {},
  },
}
</script>

<style lang="scss" scoped>
.split-pane {
  height: 100%;
  padding: 20px;
  position: relative;

  > div {
    height: calc(100% - 68px);
  }
}

.tips {
  padding: 8px 24px;
  margin: 0 0 20px;
  border-radius: 2px;
  font-size: 16px;
  color: #2c3e50;
  line-height: 32px;
  background-color: #eef1f6;
}

.left-pane {
  height: 100%;
  background-color: #f38181;
}

.top-pane {
  width: 100%;
  height: 100%;
  background-color: #fce38a;
}

.bottom-pane {
  width: 100%;
  height: 100%;
  background-color: #95e1d3;
}
</style>
