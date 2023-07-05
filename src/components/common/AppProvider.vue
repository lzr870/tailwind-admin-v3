<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <div class="text-gray-900">
              <slot></slot>
            </div>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui'
const themeOverrides = {
  common: {
    primaryColor: '#0064C8',
    primaryColorHover: '#3793DE',
    primaryColorPressed: '#004DAC',
    primaryColorSuppl: '#3793DE',

    infoColor: "#0064C8",
    infoColorHover: "#3793DE",
    infoColorPressed: "#004DAC",
    infoColorSuppl: "#3793DE",

    successColor: "#18A058FF",
    successColorHover: "#36AD6AFF",
    successColorPressed: "#0C7A43FF",
    successColorSuppl: "#36AD6AFF",

    warningColor: "#F0A020FF",
    warningColorHover: "#FCB040FF",
    warningColorPressed: "#C97C10FF",
    warningColorSuppl: "#FCB040FF",

    errorColor: "#D03050FF",
    errorColorHover: "#DE576DFF",
    errorColorPressed: "#AB1F3FFF",
    errorColorSuppl: "#DE576DFF"
    
  },
  Tree: {
    fontSize: '14px',
    nodeTextColor: '#606266'
  }
}
</script>
