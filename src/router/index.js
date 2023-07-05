import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes= [
  {
    path: '/',
    redirect: '/main'
  },
  /** ----- 登录页 ----- **/
  {
    path: '/login',
    name: 'Login',
    component:() => import('../views/login/index.vue'),
    meta: { name: 'Login' }
  },

  /** ----- 后台内容 ----- **/
  {
    path: '/main',
    component:() => import('../components/Layout/index.vue'),
    redirect: '/home',
    children: [
      /** ----- 首页 ----- **/
      {
        path: '/home',
        name: 'Home',
        component:() => import('../views/home/index.vue'),
        meta: { name: 'Home' }
      },
      /** ----- 数据中心 - 报告记录 ----- **/
      {
        path: '/data/report',
        name: 'DataReport',
        component:() => import('../views/data/report/index.vue'),
        meta: { name: 'DataReport' }
      },
      /** ----- 数据中心 - 报告记录 - 详情 ----- **/
      {
        path: '/data/report/detail/:id',
        name: 'DataReportDetail',
        component:() => import('../views/data/report/detail.vue'),
        meta: { name: 'DataReport' }
      },
      /** ----- 数据中心 - 医生日统计 ----- **/
      {
        path: '/data/doctor-date',
        name: 'DataDoctorDate',
        component:() => import('../views/data/doctor/date.vue'),
        meta: { name: 'DataDoctorDate' }
      },
      /** ----- 数据中心 - 医生月统计 ----- **/
      {
        path: '/data/doctor-month',
        name: 'DataDoctorMonth',
        component:() => import('../views/data/doctor/month.vue'),
        meta: { name: 'DataDoctorMonth' }
      },
      /** ----- 数据中心 - 科室日统计 ----- **/
      {
        path: '/data/ke-date',
        name: 'DataKeDate',
        component:() => import('../views/data/ke/date.vue'),
        meta: { name: 'DataKeDate' }
      },
      /** ----- 数据中心 - 科室月统计 ----- **/
      {
        path: '/data/ke-month',
        name: 'DataKeMonth',
        component:() => import('../views/data/ke/month.vue'),
        meta: { name: 'DataKeMonth' }
      },
      /** ----- 数据中心 - 医院日统计 ----- **/
      {
        path: '/data/hospital-date',
        name: 'DataHospitalDate',
        component:() => import('../views/data/hospital/date.vue'),
        meta: { name: 'DataHospitalDate' }
      },
      /** ----- 数据中心 - 医院月统计 ----- **/
      {
        path: '/data/hospital-month',
        name: 'DataHospitalMonth',
        component:() => import('../views/data/hospital/month.vue'),
        meta: { name: 'DataHospitalMonth' }
      },
      /** ----- 医院管理 - 科室管理 ----- **/
      {
        path: '/management/ke',
        name: 'ManagementKe',
        component:() => import('../views/management/ke/index.vue'),
        meta: { name: 'ManagementKe' }
      },
      /** ----- 医院管理 - 医生管理 ----- **/
      {
        path: '/management/doctor',
        name: 'ManagementDoctor',
        component:() => import('../views/management/doctor/index.vue'),
        meta: { name: 'ManagementDoctor' }
      },
      /** ----- 医院管理 - 医生管理 - 添加 ----- **/
      {
        path: '/management/doctor/add',
        name: 'ManagementDoctorAdd',
        component:() => import('../views/management/doctor/add.vue'),
        meta: { name: 'ManagementDoctor' }
      },
      /** ----- 医院管理 - 医生管理 - 编辑 ----- **/
      {
        path: '/management/doctor/edit/:id',
        name: 'ManagementDoctorEdit',
        component:() => import('../views/management/doctor/edit.vue'),
        meta: { name: 'ManagementDoctor' }
      },
      /** ----- 意见反馈 ----- **/
      {
        path: '/feedback',
        name: 'Feedback',
        component:() => import('../views/feedback/index.vue'),
        meta: { name: 'Feedback' }
      },
      /** ----- 意见反馈 - 添加 ----- **/
      {
        path: '/feedbackAdd',
        name: 'FeedbackAdd',
        component:() => import('../views/feedback/add.vue'),
        meta: { name: 'Feedback' }
      },
      /** ----- 意见反馈 - 详情 ----- **/
      {
        path: '/feedback/detail/:id',
        name: 'FeedbackDetail',
        component:() => import('../views/feedback/detail.vue'),
        meta: { name: 'Feedback' }
      },
      /** ----- 用户信息 ----- **/
      {
        path: '/user',
        name: 'User',
        component:() => import('../views/user/index.vue'),
        meta: { name: 'User' }
      },
    ]
  },
  /** -------404------- **/
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component:() => import('../views/404/index.vue'),
    meta: { name: 'NotFound' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done() // 进度条结束
})
export default router