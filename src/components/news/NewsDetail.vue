<template>
    <div>
      <h1>新闻详情</h1>
      <div>
        <h2>{{ news.title }}</h2>
        <p>{{ news.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewsDetail',
    data() {
      return {
        news: {
          title: '新闻标题',
          content: '新闻详细内容'
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
  