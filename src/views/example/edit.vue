<template>
  <div class="article-edit">
    <article-form ref="form" />
  </div>
</template>

<script>
import ArticleForm from './components/ArticleForm.vue'

export default {
  name: 'ArticleEdit',
  components: { ArticleForm },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      setTimeout(() => {
        const detail = {
          id: '5cb8779d-5a82-4832-a971-033a0f4513ca',
          status: 'published',
          commentOpened: true,
          platform: ['a', 'b'],
          url: '',
          title: 'Mjlvegh Erditenbh Osvxfwiadl Delxhds Saw Pthghtxg Yfrhenryu Dthy',
          author: 'Brian',
          publishTime: '1991/03/31 12:03:00',
          importance: 2,
          summary: 'Mjlvegh Erditenbh',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          imageUrl: 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
        }

        this.$refs.form?.init(detail)
      }, 50)
    },
  },
}
</script>
