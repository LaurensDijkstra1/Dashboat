<template>
  <div class="w-full flex">
    <div class="w-8/12">
      <in-port-list />
    </div>
    <div class="w-6/12">
      <propertyWindow />
      <position />
      <div class="newPostion"></div>
      <div class="w-full mt-6"></div>
      <t-button class="m-auto" variant="primary">Add new position </t-button>
    </div>
  </div>
</template>

<script>
import InPortList from "~/components/InPortList";
import PropertyWindow from "~/components/PropertyWindow";
import Position from "~/components/Position";
export default {
  components: { InPortList, PropertyWindow, Position },
};
</script>
