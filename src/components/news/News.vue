<template>
    <div>
      <h1>新闻</h1>
      <el-table :data="newsList">
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="viewDetail(scope.row.id)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>

  <script>
  export default {
    name: 'News',
    data() {
      return {
        newsList: [
          { id: 1, title: '新闻1', date: '2024-07-01' },
          { id: 2, title: '新闻2', date: '2024-07-02' },
          // 从数据库中获取的更多新闻
        ]
      }
    },
    methods: {
      viewDetail(id) {
        this.$router.push(`/news/${id}`)
      }
    }
  }
  </script>

  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
