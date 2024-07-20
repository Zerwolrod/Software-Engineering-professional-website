<template>
    <div v-if="isAuthenticated">
      <h1>后台管理系统</h1>
      <el-button @click="addNews">添加新闻</el-button>
      <el-table :data="newsList">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="editNews(scope.row.id)">编辑</el-button>
            <el-button @click="deleteNews(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-else>
      <el-form @submit.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Admin',
    data() {
      return {
        isAuthenticated: false,
        username: '',
        password: '',
        newsList: [
          // 从数据库中获取的新闻列表
        ]
      }
    },
    methods: {
      login() {
        if (this.username === 'admin' && this.password === 'admin') {
          this.isAuthenticated = true
        } else {
          this.$message.error('用户名或密码错误')
        }
      },
      addNews() {
        // 添加新闻逻辑
      },
      editNews(id) {
        // 编辑新闻逻辑
      },
      deleteNews(id) {
        // 删除新闻逻辑
      }
    }
  }
  </script>
  