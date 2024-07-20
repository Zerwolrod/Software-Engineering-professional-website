<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/">主页</router-link></el-menu-item>
      <el-submenu index="2">
        <template #title>专业介绍</template>
        <el-menu-item index="2-1"><router-link to="/major">专业简介</router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="/major/direction">方向简介</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>实验室</template>
        <el-menu-item index="3-1"><router-link to="/lab/923">923创新实验室</router-link></el-menu-item>
        <el-menu-item index="3-2"><router-link to="/lab/925">925移动开发实验室</router-link></el-menu-item>
      </el-submenu>
      <el-menu-item index="4"><router-link to="/teacher">教师队伍</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/news">新闻</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="/announcements">公告</router-link></el-menu-item>
    </el-menu>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
  </script>
  
  <style>
  .el-menu-demo {
    background-color: #545c64;
    color: #fff;
  }
  .el-menu-demo .el-menu-item {
    color: #fff;
  }
  </style>
  