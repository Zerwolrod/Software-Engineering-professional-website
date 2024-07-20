<template>
    <div>
      <h1>教师队伍</h1>
      <el-menu>
        <el-submenu index="1">
          <template slot="title">教授</template>
          <el-menu-item index="1-1" @click="goToDetail('professor', 1)">张三</el-menu-item>
          <el-menu-item index="1-2" @click="goToDetail('professor', 2)">李四</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">副教授</template>
          <el-menu-item index="2-1" @click="goToDetail('associate_professor', 1)">王五</el-menu-item>
          <el-menu-item index="2-2" @click="goToDetail('associate_professor', 2)">赵六</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Teacher',
    methods: {
      goToDetail(position, id) {
        this.$router.push(`/teacher/${position}/${id}`)
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  