<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-col :span="11">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
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
  methods: {}
}

</script>

<style>
    .el-form {
        margin-top: 5%;
    }
</style>
