import { defineStore } from 'pinia'

export default defineStore('keepalive', () => {
  const includeList = ref([])
  return {
    includeList
  }
},{
  persist: true       // 支持持久化
})