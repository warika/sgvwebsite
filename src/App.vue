<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
.pointer {
  cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
