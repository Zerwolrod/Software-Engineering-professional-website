<template>
  <div class="major">
    <div class="major-list">
      <div class="major-item" v-for="major in majors" :key="major.id">
        <h2>{{ major.name }}</h2>
        <p>{{ major.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Major',
  data() {
    return {
      majors: [
        { id: 1, name: '专业简介', description: '软件工程是一门综合性学科，它专注于软件系统的设计、开发、测试和维护。课程内容通常包括编程语言、算法、数据结构、操作系统、数据库系统、网络和软件项目管理等。\n' +
              '\n' +
              '软件工程不仅涉及技术知识，还强调团队合作、沟通能力和项目管理技能。' },
        { id: 2, name: '方向简介', description: '毕业后，软件工程专业的学生可以在多个领域内工作，包括软件开发公司、金融机构、医疗保健、教育、政府和科研机构等。职业路径多样，可以成为软件开发者、系统分析师、数据库管理员、测试工程师、项目经理或IT顾问等。随着经验的积累，还有机会进入更高级的职位，如系统架构师或技术总监。'},

        { id: 3, name: '其他介绍', description:
              '软件工程是一门综合性学科，它专注于软件系统的设计、开发、测试和维护。软件工程不仅涉及技术知识，还强调团队合作、沟通能力和项目管理技能。软件工程的学习和实践是一个不断探索和创新的过程，它为解决现实世界问题提供了强有力的工具和方法。 ' }
      ]
    }
  }
}
</script>

<style scoped>
.major {
  text-align: center;
  width: 100%;
  background-image: url('https://s2.loli.net/2024/07/20/q3I2An6k1gasmDi.jpg'); /* 根据你的实际文件路径进行调整 */
  background-size: cover; /* 调整背景图片的尺寸，确保覆盖整个容器 */
  background-position: center; /* 调整背景图片的位置 */
  height: 100vh; /* 设置容器高度，可以根据需要调整 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.major-list {
  opacity: 0.9;
  width: 100%;
  height: 500px;
  display: flex;
  margin: 0;
  justify-content: space-around;
  padding: 0 0;
}

.major-item {
  width: 25%;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border-radius: 10px;
}


.major-item:hover {
  transform: translateY(-10px);
  background-color: #092044;
}

.major-item:hover h2,
.major-item:hover p{
  color: white;
}

.major h1 {
  font-size: 2rem;
  height: 50px;
  padding: 2rem 1rem 1rem 0;
}

.major-item h2 {
  font-size: 1.5rem;
  height: 0px;
}

.major-item p {
  font-size: 1rem;
  padding: 3rem;
  margin: 1.8rem;
  color: #545c64;
  text-align: left;

}
</style>