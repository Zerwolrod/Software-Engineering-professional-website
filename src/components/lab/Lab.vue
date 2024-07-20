<template>
  <div class="lab-container">
    <el-menu @select="handleMenuSelect" style="width: 200px;">
      <el-submenu index="1">
        <template slot="title">实验室列表</template>
        <el-menu-item index="1-1">923创新实验室</el-menu-item>
        <el-menu-item index="1-2">925移动开发实验室</el-menu-item>
        <el-menu-item index="2-1">923实验室</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="lab-content">
      <div class="lab-introduction">
        <div class="lab-image">
          <img :src="currentLab.image" alt="实验室图片">
        </div>
        <div class="lab-description">
          <h2>{{ currentLab.title }}</h2>
          <p>{{ currentLab.description }}</p>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lab',
  data() {
    return {
      labs: [
        {
          index: "1-1",
          title: "923创新实验室",
          description: "923创新实验室是一个专注于前沿技术研究和创新项目开发的实验室。我们致力于探索最新的软件开发方法，人工智能技术，以及大数据应用。",
          image: "https://s2.loli.net/2024/07/20/q3I2An6k1gasmDi.jpg"
        },
        {
          index: "1-2",
          title: "925移动开发实验室",
          description: "925移动开发实验室专注于移动应用开发，涵盖iOS和Android平台的开发技术和最佳实践。",
          image: "https://s2.loli.net/2024/07/20/q3I2An6k1gasmDi.jpg" // Replace with actual image URL
        },
        {
          index: "2-1",
          title: "923实验室",
          description: "923实验室致力于研究和开发各类软件和技术创新项目，探索未来科技的应用前景。",
          image: "https://s2.loli.net/2024/07/20/q3I2An6k1gasmDi.jpg" // Replace with actual image URL
        }
      ],
      currentLab: {}
    };
  },
  methods: {
    handleMenuSelect(index) {
      // Find the lab object that corresponds to the selected index
      this.currentLab = this.labs.find(lab => lab.index === index);
    }
  }
}
</script>

<style scoped>
.lab-container {
  display: flex;
  padding-top: 60px; /* adjust as needed */
}

.el-menu {
  margin-right: 20px;
}

.lab-content {

  flex: 1;
}

.lab-introduction {
  display: flex;
  flex-direction: column; /* Ensure vertical stacking */
  align-items: center; /* Center horizontally */
  height: 600px; /* adjust height as needed */
}

.lab-image {
  width: 100%; /* Occupy full width */
  max-height: 400px; /* Limit maximum height of image */
  text-align: center; /* Center image horizontally */
  margin-bottom: 20px; /* Space between image and description */
}

.lab-image img {
  max-width: 100%; /* Ensure image fits container width */
  max-height: 100%; /* Ensure image fits container height */
}

.lab-description {
  width: 100%; /* Occupy full width */
  padding: 0 20px;
}

@media (max-width: 768px) {
  .lab-container {
    flex-direction: column;
    align-items: center;
  }

  .lab-content {
    width: 100%;
  }

  .lab-image,
  .lab-description {
    width: 100%;
  }
}


</style>
