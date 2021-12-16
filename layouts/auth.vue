<template>
  <div class="flex">
    <div
      class="
        flex flex-col
        w-4/12
        items-center
        justify-center
        max-h-screen
        bg-gray-100
      "
    >
      <img class="w-40 mb-12" src="@/assets/img/seaportslogo.png" />
      <nuxt />
    </div>
    <div class="max-h-screen w-8/12">
      <img
        class="w-full max-h-screen min-h-screen mb-12 object-cover"
        src="@/assets/img/cover.jpg"
      />
    </div>
  </div>
</template>
