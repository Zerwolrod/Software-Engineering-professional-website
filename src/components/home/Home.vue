<template>
<!--  🐱： Home由轮播头图 + 新闻动态 + 通知三个部分组成-->
  <div class="home">
    <div class="hero">
      <!--  🐱： 轮播用了el-carousel组件-->
      <el-carousel :interval="2000" arrow="always" height="500px" >
        <el-carousel-item v-for="image in images" :key="image">
          <img :src="image" alt="轮播图片" class="carousel-image">
        </el-carousel-item>
      </el-carousel>
    </div>

    <h1 class="news-header">新闻动态</h1>
    <div class="container">
      <div class="image-container">
        <img :src="imageSrc" alt="新闻图片" />
      </div>
      <div class="news-container">
        <div class="feature-card" v-for="(news, index) in newsList" :key="index">
          <div class="card">
            <h2>{{ news.title }}</h2>
            <p>{{ news.content }}</p>
            <p class="date">{{ news.date }}</p> <!-- Display date here -->
          </div>
        </div>
      </div>
    </div>

    <h1 class="news-header">通知公告</h1>
    <div class="container">
      <div class="notes-container">
        <div class="feature-noteCard" v-for="(notes, index) in noteList" :key="index">
          <div class="noteCard" >
            <h2>{{ notes.title }}</h2>
            <p class="date">{{ notes.date }}</p> <!-- Display date here -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent,   } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      images: [
       // 可以在这里切换选择的图片，目前能选择1-13.jpg
        'https://s2.loli.net/2024/07/20/37HkycrAKebVtDB.png',
        'https://s2.loli.net/2024/07/20/q3I2An6k1gasmDi.jpg',
        'https://s2.loli.net/2024/07/20/hpXZSFVI4ReQH8Y.webp'
      ],
      imageSrc:('https://s2.loli.net/2024/07/20/sibBL27oSdZr3Kg.jpg'),
      newsList: [
        {
          title: '东北林业大学计算机学院多项成果入选国际操作系统设计与实现大会O SDI 2024',
          content: '日前，第18届国际操作系统设计与实现大会OSDI公布本年度文章录用情况，东北林业大学计算机与控制工程学院作为第一作者单位共有3篇论文被录用，均来自软件工程3班团队。',
          date: '2024-07-01'
        },
        {
          title: '“计”往开来，共赴前程——计算机学院举行2024年毕业典礼',
          content: '7月2日上午，东北林业大学计算机与控制工程学院2024年毕业典礼暨学位授予仪式在英杰交流中心阳光厅举行。计算机学院院长胡振江，院党委书记熊校良，联培导师刁兴春出席典礼。',
          date: '2024-07-01'
        },
        {
          title: '“计”往开来，共赴前程——计算机学院举行2024年毕业典礼',
          content: '7月2日上午，东北林业大学计算机与控制工程学院2024年毕业典礼暨学位授予仪式在英杰交流中心阳光厅举行。计算机学院院长胡振江，院党委书记熊校良，联培导师刁兴春出席典礼。',
          date: '2024-07-01'
        },
        {
          title: '“计”往开来，共赴前程——计算机学院举行2024年毕业典礼',
          content: '7月2日上午，东北林业大学计算机与控制工程学院2024年毕业典礼暨学位授予仪式在英杰交流中心阳光厅举行。计算机学院院长胡振江，院党委书记熊校良，联培导师刁兴春出席典礼。',
          date: '2024-07-01'
        },
        {
          title: '“计”往开来，共赴前程——计算机学院举行2024年毕业典礼',
          content: '7月2日上午，东北林业大学计算机与控制工程学院2024年毕业典礼暨学位授予仪式在英杰交流中心阳光厅举行。计算机学院院长胡振江，院党委书记熊校良，联培导师刁兴春出席典礼。',
          date: '2024-07-01'
        },
      ],
      noteList: [
        {
          title: '关于申请2024年度"CCF优秀大学生启航计划"的通知',
          date: '2024-07-01'
        },
        {
          title: '计算机学院办公室2024年暑假值班安排',
          date: '2024-07-01'
        },
        {
          title: '2024年计算机学院优秀大学生夏令营优秀营员名单',
          date: '2024-07-01'
        },
        {
          title: '2024-2025学年秋季学期研究生选课通知',
          date: '2024-07-01'
        },
        {
          title: '计算机学院举行2024年毕业典礼的通知',
          date: '2024-07-01'
        },
      ],
    };
  }
});
</script>

<style scoped>
.home {
  text-align: center;
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
}

.hero {
  background-color: #ffffff;
  padding: 0;
  height: 520px;
  margin: 0;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-header {
  font-size: 2rem;
  font-family: '微软雅黑 ', serif;
  color: #333;
  margin: 1rem 0;
}

.news-container {
  display: flex;
  align-items: flex-start;
}


.notes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container {
   display: flex;
   justify-content: center;
   align-items: flex-start;
   margin: 20px;
 }

.image-container {
  flex: 1;
  padding: 20px;
}

.image-container img {
  max-width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.news-container {
  flex: 2;
  padding: 20px;
}

.feature-card {
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s,background-color 0.3s;   ;
  height: 330px;

}


.feature-card:hover {
  transform: translateY(-10px);
  background-color: #092044;
}

.feature-card:hover .card h2,
.feature-card:hover .card p {
  color: white;
}

.card {
  padding: 2rem;
}

.card h2 {
  font-size: 0.8rem;
  color: #092044;
  margin-bottom: 1rem;

}

.card p {
  font-size: 0.7rem;
  color: #666;
  line-height: 1.5;
}


 .feature-noteCard {
   margin-bottom: 20px;
   background-color: #ffffff;
   border-radius: 0;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s,background-color 0.3s;   ;
   height: 130px;
   padding: 20px;
   width: 200px;

 }


.feature-noteCard:hover {
  transform: translateY(-10px);
  background-color: #092044;
}

.feature-noteCard:hover .noteCard h2,
.feature-noteCard:hover .noteCard p {
  color: white;
}

.noteCard {
  padding: 2rem;

}

.noteCard h2 {
  font-size: 0.8rem;
  color: #092044;
  margin-bottom: 1rem;
}

.noteCard .date {
  font-size: 0.7rem;
  color: #888;
  margin-top: 0.5rem;
}


</style>
