<template>
  <div>
    <div class="dark:bg-gray-600 py-4 px-8">
      <h1 class="text-lg"> Autonomous vessel properties </h1>

      <div class="flex">
        <div class="text-center w-4/12 rounded-md bg-gray-800 m-2">
          <p class="mt-4 mb-4  text-xl font-bold">Speed</p>
          <p class="mb-4 text-base uppercase">{{ `${vessel.speed} km/ph` }}</p>
        </div>

        <div class="text-center w-4/12 rounded-md bg-gray-800 m-2">
          <p class="mt-4 mb-4 text-xl font-bold">Rudder</p>
          <p class="mb-4 text-base">{{ `${vessel.rudder}°` }}</p>
        </div>

        <div class=" text-center w-4/12 rounded-md bg-gray-800 m-2">
          <p class="mt-4 mb-4 text-xl font-bold">Turning circle</p>
          <p class="mb-4 text-base">{{ `${vessel.turningCircle}°` }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const props = {
  vessel: {
    type: Object,
    required: true,
  }
}

export default {
  props
}
</script>
