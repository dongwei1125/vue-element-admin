<template>
  <div
    v-loading.fullscreen.lock="loading"
    :element-loading-text="$t('pdfPage.generate')"
    class="article"
    v-html="article.content"
  />
</template>

<script>
export default {
  name: 'Download',
  data() {
    return {
      article: {},
      loading: true,
    }
  },
  mounted() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      import('./article.js').then(response => {
        const article = response.default

        document.title = article.title

        this.article = article

        this.printArticle()
      })
    },

    printArticle() {
      setTimeout(() => {
        this.loading = false

        this.$nextTick(() => {
          window.print()
        })
      }, 50)
    },
  },
}
</script>

<style lang="scss" scoped>
.article {
  color: #333;
  padding: 20px;
  margin: 0 auto;
  width: 740px;
  font-family: medium-content-serif-font, Georgia, Cambria, 'Times New Roman', Times, serif;
}

::v-deep {
  h1 {
    font-size: 32px;
    line-height: 48px;
    font-weight: 600;
    margin: 0;
    padding-bottom: 20px;
  }

  h2 {
    color: rgb(204, 204, 204);
    font-size: 16px;
    font-weight: normal;
    margin: 0;
    padding-bottom: 20px;
  }

  h3 {
    font-size: 34px;
    line-height: 1.15;
    letter-spacing: -0.015em;
    margin: 53px 0 0;
  }

  h4 {
    font-size: 26px;
    line-height: 1.15;
    letter-spacing: -0.015em;
    margin: 53px 0 0;
  }

  p {
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -0.003em;

    a {
      background-repeat: repeat-x;
      background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.84) 100%, transparent 0);
      background-size: 1px 1px;
      background-position: 0 calc(1em + 1px);
      padding: 0 6px;
    }
  }

  blockquote {
    font-style: italic;
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -0.003em;
    border-left: 3px solid rgba(0, 0, 0, 0.84);
    padding-left: 20px;
    margin-left: -23px;
    padding-bottom: 2px;
  }

  ul {
    margin: 1em 0 30px;
    padding-left: 40px;
  }

  li {
    list-style: initial;
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -0.003em;
    margin-left: 30px;
    margin-bottom: 14px;
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  code {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 3px 4px;
    margin: 0 2px;
    font-size: 16px;
    display: inline-block;
  }
}
</style>
