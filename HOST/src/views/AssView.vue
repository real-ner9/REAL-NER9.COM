<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  import('dikApp/DikCounter').then(({ default: DikCounter }) => {
    const React = window.React
    const ReactDOM = window.ReactDOM
    const root = document.getElementById('react-slot')
    ReactDOM.render(React.createElement(DikCounter), root)
  })
})
</script>

<template>
  <div id="react-slot"></div>
</template>
