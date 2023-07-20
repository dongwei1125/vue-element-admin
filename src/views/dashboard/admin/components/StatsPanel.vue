<template>
  <el-row :gutter="40" class="stats-panel">
    <el-col :xs="12" :sm="12" :lg="6">
      <div class="item" @click="emitChange('newVisitis')">
        <div class="icon peoples">
          <svg-icon icon-class="peoples" />
        </div>
        <div class="desc">
          <div class="label">{{ $t('dashboardPage.newVisits') }}</div>
          <count-to class="count" :start-val="0" :end-val="102400" :duration="2600" />
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6">
      <div class="item" @click="emitChange('messages')">
        <div class="icon message">
          <svg-icon icon-class="message" />
        </div>
        <div class="desc">
          <div class="label">{{ $t('dashboardPage.messages') }}</div>
          <count-to class="count" :start-val="0" :end-val="81212" :duration="3000" />
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6">
      <div class="item" @click="emitChange('purchases')">
        <div class="icon money">
          <svg-icon icon-class="money" />
        </div>
        <div class="desc">
          <div class="label">{{ $t('dashboardPage.purchases') }}</div>
          <count-to class="count" :start-val="0" :end-val="9280" :duration="3200" />
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6">
      <div class="item" @click="emitChange('shoppings')">
        <div class="icon shopping">
          <svg-icon icon-class="shopping" />
        </div>
        <div class="desc">
          <div class="label">{{ $t('dashboardPage.shoppings') }}</div>
          <count-to class="count" :start-val="0" :end-val="13600" :duration="3600" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  name: 'StatsPanel',
  components: { CountTo },
  methods: {
    emitChange(type) {
      this.$emit('change', type)
    },
  },
}
</script>

<style lang="scss" scoped>
$peoplesColor: #40c9c6;
$messageColor: #36a3f7;
$moneyColor: #f4516c;
$shoppingColor: #34bfa3;

.item {
  height: 108px;
  font-size: 12px;
  color: #666;
  background-color: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .icon {
      color: #fff;

      &.peoples {
        background-color: $peoplesColor;
      }

      &.message {
        background-color: $messageColor;
      }

      &.money {
        background-color: $moneyColor;
      }

      &.shopping {
        background-color: $shoppingColor;
      }
    }
  }
}

.icon {
  float: left;
  font-size: 48px;
  margin: 14px 0 0 14px;
  padding: 16px;
  border-radius: 6px;
  transition: all 0.38s ease-out;

  &.peoples {
    color: $peoplesColor;
  }

  &.message {
    color: $messageColor;
  }

  &.money {
    color: $moneyColor;
  }

  &.shopping {
    color: $shoppingColor;
  }
}

.desc {
  float: right;
  font-weight: 700;
  margin: 26px;

  .label {
    line-height: 18px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    margin-bottom: 12px;
  }

  .count {
    font-size: 20px;
  }
}

::v-deep {
  .svg-icon {
    float: left;
  }

  @media (max-width: 550px) {
    .icon {
      float: none;
      width: 100%;
      height: 100%;
      margin: 0;

      .svg-icon {
        display: block;
        margin: 14px auto;
        float: none;
      }
    }
  }

  @media (max-width: 1200px) {
    .el-col:nth-child(-n + 2) {
      margin-bottom: 32px;
    }
  }
}
</style>
