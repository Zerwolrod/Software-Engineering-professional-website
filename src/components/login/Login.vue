<template>

  <div class="container">
    <div class="login-container">
      <h2>登录</h2>
      <form @submit.prevent="login" @keydown="form.errors.clear()">
        <div>
          <label for="username">用户名:</label>
          <input id="username" type="text" v-model="username" @blur="validateUsername">
          <span v-if="form.errors.has('username')" class="error">{{ form.errors.get('username') }}</span>
        </div>
        <div>
          <label for="password">密码:</label>
          <input id="password" type="password" v-model="password" @blur="validatePassword">
          <span v-if="form.errors.has('password')" class="error">{{ form.errors.get('password') }}</span>
        </div>
        <div>
          <button type="submit" :disabled="loginDisabled">登录</button>
          <p v-if="loginMessage">{{ loginMessage }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Form, Errors } from 'vform';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      form: new Form({
        username: '',
        password: '',
      }),
      loginMessage: '',
      loginDisabled: false,
    };
  },
  methods: {
    login() {
      this.loginDisabled = true;
      this.loginMessage = '';

      if (this.username === 'admin' && this.password === 'admin') {
        // 登录成功，跳转到编辑界面
        localStorage.setItem('isLoggedIn', true); // 在本地存储中标记用户已登录
        this.$router.push('/editor');
      } else {
        this.loginMessage = '用户名或密码错误';
        this.loginDisabled = false;
      }
    }
    ,
    validateUsername() {
      if (!this.username) {
        this.form.errors.set('username', '用户名不能为空');
      } else {
        this.form.errors.clear('username');
      }
    },
    validatePassword() {
      if (!this.password) {
        this.form.errors.set('password', '密码不能为空');
      } else {
        this.form.errors.clear('password');
      }
    }
  }
}
</script>

<style scoped>
.container{
  height: 600px;
  width: 100%;
  background-image: url('https://s2.loli.net/2024/07/20/KcF27kAleZpyY9u.webp'); /* 根据你的实际文件路径进行调整 */
  background-size: cover;
  background-position: center; /* 调整背景图片的位置 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  opacity: 0.9;
  width: 15%;
  max-width: 300px;
  margin: 100px auto;
  padding: 60px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #092044;
  color: white;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 0.8em;
}

p {
  color: #092044;
  font-size: 0.8em;
}
</style>