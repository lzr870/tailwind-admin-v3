<template>
  <header class="shrink-0 w-full h-16 shadow-md shadow-primary/10 px-8 f-c-b bg-white z-10">
    <div class="f-c space-x-2.5">
      <div class="shrink-0 w-[25px] h-8">
        <img :src="logoImg" alt="logo" width="25" height="32">
      </div>
      <h1 class="text-[1.33rem] font-bold">光达在线医用跨境医患服务系统</h1>
    </div>
    <div class="f-c">
      <p>
        <span>欢迎您～</span>
        <span class="text-primary">王院长</span>
      </p>
      <n-divider vertical />
      <n-button text type="primary">退出登录</n-button>
    </div>
  </header>
</template>

<script setup>
import logoImg from '/src/assets/images/logo.webp'
</script>