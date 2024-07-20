<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="container">
          <div class="logo">
            <div class="logo">
              <router-link to="/">
                <img src="https://ccec.nefu.edu.cn/images/logodouble.png" alt="计算机与控制工程学院">
              </router-link>
            </div>
          </div>
          <ul class="nav-links">
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/major">介绍</router-link></li>
            <li><router-link to="/lab">实验室</router-link></li>
            <li><router-link to="/teacher">教师队伍</router-link></li>
            <li><router-link to="/work">就业指南</router-link></li>
            <li><router-link to="/news">新闻</router-link></li>
            <li><router-link to="/announcements">公告</router-link></li>
            <li><router-link to="/login">编辑</router-link></li>
            <li v-if="isLoggedIn"><router-link to="/editor">编辑</router-link></li>
          </ul>
        </div>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <div class="container">
        <p>地址：黑龙江省哈尔滨市香坊区东北林业大学 | 邮编 150040</p>
        <p>&copy; 版权所有 2024 东北林业大学计算机与控制工程学院</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>

html {
  margin: 0;
}


body {
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
  height: 100%;
  width: 100% ;
  padding:0;
}


#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 0;
}



header {
  background-color: #092044;
  padding: 0 0 0 0;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
}


.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;

  gap: 1rem;
  padding: 0rem 0rem 0rem 0rem;
  margin: 0;
  justify-content: space-around;
}

.nav-links li {
  flex-shrink: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.nav-links li a {
  font-family: "Microsoft YaHei", Arial, sans-serif;
  font-size: 1.1rem;
}

.nav-links a:hover {
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 5px;
}


main {
  flex: 1;
  padding: 0 0 0 0;
  margin: 0;
  background-color: #ffffff;
  width: 100%;
}

footer {
  background-color: #092044;
  padding: 0.6rem 0;
  color: white;
  text-align: center;
  width: 100%; /* 确保宽度为 100% */
  margin: 0; /* 移除外边距 */
}

.container {
  width: 85%;
  margin: 0 auto;
}
</style>
