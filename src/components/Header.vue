<template lang="pug">
  transition(
    enter-active-class="animate__animated animate__fadeInDown"
    appear
  )
    .flex.align-center.justify-center.py2
      img(src="@/assets/logo.svg")
      h1.my0.mx2
        slot
          | Fireboard
</template>
