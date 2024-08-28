<template>
  <div class="activity">
    <div v-for="(item, index) in tableData" :key="index" class="activity-item">
      <div class="activity-item-header">
        <img :src="item.avatar" alt="" />
        <div class="username">{{ item.name }}</div>
        <div class="description">{{ item.description }}</div>
      </div>

      <div class="activity-item-content">
        <div v-if="item.content" class="content">{{ item.content }}</div>

        <template v-if="item.images.length">
          <el-carousel :interval="6000" type="card" height="220px">
            <el-carousel-item v-for="(src, i) in item.images" :key="i">
              <img :src="src" />
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>

      <div class="activity-item-action">
        <div class="button">
          <i class="el-icon-share" />
          <span>{{ $t('profile.share') }}</span>
        </div>

        <div class="button">
          <i class="el-icon-star-on" />
          <span>{{ $t('profile.like') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity',
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      setTimeout(() => {
        const tableData = [
          {
            name: 'Iron Man',
            avatar:
              'https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg?imageView2/1/w/80/h/80',
            description: 'Shared publicly - 7:30 PM today',
            content:
              'Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans.',
            images: [],
          },
          {
            name: 'Captain American',
            avatar:
              'https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg?imageView2/1/w/80/h/80',
            description: 'Sent you a message - yesterday',
            content:
              'Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans.',
            images: [],
          },
          {
            name: 'Spider Man',
            avatar:
              'https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg?imageView2/1/w/80/h/80',
            description: 'Posted 4 photos - 2 days ago',
            content:
              'Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans.',
            images: [
              'https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg?imageView2/2/h/440',
              'https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg?imageView2/2/h/440',
              'https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg?imageView2/2/h/440',
              'https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg?imageView2/2/h/440',
            ],
          },
        ]

        this.tableData = tableData
      }, 50)
    },
  },
}
</script>

<style lang="scss" scoped>
.activity-item {
  padding-bottom: 15px;
  border-bottom: 1px solid #d2d6de;

  + .activity-item {
    margin-top: 15px;
  }
}

.activity-item-header {
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    float: left;
  }

  .username {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    padding: 2px 0;
    margin-left: 50px;
  }

  .description {
    color: #666;
    font-size: 12px;
    font-weight: 500;
    margin-left: 50px;
    padding: 2px 0;
  }
}

.activity-item-content {
  color: #666;
  font-size: 14px;
  margin: 15px 0;

  .content + .el-carousel {
    margin-top: 15px;
  }
}

.activity-item-action {
  .button {
    color: #666;
    font-size: 13px;
    height: 15px;
    line-height: 15px;
    display: inline-block;
    cursor: pointer;

    &:hover {
      color: #999;
    }

    + .button {
      margin-left: 10px;
    }

    i {
      margin-right: 4px;
    }

    .el-icon-star-on {
      font-size: 15px;
    }
  }
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
