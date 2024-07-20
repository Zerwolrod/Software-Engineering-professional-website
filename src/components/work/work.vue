<template>
  <div class="work-guide">


    <section id="introduction" class="section">
      <h2>简介</h2>
      <p>软件工程是一门涉及软件系统设计、开发、测试和维护的综合性学科。本指南旨在为即将步入职场或正在寻找职业发展机会的软件工程师提供指导和建议。</p>
    </section>

    <section id="preparation" class="section">
      <h2>就业准备</h2>
      <p>学习关键技能：掌握必要的编程语言、算法和数据结构。</p>
      <p>积累项目经验：参与开源项目或个人项目，展示自己的实际能力。</p>
      <p>建立专业网络：参加行业会议、工作坊或社交媒体上的技术讨论。</p>
      <p>了解市场需求：跟踪行业动态，了解各种岗位的需求和技能要求。</p>
    </section>

    <section id="resume" class="section">
      <h2>简历和求职信</h2>
      <p>简历内容：突出关键技能和项目经验，精简并清晰地展示教育背景和工作经历。</p>
      <p>求职信写作：个性化每封求职信，突出与职位相关的技能和兴趣，表达对公司的热情和了解。</p>
    </section>

    <section id="interview" class="section">
      <h2>面试技巧</h2>
      <p>准备面试：研究公司和职位，准备回答关于项目经验、技术挑战和团队合作的问题。</p>
      <p>展示技能：通过实际案例和项目展示你的技术能力。</p>
      <p>处理压力：准备好应对紧张情绪，自信地表达自己的观点和经验。</p>
    </section>

    <section id="career" class="section">
      <h2>职业发展</h2>
      <!-- 注意：这一部分的内容与面试技巧部分重复，假设这是错误复制的，应更新为职业发展相关内容 -->
      <p>设定职业目标：明确自己的长期和短期职业目标，制定实现目标的计划和策略。</p>
      <p>持续学习：跟踪最新的技术发展，通过在线课程、研讨会和认证来提升自己的技能。</p>
      <p>建立个人品牌：在专业社区中分享知识，建立自己的专业形象和声誉。</p>
      <p>网络扩展：与行业内的专业人士建立联系，寻找导师和职业发展机会。</p>
    </section>


  </div>
</template>

<script>
export default {
  name: 'WorkGuide'
};
</script>

<style scoped>
/* 基础样式 */
body {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  background-color: #f4f4f4;
}

.work-guide {
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.navbar ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.navbar li {
  margin-right: 20px;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  transition: background-color 0.3s;
}

.navbar a:hover {
  background-color: #fff;
  color: #092044;
}

.section {
  margin-bottom: 60px;
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
}

.section h2 {
  margin-bottom: 20px;
  color: #092044;
}

.section p {
  margin-bottom: 20px;
  text-align: justify;
}

@media (max-width: 400px) {
  .work-guide {
    padding: 10px;
    width: auto;
  }

  .navbar {
    padding: 5px 0;
  }

  .navbar ul {
    flex-direction: column;
  }

  .navbar li {
    margin: 5px 0;
  }

  .section {
    margin-bottom: 30px;
  }
}
</style>
