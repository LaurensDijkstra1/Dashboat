<script>
import InPortList from "~/components/InPortList";
import PropertyWindow from "~/components/PropertyWindow";
import Position from "~/components/Position";
export default {
  components: { InPortList, PropertyWindow, Position },
  methods: {
    showAlert: () => {
      alert("test");
    },
  },
};
</script>

<template>
  <div class="w-full">
    <div class="flex">
      <div class="w-8/12">
        <in-port-list />
      </div>
      <div class="w-6/12">
        <propertyWindow />
        <position />
        <div class="newPostion"></div>
        <div class="w-full mt-6"></div>
        <t-button v-on:click="showAlert" class="m-auto" variant="primary"
          >Add new position
        </t-button>
      </div>
    </div>
  </div>
</template>
