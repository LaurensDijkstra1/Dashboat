<template lang="html">
  <div class="px-6 m-4">
    <filter-header />
    <nuxt />
  </div>
</template>

<script lang="js">
import FilterHeader from '~/components/FilterHeader'

export default {
  components: { FilterHeader },
  head: {
    bodyAttrs: {
      class: 'bg-gray-100 dark:bg-gray-800 dark:text-white'
    }
  }
}
</script>

<style lang="scss" scoped></style>
