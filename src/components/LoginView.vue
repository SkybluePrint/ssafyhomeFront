<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../services/auth'
import '../assets/css/LoginView.css'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleSubmit = async (event) => {
  event.preventDefault()
  try {
    event.preventDefault();
    await login(username.value, password.value)
    alert('로그인 성공')
    router.push('/')
  } catch (e) {
    console.error('로그인 에러:', e)
    alert('로그인 실패')
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <form class="login-form" @submit.prevent="handleSubmit">
          <h1 class="login-title">로그인</h1>
          <p class="login-subtitle">계정 정보를 입력하세요</p>

          <div class="form-group">
            <label class="form-label" for="username">아이디</label>
            <input
              id="username"
              v-model="username"
              type="text"
              required
              placeholder="name.@example.com"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="password">비밀번호</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              placeholder="비밀번호를 입력하세요"
              class="form-input"
            />
          </div>

          <button type="submit" class="login-button">로그인</button>

          <div class="divider"><span>또는</span></div>

          <div class="social-buttons">
            <button type="button" class="social-button">
              <font-awesome-icon :icon="['fab', 'apple'] " class="h-5 w-5 mr-2" /></button>
            <button type="button" class="social-button"><font-awesome-icon :icon="['fab', 'google']" class="h-5 w-5 mr-2" /></button>
            <button type="button" class="social-button"><font-awesome-icon :icon="['fab', 'github']" class="h-5 w-5 mr-2" /> </button>
          </div>

          <p class="signup-text">
            아직 회원이 아니신가요?
            <router-link to="/signup" class="signup-link">회원가입</router-link>
          </p>

          <p class="terms-text">
            로그인 시 <a href="#" class="terms-link">이용약관</a> 및 <a href="#" class="terms-link">개인정보처리방침</a>에 동의하게 됩니다.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
