<template>
  <div>
    <div class="fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5 w-4/12">
      <t-alert
        v-if="snackbarState"
        class=""
        variant="success"
        timeout="4000"
        show
      >
        Positie toegevoegd
      </t-alert>
    </div>
    <div class="w-full">
      <div class="flex">
        <div class="w-6/12">
          <in-port-list />
        </div>

        <div class="w-6/12">
          <property-window />
          <position />
          <t-button class="m-auto" variant="primary" @click="showAlert">
            Add new position
          </t-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InPortList from "~/components/InPortList";
import PropertyWindow from "~/components/PropertyWindow";
import Position from "~/components/Position";

export default {
  components: { InPortList, PropertyWindow, Position },
  data() {
    return {
      snackbarState: false,
    };
  },
  methods: {
    showAlert() {
      // console.log("werkt het?");
      this.snackbarState = true
    },
  },
}
</script>
