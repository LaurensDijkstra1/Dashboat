<template lang="html">
  <div class="px-4 py-6">
    <filter-header />
    <div class="flex">
      <inPort />
      <inPort />
    </div>
    <!-- <nuxt /> -->
  </div>
</template>

<script lang="js">
import FilterHeader from '~/components/FilterHeader'
import InPort from '~/components/InPort'
export default {
  components: { FilterHeader,  InPort},
  head: {
    bodyAttrs: {
      class: 'bg-gray-100 dark:bg-gray-800 dark:text-white'
    }
  }
}
</script>

<style lang="scss" scoped></style>
