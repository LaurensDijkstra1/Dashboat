<template lang="html">
  <div class="px-4 py-6">
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
      class: 'bg-gray-100'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
