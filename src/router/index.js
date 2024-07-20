import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/home/Home.vue';
import Major from '../components/major/Major.vue';
import Lab from '../components/lab/Lab.vue';
import Teacher from '../components/teacher/Teacher.vue';
import News from '../components/news/News.vue';
import Announcements from '../components/announcements/Announcements.vue';
import TeacherDetail from '../components/teacher/TeacherDetail.vue';
import NewsDetail from '../components/news/NewsDetail.vue';
import Work from '../components/work/work.vue';
import Editor from '../components/editor/Editor.vue';
import Login from '../components/login/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/major', component: Major },
  { path: '/lab', component: Lab },
  { path: '/teacher', component: Teacher },
  { path: '/news', component: News },
  { path: '/announcements', component: Announcements },
  { path: '/teacher/:id', component: TeacherDetail },
  { path: '/work', component: Work },
  { path: '/news/:id', component: NewsDetail },
  { path: '/editor', component: Editor, meta: { requiresAuth: true } }, // 添加需要登录验证的路由
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 添加全局导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // 如果需要登录验证
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // 从本地存储中获取登录状态
    if (isLoggedIn) {
      next(); // 已登录，继续导航
    } else {
      next('/login'); // 未登录，重定向到登录页面
    }
  } else {
    next(); // 不需要登录验证的页面，直接导航
  }
});

export default router;
