<template lang="html">
  <div class="px-4 py-6">
    <filter-header />
    <expected />
    

    <nuxt />
  </div>
</template>

<script lang="js">
import FilterHeader from '~/components/FilterHeader'
import Expected from '~/components/Expected'
export default {
  components: { FilterHeader, Expected},
  head: {
    bodyAttrs: {
      class: 'bg-gray-100 dark:bg-gray-800 dark:text-white'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
