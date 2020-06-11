<template>
  <transition appear enter-active-class="animate__animated animate__fadeInDown">
  <div class="flex align-center justify-center py2">
    <img src="../assets/logo.svg" />
    <h1 class="my0 mx2">
      <slot>Dashboard</slot>
    </h1>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'Header',
}
</script>
