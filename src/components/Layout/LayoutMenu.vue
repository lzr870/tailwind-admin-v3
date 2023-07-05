<template>
  <div class="srhink-0 w-60 bg-white border-r">
    <n-menu
      v-model:value="$route.meta.name"
      :options="menuOptions"
    />
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router"
import { renderMark } from '/src/until/render.js'
import { h } from "vue";

const route = useRoute()

const menuOptions = [
  {
    label: () => h(RouterLink, {to: '/'}, { default: () => '工作台'}), 
    key: 'Home', 
    icon: renderMark(), 
    children: null
  },
  {
    label: "数据中心",
    key: "data",
    icon: renderMark(), 
    children: [
      { label: () => h(RouterLink, {to: '/data/report'}, { default: () => '报告记录'}),  key: 'DataReport'},
      { label: () => h(RouterLink, {to: '/data/doctor-date'}, { default: () => '医生日统计'}), key: 'DataDoctorDate'},
      { label: () => h(RouterLink, {to: '/data/doctor-month'}, { default: () => '医生月统计'}), key: 'DataDoctorMonth'},
      { label: () => h(RouterLink, {to: '/data/ke-date'}, { default: () => '科室日统计'}), key: 'DataKeDate'},
      { label: () => h(RouterLink, {to: '/data/ke-month'}, { default: () => '科室月统计'}), key: 'DataKeMonth'},
      { label: () => h(RouterLink, {to: '/data/hospital-date'}, { default: () => '全院日统计'}), key: 'DataHospitalDate'},
      { label: () => h(RouterLink, {to: '/data/hospital-month'}, { default: () => '全院月统计'}), key: 'DataHospitalMonth'}
    ]
  },
  {
    label: "医院管理",
    key: "management",
    icon: renderMark(), 
    children: [
      { label: () => h(RouterLink, {to: '/management/ke'}, { default: () => '科室管理'}),  key: 'ManagementKe'},
      { label: () => h(RouterLink, {to: '/management/doctor'}, { default: () => '医生管理'}),  key: 'ManagementDoctor'},
    ]
  },
  {
    label: () => h(RouterLink, {to: '/feedback'}, { default: () => '意见反馈'}), 
    key: 'Feedback', 
    icon: renderMark(), 
    children: null
  },
  {
    label: () => h(RouterLink, {to: '/user'}, { default: () => '用户信息'}), 
    key: 'User', 
    icon: renderMark(), 
    children: null
  },
]
</script>

<style>
.side-menu:not(.n-menu--collapsed) > .n-menu-item-content::before {
  left: 21px;
  right: 15px;
}

.side-menu:not(.n-menu--collapsed) > .n-menu-item-content.n-menu-item-content--selected::before, .side-menu:not(.n-menu--collapsed) .n-menu-item-content:hover::before {
  border-left: 4px solid #455333;
}
</style>