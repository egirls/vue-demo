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
import { mapGetters } from 'vuex'
import jwtDecode from 'jwt-decode'

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
  computed: {
    ...mapGetters([
      'userRole'
    ])
  },
  methods: {
    onSubmit () {
      const userName = this.form.name
      const userPassword = this.form.password

      if (userName.length === 0 || userPassword.length === 0) {
        console.log('用户名或密码为空')
      } else if (this.userRole === '管理员') {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo'

        const message = jwtDecode(token)

        localStorage.setItem('message', message)
        localStorage.token = token

        this.$router.push('/')
      }
    }
  }
}

</script>
<style>
.el-form {
  margin-top: 5%;
}

</style>
