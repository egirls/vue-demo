<template>
  <div>
    <el-form ref="form" :model="form" label-width="40px" :span="8" :xs="10" :sm="10" :md="6" :lg="6" :xl="6" :offset="2">
      <el-col>
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  props: {},
  methods: {
    onSubmit () {
      console.log('submit')
    }
  }
}

</script>
<style>
.el-form {
  margin-top: 5%;
}
</style>
