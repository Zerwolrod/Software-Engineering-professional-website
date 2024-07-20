<template>
    <div>
      <h1>教师详情</h1>
      <div>
        <h2>{{ teacher.name }}</h2>
        <p>{{ teacher.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TeacherDetail',
    data() {
      return {
        teacher: {
          name: '教师姓名',
          description: '教师详细描述'
        }
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  