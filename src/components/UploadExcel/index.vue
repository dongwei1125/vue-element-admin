<template>
  <el-upload
    class="upload-excel"
    action="#"
    drag
    :show-file-list="false"
    :accept="accept"
    :http-request="httpRequest"
    :before-upload="onBeforeUpload"
  >
    <i class="el-icon-upload" />
    <span class="upload-excel-text" v-html="$t('uploadExcel.tips')" />
  </el-upload>
</template>

<script>
import * as XLSX from 'xlsx'
import lang from './lang'

export default {
  name: 'UploadExcel',
  mixins: [lang],
  props: {
    beforeUpload: Function, // eslint-disable-line
  },
  data() {
    return {
      accept: '.xlsx, .xls',
      fileTypes: [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
      ],
    }
  },
  methods: {
    onBeforeUpload(file) {
      if (!this.fileTypes.includes(file.type)) {
        this.$message.warning(this.$t('uploadExcel.onlyXlsx'))

        return false
      }

      if (this.beforeUpload) {
        return this.beforeUpload(file)
      }
    },

    httpRequest({ file }) {
      const fr = new FileReader()

      fr.readAsArrayBuffer(file)

      fr.onload = () => {
        const workbook = XLSX.read(fr.result, { type: 'array' })
        const [sheetName] = workbook.SheetNames
        const worksheet = workbook.Sheets[sheetName]
        const data = XLSX.utils.sheet_to_json(worksheet)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-excel-text {
  color: #606266;
  font-size: 14px;
  text-align: center;
  display: block;
}

::v-deep {
  .el-upload-dragger {
    width: 600px;
  }

  em {
    color: #409eff;
  }
}
</style>
