<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<style>
.pointer {
  cursor: pointer;
}
</style>
