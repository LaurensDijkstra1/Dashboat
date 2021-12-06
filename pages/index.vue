<template>
  <div>
    <div class="fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5 w-4/12">
      <t-alert
        class=""
        variant="success"
        timeout="4000"
        v-if="snackbarState"
        show
      >
        Positie toegevoegd
      </t-alert>
    </div>
    <div class="flex">
        <div>
          <inPortList />
        </div>
        <div>
          <expected />
        </div>  
    </div>
    <div class="absolute right-0 top-17 w-6/12 px-4">
      <propertyWindow />
      <position />
      <t-button class="m-auto" v-on:click="showAlert" variant="primary">
        Add new position
      </t-button>              
    </div>    
  </div>
</template>

<script>
import InPortList from '~/components/InPortList'
import PropertyWindow from '~/components/PropertyWindow'
import Position from '~/components/Position'
import Expected from '~/components/Expected.vue';

export default {
  components: { InPortList, PropertyWindow, Position, Expected },
  data () {
    return {
      snackbarState: false,
    }
  },
  methods: {
    showAlert () {
      // console.log("werkt het?");
      this.snackbarState = true;
    },
  },
};
</script>
