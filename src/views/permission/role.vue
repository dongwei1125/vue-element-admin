<template>
  <div class="role-permission">
    <el-button type="primary" @click="add">{{ $t('permissionPage.addRole') }}</el-button>

    <el-table :data="tableData" border>
      <el-table-column prop="key" align="center" :label="$t('permissionPage.key')" width="220px" />
      <el-table-column prop="name" align="center" :label="$t('permissionPage.name')" width="220px" />
      <el-table-column prop="desc" :label="$t('permissionPage.desc')" />

      <el-table-column align="center" label="操作">
        <template slot-scope="{ row }">
          <el-button type="primary" size="small" @click="edit(row)">
            {{ $t('permissionPage.edit') }}
          </el-button>
          <el-button type="danger" size="small" @click="deleteRole(row)">
            {{ $t('permissionPage.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <role-dialog
      :visible.sync="visible"
      :row="currentRow"
      :is-edit="isEdit"
      @add="addRole"
      @edit="editRole"
    />
  </div>
</template>

<script>
import RoleDialog from './components/RoleDialog.vue'

export default {
  name: 'RolePermission',
  components: { RoleDialog },
  data() {
    return {
      visible: false,
      isEdit: false,
      currentRow: null,
      tableData: [
        {
          id: 1,
          key: 'admin',
          name: 'admin',
          desc: 'Super Administrator. Have access to view all pages.',
          menuKeys: [
            'dashboard',
            'document',
            'guide',
            'permission',
            'pagePermission',
            'directivePermission',
            'rolePermission',
            'icons',
            'component',
            'tinymce',
            'markdown',
            'jsonEditor',
            'splitPane',
            'avatarUpload',
            'dropzone',
            'sticky',
            'countTo',
            'componentMixin',
            'backToTop',
            'dragDialog',
            'dragSelect',
            'dndList',
            'dragKanban',
            'chart',
            'keyboardChart',
            'lineChart',
            'mixChart',
            'nested',
            'menu1',
            'menu1-1',
            'menu1-2',
            'menu1-2-1',
            'menu1-2-2',
            'menu1-3',
            'menu2',
            'table',
            'dynamicTable',
            'dragTable',
            'inlineEditTable',
            'complexTable',
            'example',
            'createArticle',
            'articleList',
            'tab',
            'error',
            'error401',
            'error404',
            'excel',
            'exportExcel',
            'exportSelectedExcel',
            'exportMergeHeaderExcel',
            'uploadExcel',
            'zip',
            'exportZip',
            'pdf',
            'theme',
            'clipboard',
            'i18n',
            'link',
          ],
        },
        {
          id: 2,
          key: 'user',
          name: 'user',
          desc: 'Normal User. Can see all pages except permission page',
          menuKeys: [
            'dashboard',
            'document',
            'guide',
            'directivePermission',
            'icons',
            'component',
            'tinymce',
            'markdown',
            'jsonEditor',
            'splitPane',
            'avatarUpload',
            'dropzone',
            'sticky',
            'countTo',
            'componentMixin',
            'backToTop',
            'dragDialog',
            'dragSelect',
            'dndList',
            'dragKanban',
            'chart',
            'keyboardChart',
            'lineChart',
            'mixChart',
            'nested',
            'menu1',
            'menu1-1',
            'menu1-2',
            'menu1-2-1',
            'menu1-2-2',
            'menu1-3',
            'menu2',
            'table',
            'dynamicTable',
            'dragTable',
            'inlineEditTable',
            'complexTable',
            'example',
            'createArticle',
            'articleList',
            'tab',
            'error',
            'error401',
            'error404',
            'excel',
            'exportExcel',
            'exportSelectedExcel',
            'exportMergeHeaderExcel',
            'uploadExcel',
            'zip',
            'exportZip',
            'pdf',
            'theme',
            'clipboard',
            'i18n',
            'link',
          ],
        },
        {
          id: 3,
          key: 'visitor',
          name: 'visitor',
          desc: 'Just a visitor. Can only see the home page and the document page',
          menuKeys: ['dashboard', 'document'],
        },
      ],
    }
  },
  methods: {
    add() {
      this.visible = true
      this.isEdit = false
      this.currentRow = null
    },

    edit(row) {
      this.visible = true
      this.isEdit = true
      this.currentRow = { ...row }
    },

    addRole(data) {
      this.tableData.push({ ...data })

      this.$notify({
        title: this.$t('permissionPage.addSucced'),
        dangerouslyUseHTMLString: true,
        message: `
            <div>${this.$t('permissionPage.key')} ${data.key}</div>
            <div>${this.$t('permissionPage.name')} ${data.name}</div>
            <div>${this.$t('permissionPage.desc')} ${data.desc}</div>
          `,
        type: 'success',
      })
    },

    editRole(row) {
      const item = this.tableData.find(el => el.id === row.id)

      Object.assign(item, { ...row })

      this.$notify({
        title: this.$t('permissionPage.editSucced'),
        dangerouslyUseHTMLString: true,
        message: `
            <div>${this.$t('permissionPage.key')} ${row.key}</div>
            <div>${this.$t('permissionPage.name')} ${row.name}</div>
            <div>${this.$t('permissionPage.desc')} ${row.desc}</div>
          `,
        type: 'success',
      })
    },

    deleteRole(row) {
      this.$confirm(this.$t('permissionPage.msg'), this.$t('permissionPage.warning'), {
        confirmButtonText: this.$t('permissionPage.confirm'),
        cancelButtonText: this.$t('permissionPage.cancel'),
        type: 'warning',
      })
        .then(() => {
          const index = this.tableData.findIndex(el => el.id === row.id)

          this.tableData.splice(index, 1)
          this.$message.success(this.$t('permissionPage.deleteSucced'))
        })
        .catch(() => {})
    },
  },
}
</script>

<style scoped>
.role-permission {
  padding: 20px;
}

.el-table {
  margin-top: 30px;
}
</style>
