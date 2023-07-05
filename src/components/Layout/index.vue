<template>
  <div class="w-full h-screen bg-gray-100 flex flex-col">
    <layout-header />
    <div class="grow flex">
      <layout-menu />
      <div class="grow p-4">
        <transition name="fade-slide" mode="out-in" appear>
          <router-view v-slot="{ Component }">
            <keep-alive :include="includeList" :max="10">
              <component :is="Component" :key="$route.name" />
            </keep-alive>
          </router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import useKeepaliveStore from '/src/store/keepalive.js'

const route = useRoute()
const { includeList } = toRefs(useKeepaliveStore())

watch(() => route.path, val => {
  if(route.meta.keepAlive && !includeList.value.includes(route.name)) {
    includeList.value.push(route.name)
    if(includeList.value.length > 10) includeList.value.shift()
  }
})
</script>

<style>
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>