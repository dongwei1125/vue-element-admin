<template>
  <el-select
    v-model="user"
    :remote-method="remoteMethod"
    filterable
    default-first-option
    remote
    :placeholder="placeholder"
  >
    <el-option v-for="u in userList" :key="u.id" :label="u.name" :value="u.id" />
  </el-select>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      userList: [],
    }
  },
  computed: {
    user: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    remoteMethod(queryString) {
      setTimeout(() => {
        const userList = [
          {
            id: '5cb8779d-5a82-4832-a971-033a0f4513ca',
            name: 'Brian',
          },
          {
            id: '7d916fed-e0da-4834-84d3-65ef5260494f',
            name: 'Ronald',
          },
          {
            id: 'd4754d26-40d7-468b-afe7-ee27c4647eca',
            name: 'Jose',
          },
          {
            id: 'd4c3fc77-1073-4cf3-b0b1-a5cdd4928135',
            name: 'Jeffrey',
          },
          {
            id: '044081a0-d435-4f18-84c0-f688bfaf4685',
            name: 'John',
          },
          {
            id: '98de4225-e84f-4063-990a-180d15df4b20',
            name: 'Joseph',
          },
          {
            id: 'd68e72e1-56cb-48a7-a92a-d81b878d75f4',
            name: 'Michelle',
          },
          {
            id: '30bed7df-9305-464d-a413-f8a509c5dad1',
            name: 'Jessica',
          },
          {
            id: '22f8e94b-cf12-4c08-bf63-21f13572daca',
            name: 'Richard',
          },
        ]

        this.userList = userList.filter(user => user.name.includes(queryString))
      }, 50)
    },
  },
}
</script>
