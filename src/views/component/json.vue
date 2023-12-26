<template>
  <div class="json">
    <i18n path="componentPage.json" tag="p" class="tips">
      <template slot="link">
        <el-link href="https://github.com/surmon-china/vue-codemirror" type="primary" target="_blank">
          vue-codemirror
        </el-link>
      </template>
    </i18n>

    <codemirror v-model="json" />
  </div>
</template>

<script>
import Codemirror from '@/components/Codemirror'

const json = `[
  {
    "items": [
      {
        "market_type": "forexdata",
        "symbol": "XAUUSD"
      },
      {
        "market_type": "forexdata",
        "symbol": "UKOIL"
      },
      {
        "market_type": "forexdata",
        "symbol": "CORN"
      }
    ],
    "name": ""
  },
  {
    "items": [
      {
        "market_type": "forexdata",
        "symbol": "XAUUSD"
      },
      {
        "market_type": "forexdata",
        "symbol": "XAGUSD"
      },
      {
        "market_type": "forexdata",
        "symbol": "AUTD"
      },
      {
        "market_type": "forexdata",
        "symbol": "AGTD"
      }
    ],
    "name": "贵金属"
  },
  {
    "items": [
      {
        "market_type": "forexdata",
        "symbol": "CORN"
      },
      {
        "market_type": "forexdata",
        "symbol": "WHEAT"
      },
      {
        "market_type": "forexdata",
        "symbol": "SOYBEAN"
      },
      {
        "market_type": "forexdata",
        "symbol": "SUGAR"
      }
    ],
    "name": "农产品"
  },
  {
    "items": [
      {
        "market_type": "forexdata",
        "symbol": "UKOIL"
      },
      {
        "market_type": "forexdata",
        "symbol": "USOIL"
      },
      {
        "market_type": "forexdata",
        "symbol": "NGAS"
      }
    ],
    "name": "能源化工"
  }
]`

export default {
  name: 'JsonPage',
  components: { Codemirror },
  data() {
    return {
      json,
    }
  },
}
</script>

<style scoped>
.json {
  padding: 20px;
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
</style>
