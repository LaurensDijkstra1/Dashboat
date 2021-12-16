<template>
  <div>
    <propertyWindow />
    <position />
    <t-button class="m-auto" v-on:click="showAlert" variant="primary">
      Add new position
    </t-button>
  </div>
</template>

<script>
import PropertyWindow from '~/components/PropertyWindow'
import Position from '~/components/Position'

export default {
  components: {
    PropertyWindow,
    Position
  },
}
</script>

<style scoped>

</style>
