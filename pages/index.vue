<template>
  <div class="w-full">
    <div class="w-7/12">
      <in-port-list />
    </div>
    <div class="">
      <propertyWindow />
      <position />
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
