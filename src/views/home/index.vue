<template>
  <n-card 
    class="h-full" 
    header-style="padding: 0 2rem"
    content-style="padding: 5rem 2rem"
  >
    <template #header>
      <div class="h-[4.33rem] border-b f-c">
        <p class="text-lg text-gray-500 font-normal">工作台</p>
      </div>
    </template>
    <template #default>
      <div class="space-y-20">
        <!-- 今日数据 -->
        <div class="space-y-8">
          <div class="f-e space-x-2.5">
            <h2 class="text-2xl font-bold">今日数据</h2>
            <p>（更新时间2023/06/09   15:30:30）</p>
          </div>
          <div class="flex space-x-8">
            <div 
              v-for="i in 4" :key="i" class="w-[21.5rem] h-[10.83rem] rounded-lg bg-blue-100"
            >

            </div>
          </div>
        </div>
        <!-- 本月数据 -->
        <div class="space-y-8">

        </div>
      </div>
    </template>
  </n-card>
</template>